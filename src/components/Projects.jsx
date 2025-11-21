import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Panel Analytics',
    desc: 'Panel interactivo para métricas en tiempo real con visualizaciones avanzadas.',
    tech: ['React', 'Tailwind', 'Vite'],
    demo: '#',
    code: '#'
  },
  {
    title: 'API Ecommerce',
    desc: 'Microservicios para carrito, pagos y catálogo con autenticación JWT.',
    tech: ['FastAPI', 'MongoDB', 'Docker'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Landing SaaS',
    desc: 'Página de producto con A/B testing y optimización de conversión.',
    tech: ['Next.js', 'Framer Motion'],
    demo: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Proyectos destacados</h2>
          <p className="mt-3 text-blue-100/90">Una selección de trabajos con tecnologías modernas.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
              <div className="h-40 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 ring-1 ring-white/5" />
              <h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-md bg-blue-500/15 px-2 py-1 text-xs text-blue-200">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3 py-1.5 text-sm text-blue-100 hover:border-blue-400/60"><ExternalLink size={16}/> Demo</a>
                <a href={p.code} className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3 py-1.5 text-sm text-blue-100 hover:border-blue-400/60"><Github size={16}/> Código</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
