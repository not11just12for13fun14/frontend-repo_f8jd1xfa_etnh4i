import Reveal from './Reveal'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-blue-100/90">{subtitle}</p>}
        </Reveal>
        <Reveal className="mt-12" distance={32}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
