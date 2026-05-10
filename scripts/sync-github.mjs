#!/usr/bin/env node
/**
 * GitHub Sync — pulls your repos and writes them to src/data/github.json
 * so the site can display them at build time.
 *
 * Two modes:
 *   1. With GITHUB_TOKEN  → uses GraphQL, fetches PINNED repos + recent activity
 *                            (recommended — higher rate limit, curated display)
 *   2. Without token      → uses REST API, fetches latest-updated public repos
 *                            (no setup, but limited to 60 req/hr per IP)
 *
 * Get a token (one-time, ~30 sec):
 *   github.com → Settings → Developer settings → Personal access tokens
 *   → Fine-grained tokens → Generate new token
 *   → No special scopes needed for public repos; just leave defaults
 *
 * Usage:
 *   npm run sync:github
 */

import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// ─── Configure these ───────────────────────────────────────────────
const USERNAME = process.env.GITHUB_USERNAME || 'AtharvaJoshiAnalyst'
const TOKEN = process.env.GITHUB_TOKEN || null
const MAX_ITEMS = 6
const EXCLUDE_KEYWORDS = ['github.io', 'portfolio', 'dotfiles', '.github']
// ───────────────────────────────────────────────────────────────────

const OUTPUT_PATH = join(process.cwd(), 'src', 'data', 'github.json')
const REST = 'https://api.github.com'
const GRAPHQL = 'https://api.github.com/graphql'

const headers = (extra = {}) => ({
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'portfolio-sync',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
  ...extra,
})

function fromGraphQL(node, pinned = false) {
  return {
    name: node.name,
    description: node.description,
    url: node.url,
    stars: node.stargazerCount,
    forks: node.forkCount,
    language: node.primaryLanguage?.name || null,
    languageColor: node.primaryLanguage?.color || null,
    updatedAt: node.updatedAt,
    pinned,
  }
}

function fromREST(repo) {
  return {
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    languageColor: null,
    updatedAt: repo.updated_at,
    pinned: false,
  }
}

function shouldExclude(repo) {
  const name = repo.name.toLowerCase()
  return EXCLUDE_KEYWORDS.some((k) => name.includes(k))
}

async function fetchViaGraphQL() {
  const query = `
    query($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name description url
              stargazerCount forkCount
              primaryLanguage { name color }
              updatedAt
            }
          }
        }
        repositories(
          first: 12,
          isFork: false,
          privacy: PUBLIC,
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          nodes {
            name description url
            stargazerCount forkCount
            primaryLanguage { name color }
            updatedAt
          }
        }
      }
    }`

  const res = await fetch(GRAPHQL, {
    method: 'POST',
    headers: headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ query, variables: { username: USERNAME } }),
  })

  if (!res.ok) throw new Error(`GraphQL ${res.status} ${res.statusText}`)
  const json = await res.json()
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)

  const user = json.data?.user
  if (!user) throw new Error(`User '${USERNAME}' not found`)

  const pinned = (user.pinnedItems?.nodes || []).map((n) => fromGraphQL(n, true))
  const recent = (user.repositories?.nodes || []).map((n) => fromGraphQL(n, false))

  // Pinned takes priority, then fill remaining slots with recent activity
  const seen = new Set(pinned.map((r) => r.name))
  const merged = [...pinned, ...recent.filter((r) => !seen.has(r.name))]

  return merged.filter((r) => !shouldExclude(r)).slice(0, MAX_ITEMS)
}

async function fetchViaREST() {
  const res = await fetch(
    `${REST}/users/${USERNAME}/repos?sort=updated&per_page=20&type=public`,
    { headers: headers() }
  )
  if (!res.ok) throw new Error(`REST ${res.status} ${res.statusText}`)
  const repos = await res.json()
  return repos
    .filter((r) => !r.fork)
    .filter((r) => !shouldExclude(r))
    .map(fromREST)
    .slice(0, MAX_ITEMS)
}

async function main() {
  console.log(`→ Syncing GitHub data for @${USERNAME}`)

  let repos
  if (TOKEN) {
    console.log('  Using GraphQL (authenticated, pinned repos enabled)')
    repos = await fetchViaGraphQL()
  } else {
    console.log('  Using REST (unauthenticated — pass GITHUB_TOKEN for pinned repos)')
    repos = await fetchViaREST()
  }

  const payload = {
    syncedAt: new Date().toISOString(),
    username: USERNAME,
    mode: TOKEN ? 'graphql' : 'rest',
    items: repos,
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8')

  const pinnedCount = repos.filter((r) => r.pinned).length
  console.log(`✓ Wrote ${repos.length} repos to ${OUTPUT_PATH}`)
  if (pinnedCount) console.log(`  (${pinnedCount} pinned, ${repos.length - pinnedCount} recent)`)
}

main().catch((err) => {
  console.error('✗ Sync failed:', err.message)
  process.exit(1)
})
