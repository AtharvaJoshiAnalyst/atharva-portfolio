import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Pin } from 'lucide-react'
import githubData from '../data/github.json'

export default function GithubFeed() {
  const { items, syncedAt, username, mode } = githubData

  // Hide section until first sync runs
  if (!items || items.length === 0) return null

  return (
    <section className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-mono-ui text-sm text-amber-glow mb-3 tracking-wider">◆ GitHub</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              {mode === 'graphql' ? (
                <>Pinned <span className="italic">commits</span>.</>
              ) : (
                <>Latest <span className="italic">commits</span>.</>
              )}
            </h2>
          </div>
          <div className="text-right">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono-ui text-xs text-ink-300 hover:text-amber-glow transition-colors inline-flex items-center gap-1"
            >
              See all on GitHub <ExternalLink className="w-3 h-3" />
            </a>
            {syncedAt && (
              <p className="font-mono-ui text-xs text-ink-300 mt-2 opacity-60">
                Synced {new Date(syncedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                })}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((repo, i) => (
            <motion.a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              className="group relative p-5 rounded-xl border border-white/10 bg-ink-900/50 hover:border-amber-glow/50 hover:bg-ink-900/80 transition-all duration-300"
            >
              {repo.pinned && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono-ui text-amber-glow uppercase tracking-wider bg-amber-glow/10 border border-amber-glow/30 px-2 py-0.5 rounded-full">
                  <Pin className="w-2.5 h-2.5" /> Pinned
                </span>
              )}

              <div className="flex items-center gap-2 mb-3 text-ink-300 pr-16">
                <Github className="w-4 h-4 flex-shrink-0" />
                <span className="font-mono-ui text-sm group-hover:text-amber-glow transition-colors truncate">
                  {repo.name}
                </span>
              </div>

              <p className="text-sm text-ink-300 line-clamp-2 mb-4 min-h-[2.5rem]">
                {repo.description || (
                  <span className="italic opacity-50">No description</span>
                )}
              </p>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-xs font-mono-ui text-ink-300">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: repo.languageColor || 'var(--color-amber-glow)',
                        opacity: repo.languageColor ? 1 : 0.7,
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
