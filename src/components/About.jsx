export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24">
      <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Sobre mí</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              Soy un desarrollador full stack que disfruta construyendo productos digitales elegantes y eficientes. Me apasiona el clean code, las buenas prácticas y crear experiencias de usuario cuidadas.
            </p>
            <ul className="mt-6 grid gap-3 text-blue-100/90">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-500"></span> Frontend y backend coordinados con foco en DX y UX.</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-purple-500"></span> Rendimiento, accesibilidad y seguridad como pilares.</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-500"></span> Trabajo en equipo, comunicación clara y mentalidad de producto.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" alt="Avatar" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
