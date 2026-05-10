import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/70 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Atharva Joshi<span className="text-amber-glow">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono-ui text-ink-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-ink-100 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-glow group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block text-sm font-mono-ui px-4 py-2 border border-white/15 rounded-full hover:border-amber-glow hover:text-amber-glow transition-all"
        >
          Say hello →
        </a>
      </nav>
    </motion.header>
  )
}
