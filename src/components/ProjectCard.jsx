import { motion } from 'framer-motion'
import { Github, ExternalLink, FileCode2, BarChart3 } from 'lucide-react'

// Inspect a URL and return { label, Icon } for the link button
function describeLink(url) {
  if (!url) return null
  const u = url.toLowerCase()
  if (u.includes('github.com')) return { label: 'Code', Icon: Github }
  if (u.includes('kaggle.com')) return { label: 'Kaggle', Icon: FileCode2 }
  if (u.includes('tableau.com') || u.includes('public.tableau')) return { label: 'Tableau', Icon: BarChart3 }
  if (u.includes('app.powerbi.com')) return { label: 'Power BI', Icon: BarChart3 }
  if (u.includes('colab.research.google')) return { label: 'Colab', Icon: FileCode2 }
  if (u.includes('medium.com') || u.includes('substack.com')) return { label: 'Read', Icon: ExternalLink }
  return { label: 'Live', Icon: ExternalLink }
}

export default function ProjectCard({ project, index }) {
  // Support both legacy { repo, demo } shape and a flexible links array
  const linkButtons = []
  if (project.links && Array.isArray(project.links)) {
    project.links.forEach((l) => {
      const meta = describeLink(l.url)
      if (meta) linkButtons.push({ url: l.url, label: l.label || meta.label, Icon: meta.Icon })
    })
  } else {
    if (project.repo) {
      const m = describeLink(project.repo)
      linkButtons.push({ url: project.repo, label: m.label, Icon: m.Icon })
    }
    if (project.demo && project.demo !== '#') {
      const m = describeLink(project.demo)
      linkButtons.push({ url: project.demo, label: m.label, Icon: m.Icon })
    }
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 p-7 hover:border-white/25 transition-all duration-500"
    >
      {/* gradient backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative">
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono-ui text-xs text-amber-glow tracking-wider uppercase">
            {project.category}
          </span>
          <span className="font-mono-ui text-xs text-ink-300">{project.year}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
          {project.title}
        </h3>

        <p className="text-ink-300 leading-relaxed mb-6">{project.blurb}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-ui text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {linkButtons.length > 0 && (
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {linkButtons.map(({ url, label, Icon }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-amber-glow transition-colors"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
