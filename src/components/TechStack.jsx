const Badge = ({ children, level }) => (
  <div className="group relative rounded-xl border border-blue-500/20 bg-slate-900/60 px-3 py-2 text-sm text-blue-100 hover:border-blue-400/40 transition-colors">
    <span>{children}</span>
    {level && (
      <span className="ml-2 rounded-md bg-blue-500/20 px-2 py-0.5 text-xs text-blue-200">{level}</span>
    )}
    <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_25px_rgba(59,130,246,0.35)]"></div>
  </div>
)

export default function TechStack() {
  return (
    <section id="habilidades" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Habilidades</h2>
          <p className="mt-3 text-blue-100/90">Tecnologías con las que trabajo a diario.</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge level="Avanzado">HTML</Badge>
              <Badge level="Avanzado">CSS / Tailwind</Badge>
              <Badge level="Avanzado">JavaScript</Badge>
              <Badge level="Avanzado">React</Badge>
              <Badge level="Intermedio">TypeScript</Badge>
              <Badge level="Intermedio">Framer Motion</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold">Backend</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge level="Intermedio">Node.js</Badge>
              <Badge level="Intermedio">Express</Badge>
              <Badge level="Intermedio">PHP / Laravel</Badge>
              <Badge level="Intermedio">Python / FastAPI</Badge>
              <Badge level="Intermedio">MySQL / MongoDB</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold">Herramientas</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge level="Avanzado">Git</Badge>
              <Badge level="Intermedio">Docker</Badge>
              <Badge level="Intermedio">Vite</Badge>
              <Badge level="Intermedio">CI/CD</Badge>
              <Badge level="Intermedio">Testing</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
