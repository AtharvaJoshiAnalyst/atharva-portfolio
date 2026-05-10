# Atharva — Portfolio

A modern, dynamic portfolio site built with **React + Vite + Tailwind CSS v4 + Framer Motion**.
Two project sections — **curated case studies** (manual) and **GitHub auto-sync** — work together to keep things fresh without much effort.
Deploys free on Vercel, Netlify, or Cloudflare Pages.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the page hot-reloads as you edit.

---

## How project content works

| Section | Source | Update method |
| --- | --- | --- |
| **Projects** (curated) | `src/data/projects.js` | Edit file + commit |
| **GitHub feed** | GitHub REST or GraphQL API | `npm run sync:github` (auto via Action) |

Use **Projects** for hand-picked case studies — Kaggle notebooks, Tableau dashboards, Power BI reports, anything outside GitHub. The card auto-detects the URL and shows the right icon/label (Kaggle, Tableau, Power BI, Colab, etc.).

Use **GitHub feed** for "what I'm currently shipping" — the latest from your GitHub.

---

## Adding projects (Kaggle, Tableau, Power BI, etc.)

Edit `src/data/projects.js`. Each entry supports two link styles:

### Simple — `repo` and/or `demo`

```js
{
  id: 1,
  title: 'Customer Churn Model',
  blurb: 'Logistic regression predicting churn at 86% AUC...',
  tags: ['Python', 'scikit-learn'],
  category: 'Modeling',
  year: '2024',
  repo: 'https://github.com/AtharvaJoshiAnalyst/churn-model',
  demo: 'https://www.kaggle.com/code/atharvajoshi/churn-eda',
  accent: 'from-blue-500/20 to-cyan-500/10',
}
```

The card automatically renders the `demo` button as a **Kaggle** button (with the right icon) because the URL contains `kaggle.com`. Same for Tableau, Power BI, Colab, Medium, etc. Set either field to `''` to hide it.

### Multiple links — use the `links` array

```js
{
  id: 6,
  title: 'A/B Test Toolkit',
  // ...rest of fields
  links: [
    { url: 'https://github.com/AtharvaJoshiAnalyst/ab-toolkit' },     // Code
    { url: 'https://www.kaggle.com/code/atharvajoshi/ab-toolkit' },   // Kaggle
    { url: 'https://medium.com/@atharva/ab-test-writeup' },           // Read
  ],
}
```

Auto-detected URL types:

| URL contains | Button label | Icon |
| --- | --- | --- |
| `github.com` | Code | GitHub |
| `kaggle.com` | Kaggle | File |
| `tableau.com` / `public.tableau` | Tableau | Chart |
| `app.powerbi.com` | Power BI | Chart |
| `colab.research.google` | Colab | File |
| `medium.com` / `substack.com` | Read | External |
| anything else | Live | External |

To override the default label, add `label`: `{ url: '...', label: 'Demo video' }`.

After editing, commit and push — Vercel redeploys in ~30 seconds.

---

## GitHub feed sync

The script (`scripts/sync-github.mjs`) writes your repos to `src/data/github.json`, which the `GithubFeed` component reads at build time.

Two modes:

| Mode | Auth | Rate limit | Pinned repos |
| --- | --- | --- | --- |
| **REST** (default) | None | 60 req/hr | ❌ — shows latest-updated |
| **GraphQL** | Personal access token | 5,000 req/hr | ✅ — shows pinned first |

### Local sync (no token)

```bash
npm run sync:github
```

### Local sync with pinned repos

1. **github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
2. Name it (e.g. "portfolio-sync"), no special scopes needed for public repos
3. Copy the token (starts with `github_pat_`)
4. Run:
   ```bash
   GITHUB_TOKEN=github_pat_xxx npm run sync:github
   ```

Pinned repos now appear first with a "Pinned" badge. To pin specific repos, go to your GitHub profile → **Customize your pins**.

### Auto-sync via GitHub Actions (recommended)

`.github/workflows/sync-github.yml` runs:
- Every **Monday at 06:00 UTC**
- On manual trigger from the **Actions** tab

**Zero setup needed** — Actions provides a built-in `GITHUB_TOKEN` that works with GraphQL out of the box, so pinned repos work automatically once you push the project.

After pushing, go to **Actions → Sync GitHub data → Run workflow** to trigger the first sync. Result auto-commits to `src/data/github.json`, Vercel redeploys.

---

## Customizing copy & visuals

| What | File |
| --- | --- |
| Hero name, tagline, stats | `src/components/Hero.jsx` |
| About copy & details | `src/components/About.jsx` |
| Projects (curated, incl. Kaggle) | `src/data/projects.js` |
| Skills list | `src/components/Skills.jsx` |
| Email + social links | `src/components/Contact.jsx` |
| GitHub username for sync | `scripts/sync-github.mjs` (top of file) |
| Site colors, fonts | `src/index.css` |
| Page title & meta | `index.html` |

## Wire up the contact form

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a form, copy the endpoint URL
3. In `src/components/Contact.jsx` replace `YOUR_FORM_ID` in the `action`

---

## Build & deploy

```bash
npm run build      # outputs to /dist
npm run preview    # preview production build locally
```

### Vercel (easiest)
1. Push to GitHub
2. vercel.com → sign in with GitHub → **Add New → Project** → pick repo → **Deploy**
3. Live at `your-project.vercel.app` in ~60 seconds. Every push redeploys.

### Netlify
1. Push to GitHub
2. netlify.com → **Add new site → Import from Git**
3. Build: `npm run build` · Publish dir: `dist`

### GitHub Pages
1. `npm install --save-dev gh-pages`
2. In `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js` add `base: '/REPO_NAME/'`
4. Run `npm run deploy`

---

## Tech

- React 18 · Vite 5 · Tailwind v4
- Framer Motion (animations)
- Lucide React (icons)
- Formspree (contact form backend)
- GitHub Actions (auto-sync cron)

## License
MIT
