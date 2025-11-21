import Reveal from './Reveal'

export default function Testimonials() {
  const items = [
    { name: 'María López', role: 'Product Manager', text: 'Excelente comunicación y entrega puntual. El producto superó nuestras expectativas.' },
    { name: 'Juan Pérez', role: 'CTO', text: 'Código limpio, escalable y bien documentado. Recomiendo totalmente.' },
    { name: 'Ana García', role: 'UX Lead', text: 'Gran atención al detalle y foco en la experiencia del usuario.' },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Testimonios</h2>
          <p className="mt-3 text-blue-100/90">Lo que dicen colegas y clientes.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="relative rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                <p className="text-blue-100/90">“{t.text}”</p>
                <div className="mt-4 text-sm text-blue-200/80">{t.name} • {t.role}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
