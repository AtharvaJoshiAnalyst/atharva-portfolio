import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono-ui text-sm text-amber-glow mb-6 tracking-wider"
        >
          ◆ Available for new projects
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight"
        >
          Data into
          <br />
          <span className="italic font-light text-ink-300">decisions.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-10 max-w-xl text-lg md:text-xl text-ink-300 leading-relaxed"
        >
          I'm <span className="text-ink-100">Atharva Joshi</span> (data analyst / data scientist) who turns
          messy data into clear, actionable data stories, wether its for categorical or numerical data.
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-amber-glow text-ink-950 px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            View my work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/15 hover:border-white/40 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.9)}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            ['10+', 'Projects shipped'],
            ['3+', 'Years analyzing'],
            ['SQL · Python', 'Daily drivers'],
            ['London', 'Currently based'],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-2xl md:text-3xl">{stat}</div>
              <div className="font-mono-ui text-xs text-ink-300 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
