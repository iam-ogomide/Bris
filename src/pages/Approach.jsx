import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../constants/animations'
import ctaImg from '../assets/h4.jpg'
import { ArrowNextIcon, PlusMinusIcon } from '../constants/icons'
import { PILLARS, FOCUS_AREAS, STATS } from '../constants/data'

const StatNumber = ({ value, prefix, suffix, active }) => {
  const [display, setDisplay] = useState(0)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!active || animatedRef.current) return
    animatedRef.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = requestAnimationFrame(() => setDisplay(value))
      return () => cancelAnimationFrame(frame)
    }

    const duration = 1400
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, value])

  return (
    <div className="font-serif-display text-[clamp(34px,3.6vw,50px)] leading-none font-semibold tabular-nums text-brand-mint">
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </div>
  )
}

const Approach = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [statsActive, setStatsActive] = useState(false)
  const pillarsRef = useScrollReveal({ childSelector: '[data-reveal]', y: 24, stagger: 0.1 })
  const focusRef = useScrollReveal({ childSelector: null, y: 24 })
  const statsRef = useScrollReveal({
    childSelector: '[data-reveal]',
    y: 16,
    stagger: 0.09,
    onStart: () => setStatsActive(true),
  })

  const toggleFocus = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-950 pb-20">
        <Navbar />
        <div className="mx-auto max-w-[1180px] px-6 pt-6 sm:px-8">
          <div className="mb-6 flex items-center gap-3 text-[13.5px] text-white/60">
            {/* <span className="h-px w-10 bg-brand-mint" /> */}
            Our approach
          </div>

          <h1 className="mb-9 max-w-[760px] animate-[heroFadeUp_0.8s_ease_forwards] font-serif-display text-[clamp(34px,4.6vw,58px)] leading-[1.12] font-medium tracking-[-0.01em] text-white opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
            A diversified, disciplined investment platform, built on{' '}
            <b className="font-medium text-brand-mint">years of conviction.</b>
          </h1>

          <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 sm:gap-16">
            <p className="max-w-[46ch] animate-[heroFadeUp_0.8s_ease_forwards] text-[16.5px] leading-relaxed text-white/65 opacity-0 [animation-delay:450ms] motion-reduce:animate-none motion-reduce:opacity-100">
              We apply a research-driven, founder-first process to evaluate and back a diverse range of companies across stages, sectors and market cycles.
            </p>
            <p className="max-w-[46ch] animate-[heroFadeUp_0.8s_ease_forwards] text-[16.5px] leading-relaxed text-white/65 opacity-0 [animation-delay:550ms] motion-reduce:animate-none motion-reduce:opacity-100">
              We look for founders solving complex problems where our experience can unlock real value — moving quickly once we see it, and staying close long after the check clears.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8">
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-[28px] border border-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {PILLARS.map((p) => (
            <div key={p.title} data-reveal className="bg-white p-9">
              <div className="mb-5 font-serif-display text-sm text-brand-mint">{p.num}</div>
              <h3 className="mb-3 font-serif-display text-xl leading-snug font-medium text-brand-950">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-gray-500">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-gray-50 px-6 py-20 sm:px-8">
        <div ref={focusRef} className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-[60ch]">
            <h2 className="mb-3 font-serif-display text-3xl font-medium text-brand-950 sm:text-4xl">Where we invest</h2>
            <p className="text-[14.5px] text-gray-500">Nine focus areas spanning stage and sector. Select one to read more.</p>
          </div>

          <div className="border-t border-gray-200">
            {FOCUS_AREAS.map((f, i) => {
              const open = openIndex === i
              return (
                <div key={f.name} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggleFocus(i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-6">
                      <h4
                        className={`font-serif-display text-xl font-medium transition-colors duration-300 sm:w-[240px] sm:flex-none ${
                          open ? 'text-brand-800' : 'text-brand-950'
                        }`}
                      >
                        {f.name}
                      </h4>
                      <span className="text-sm text-gray-500">{f.summary}</span>
                    </div>
                    <PlusMinusIcon open={open} />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-[240px_1fr] sm:gap-6">
                        <div className="hidden sm:block" />
                        <div>
                          <p className="mb-3.5 max-w-[62ch] text-[14.5px] leading-relaxed text-gray-600">{f.body}</p>
                          {f.tags.length > 0 && (
                            <ul className="flex flex-wrap gap-3">
                              {f.tags.map((t) => (
                                <li key={t} className="rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-brand-800">
                                  {t}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-brand-950 px-6 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif-display text-2xl font-medium sm:text-[28px]">Bris by the numbers</h2>
            <span className="text-[12.5px] text-white/45">As of September 2026</span>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} data-reveal>
                <StatNumber value={s.value} prefix={s.prefix} suffix={s.suffix} active={statsActive} />
                <div className="mt-3 text-[13.5px] text-white/65">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[380px] items-end overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/45 to-brand-950/10" />
        <div className="relative z-[2] mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-8 px-6 py-16 sm:px-8">
          <h2 className="max-w-[16ch] font-serif-display text-[clamp(26px,3vw,36px)] font-medium text-white">
            No stage is too early for conviction.
          </h2>
          <Link
            to="/contact"
            className="group inline-flex flex-none items-center gap-2.5 rounded-full bg-brand-mint px-7 py-4 text-[14.5px] font-semibold text-brand-950 transition-all duration-300 hover:gap-3.5 hover:bg-white"
          >
            Get in touch
            <ArrowNextIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Approach
