export default function Experience() {
  const jobs = [
    { title: 'Desarrollador Full Stack', company: 'TechNova', period: '2022 - Presente', description: 'Construcción de aplicaciones SPA y APIs escalables.' },
    { title: 'Frontend Developer', company: 'PixelLabs', period: '2020 - 2022', description: 'Interfaces accesibles y altamente optimizadas.' },
  ]

  const edu = [
    { title: 'Grado en Ingeniería Informática', company: 'Universidad XYZ', period: '2016 - 2020', description: 'Bases de software, algoritmos y redes.' },
    { title: 'Curso Avanzado de DevOps', company: 'Platzi / Udemy', period: '2021', description: 'CI/CD, contenedores y automatización.' },
  ]

  return (
    <section id="experiencia" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experiencia y formación</h2>
          <p className="mt-3 text-blue-100/90">Recorrido profesional y académico.</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-white font-semibold">Experiencia</h3>
            <ol className="mt-4 space-y-5">
              {jobs.map((j, i) => (
                <li key={i} className="relative rounded-xl border border-blue-500/20 bg-slate-900/60 p-5">
                  <div className="flex justify-between">
                    <p className="text-white font-medium">{j.title} • {j.company}</p>
                    <span className="text-sm text-blue-200/80">{j.period}</span>
                  </div>
                  <p className="mt-2 text-blue-100/90 text-sm">{j.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-white font-semibold">Formación</h3>
            <ol className="mt-4 space-y-5">
              {edu.map((j, i) => (
                <li key={i} className="relative rounded-xl border border-blue-500/20 bg-slate-900/60 p-5">
                  <div className="flex justify-between">
                    <p className="text-white font-medium">{j.title} • {j.company}</p>
                    <span className="text-sm text-blue-200/80">{j.period}</span>
                  </div>
                  <p className="mt-2 text-blue-100/90 text-sm">{j.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
