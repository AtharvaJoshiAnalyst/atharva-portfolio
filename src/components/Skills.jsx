import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Languages & Querying',
    items: ['SQL', 'Python', 'R', 'DAX', 'M / Power Query'],
  },
  {
    title: 'Data & Machine Learning',
    items: ['Regression', 'Classification', 'Clustering', 'Time Series', 'NLP', 'LLMs','Data Cleaning', 'Feature Engineering', 'Model Evaluation' , 'Other models and techniques'],
  },
  {
    title: 'Visualization',
    items: ['Power BI', 'Tableau', 'Looker', 'Plotly', 'matplotlib'],
  },
  {
    title: 'Data & Cloud',
    items: ['PostgreSQL', 'Snowflake', 'BigQuery', 'dbt', 'Airflow', 'AWS', 'Azure'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'Jupyter', 'VS Code', 'Excel', 'Notion','PowerAutomate'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono-ui text-sm text-amber-glow mb-3 tracking-wider">◆ Toolkit</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight mb-16">
          The <span className="italic"> stack</span> I reach for.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="font-mono-ui text-xs uppercase tracking-wider text-ink-300 mb-6 pb-3 border-b border-white/10">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <span className="text-amber-glow font-mono-ui text-xs">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
