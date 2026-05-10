import { motion } from 'framer-motion'
import { Mail, Github, Linkedin,FileCode2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono-ui text-sm text-amber-glow mb-3 tracking-wider">◆ Contact</p>
          <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8">
            Let's <span className="italic">talk</span>
            <br />
            about your data.
          </h2>
          <p className="text-ink-300 text-lg max-w-xl mb-12">
            Whether it's a quick question, a freelance brief, or a full-time role — drop a
            note. I usually reply within 2 days.
          </p>
        </motion.div>

        {/*
          Steps for - Contact form. To make this actually send emails:
          1. Sign up at https://formspree.io
          2. Create a new form and copy the endpoint URL
          3. Replace YOUR_FORM_ID below within URL with your actual form ID from Formspree
        */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          action="https://formspree.io/f/xlgzooly"
          method="POST"
          className="space-y-6 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-mono-ui text-xs uppercase tracking-wider text-ink-300">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full bg-transparent border-b border-white/15 py-3 text-lg focus:outline-none focus:border-amber-glow transition-colors"
              />
            </label>
            <label className="block">
              <span className="font-mono-ui text-xs uppercase tracking-wider text-ink-300">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full bg-transparent border-b border-white/15 py-3 text-lg focus:outline-none focus:border-amber-glow transition-colors"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-mono-ui text-xs uppercase tracking-wider text-ink-300">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full bg-transparent border-b border-white/15 py-3 text-lg focus:outline-none focus:border-amber-glow transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-amber-glow text-ink-950 px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Send message →
          </button>
        </motion.form>

        <div className="pt-12 border-t border-white/5 flex flex-wrap gap-8 text-ink-300">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-amber-glow transition-colors">
            <Mail className="w-4 h-4" /> officialjatharva9@gmail.com
          </a>
          <a href="https://github.com/AtharvaJoshiAnalyst" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-amber-glow transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/joshi-atharva" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-amber-glow transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://www.kaggle.com/atharvaj9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-amber-glow transition-colors">
            <FileCode2 className="w-4 h-4" /> Kaggle
          </a>
        </div>
      </div>
    </section>
  )
}
