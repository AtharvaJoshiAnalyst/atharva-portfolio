import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-mono-ui text-sm text-amber-glow mb-3 tracking-wider">◆ Selected work</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Things I've <span className="italic">built</span>.
            </h2>
          </div>
          <p className="font-mono-ui text-sm text-ink-300 max-w-xs">
            A mix of professional and personal projects. Click into any for the full case study.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono-ui text-xs uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-amber-glow text-ink-950'
                  : 'border border-white/10 text-ink-300 hover:border-white/30 hover:text-ink-100'
              }`}
            >
              {cat}
              <span className="ml-2 opacity-60">
                {cat === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
