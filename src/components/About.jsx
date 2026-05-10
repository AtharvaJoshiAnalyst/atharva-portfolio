import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-mono-ui text-sm text-amber-glow mb-4 tracking-wider"
        >
          ◆ About
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              Transforming raw data into <span className="italic">meaningful insights</span>
              <br /> by data tools and storytelling.
            </h2>
            <div className="space-y-5 text-ink-300 text-lg leading-relaxed max-w-prose">
              <p>
                I started out curious about why numbers tell different stories depending on who's
                asking. That curiosity became a career working on data analysis and machine learning projects, while creating compelling narratives from data driven insights and storytelling through dashboards.
              </p>
              <p>
                These days I work mostly with <span className="text-ink-100">SQL</span>,{' '}
                <span className="text-ink-100">Python</span>, and{''}
                <span className="text-ink-100">Machine learning</span>. I care about making impactful data decisions and machine learning solutions that drive business growth and improve user experience. I also have experience with data visualization tools like Power BI and Tableau, and cloud platforms like Azure and AWS.
              </p>
              <p>
                Outside of work I'm usually exploring new technologies, exploring new cities, playing sports, or working on machine learning projects.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-5 md:pl-8 md:border-l border-white/10"
          >
            <dl className="space-y-6">
              {[
                ['Role', 'Data Analyst / Data Scientist'],
                ['Focus', 'Analytics, dashboards, ETL, and machine learning'],
                ['Stack', 'SQL · Python · Power BI · Machine Learning · Azure · AWS'],
                ['Location', 'London, UK'],
                ['Status', 'Open to opportunities'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 pb-4 border-b border-white/5">
                  <dt className="font-mono-ui text-xs text-ink-300 uppercase tracking-wider pt-1">
                    {k}
                  </dt>
                  <dd className="text-right text-ink-100">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
