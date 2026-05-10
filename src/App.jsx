import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import GithubFeed from './components/GithubFeed'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient backdrop glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />     {/* curated work — includes manual Kaggle links */}
        <GithubFeed />   {/* auto: latest GitHub repos via sync */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
