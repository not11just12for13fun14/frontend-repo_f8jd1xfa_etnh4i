import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* parallax overlay accents */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/90 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-slate-900/50 px-3 py-1 text-xs text-blue-200">Disponible para proyectos</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            Desarrollador Web Full Stack
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            Diseño y desarrollo aplicaciones web modernas, rápidas y escalables. Enfocado en rendimiento, accesibilidad y una experiencia impecable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://example.com/mi-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-shadow"
            >
              Descargar CV
            </a>
            <a href="#proyectos" className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-slate-900/60 px-5 py-3 font-medium text-blue-100 hover:border-blue-400/60 transition-colors">
              Ver proyectos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
