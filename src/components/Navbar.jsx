import { useState } from 'react'
import { Menu, X, FileDown, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-blue-500/20 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
              <span className="text-white font-semibold tracking-tight">Dev Futurista</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-blue-100 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a
                href="https://example.com/mi-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-shadow"
              >
                <FileDown size={16} /> CV
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white"><Linkedin size={18} /></a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-blue-100 hover:text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <nav className="md:hidden border-t border-blue-500/20 px-4 py-3">
              <div className="grid gap-3">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-blue-100 hover:text-white transition-colors">
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://example.com/mi-cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                >
                  <FileDown size={16} /> Descargar CV
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
