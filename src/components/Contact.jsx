import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. Te responderé pronto!')
  }

  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contacto</h2>
          <p className="mt-3 text-blue-100/90">¿Tienes un proyecto en mente? Hablemos.</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6">
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Nombre</label>
                  <input type="text" required className="w-full rounded-lg bg-slate-950/60 border border-blue-500/30 px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Email</label>
                  <input type="email" required className="w-full rounded-lg bg-slate-950/60 border border-blue-500/30 px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Mensaje</label>
                  <textarea rows="5" required className="w-full rounded-lg bg-slate-950/60 border border-blue-500/30 px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <button type="submit" className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-shadow">
                  Enviar
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6">
              <p className="text-blue-100/90">También puedes encontrarme en:</p>
              <div className="mt-4 flex items-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3 py-2 text-blue-100 hover:border-blue-400/60"><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3 py-2 text-blue-100 hover:border-blue-400/60"><Linkedin size={18}/> LinkedIn</a>
                <a href="mailto:email@example.com" className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3 py-2 text-blue-100 hover:border-blue-400/60"><Mail size={18}/> Email</a>
              </div>
              <div className="mt-6 text-blue-200 text-sm">Disponible para colaboraciones, freelancing y proyectos a medida.</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
