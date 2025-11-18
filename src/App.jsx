import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Process from './components/Process'
import Contact from './components/Contact'
import Mariages from './components/Mariages'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Textured backdrop with subtle grain and vignette */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_90%)] opacity-[0.7]" />

      <Navbar />
      <Hero />
      <Showcase />
      <Mariages />
      <Process />
      <Contact />

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Belle Époque Location — Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}

export default App