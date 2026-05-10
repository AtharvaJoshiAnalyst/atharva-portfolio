export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 font-mono-ui text-xs text-ink-300">
        <span>© {new Date().getFullYear()} Atharva Joshi · Built with React + Vite</span>
        <a
          href="#top"
          className="hover:text-amber-glow transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
