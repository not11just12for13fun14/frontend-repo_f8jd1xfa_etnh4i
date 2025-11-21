import { useMemo } from 'react'

const Pill = ({ label }) => (
  <div className="group relative mx-2 inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-slate-900/60 px-4 py-2 text-sm text-blue-100 shadow-[0_0_18px_rgba(59,130,246,0.15)] hover:border-blue-400/60 transition-colors">
    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
    <span className="tracking-wide">{label}</span>
  </div>
)

export default function InfiniteMenu({ items = [], reverse = false, speed = 'slow' }) {
  const speedClass = useMemo(() => {
    switch (speed) {
      case 'fast':
        return reverse ? 'animate-marquee-x-reverse-fast' : 'animate-marquee-x-fast'
      case 'normal':
        return reverse ? 'animate-marquee-x-reverse' : 'animate-marquee-x'
      default:
        return reverse ? 'animate-marquee-x-reverse-slow' : 'animate-marquee-x-slow'
    }
  }, [reverse, speed])

  // Duplicate the list so the loop looks seamless
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <div className={`flex min-w-max items-center ${speedClass}`}>
        {loop.map((item, i) => (
          <Pill key={`${item}-${i}`} label={item} />
        ))}
      </div>
      {/* subtle gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  )
}
