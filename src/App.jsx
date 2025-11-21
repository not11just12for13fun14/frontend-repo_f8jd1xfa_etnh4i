import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(1000px_500px_at_10%_0%,rgba(168,85,247,0.12),transparent)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />

        <footer className="border-t border-blue-500/20 bg-slate-950/70">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200/80">© {new Date().getFullYear()} Dev Futurista. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#inicio" className="text-sm text-blue-200 hover:text-white">Inicio</a>
              <a href="https://example.com/mi-cv.pdf" target="_blank" rel="noreferrer" className="text-sm text-blue-200 hover:text-white">Descargar CV</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
