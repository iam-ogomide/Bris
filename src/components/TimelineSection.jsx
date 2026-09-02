import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../constants/animations'
import { TimelineChevronLeftIcon, TimelineChevronRightIcon } from '../constants/icons'
import { MILESTONES } from '../constants/data'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const navBtnClass =
  'flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-brand-mint/12 bg-[#0d211f] text-white/45 transition-all duration-250 hover:border-brand-mint/35 hover:bg-brand-mint/8 hover:text-brand-mint hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-brand-mint/12 disabled:hover:bg-[#0d211f] disabled:hover:text-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-mint focus-visible:outline-offset-2'

const TimelineSection = () => {
  const sectionRef = useScrollReveal({ childSelector: '[data-reveal]', y: 24 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [cardSwapKey, setCardSwapKey] = useState(0)
  const [direction, setDirection] = useState(1)
  const [yearPhase, setYearPhase] = useState('idle')
  const isAnimatingRef = useRef(false)
  const timersRef = useRef([])

  useEffect(() => () => timersRef.current.forEach(clearTimeout), [])

  const goTo = (newIndex) => {
    if (isAnimatingRef.current || newIndex === activeIndex || newIndex < 0 || newIndex >= MILESTONES.length) return

    if (prefersReducedMotion()) {
      setActiveIndex(newIndex)
      setCardIndex(newIndex)
      setCardSwapKey((k) => k + 1)
      return
    }

    isAnimatingRef.current = true
    const dir = newIndex > activeIndex ? 1 : -1
    setDirection(dir)
    setYearPhase('exit')

    const t1 = setTimeout(() => {
      setActiveIndex(newIndex)
      setYearPhase('enter-start')
      requestAnimationFrame(() => requestAnimationFrame(() => setYearPhase('enter')))

      const t2 = setTimeout(() => {
        setCardIndex(newIndex)
        setCardSwapKey((k) => k + 1)
      }, 80)
      timersRef.current.push(t2)

      const t3 = setTimeout(() => {
        isAnimatingRef.current = false
        setYearPhase('idle')
      }, 500)
      timersRef.current.push(t3)
    }, 350)
    timersRef.current.push(t1)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goTo(activeIndex + 1)
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [activeIndex])

  const yearStyle = (() => {
    switch (yearPhase) {
      case 'exit':
        return {
          transform: `translateY(${direction > 0 ? -60 : 60}px)`,
          opacity: 0,
          transition: 'transform 0.4s cubic-bezier(0.4,0,1,1), opacity 0.4s cubic-bezier(0.4,0,1,1)',
        }
      case 'enter-start':
        return {
          transform: `translateY(${direction > 0 ? 60 : -60}px)`,
          opacity: 0,
          transition: 'none',
        }
      case 'enter':
        return {
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s cubic-bezier(0.22,1,0.36,1)',
        }
      default:
        return {
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'transform 0.4s cubic-bezier(0.4,0,1,1), opacity 0.4s cubic-bezier(0.4,0,1,1)',
        }
    }
  })()

  const card = MILESTONES[cardIndex]
  const trackPct = (activeIndex / (MILESTONES.length - 1)) * 100

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-950 px-6 py-20 text-white min-[760px]:px-12 min-[760px]:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span
          className="absolute -top-[20%] -left-[10%] h-[70%] w-[60%] animate-[ambientPulse_8s_ease-in-out_infinite_alternate] rounded-full motion-reduce:animate-none"
          style={{ background: 'radial-gradient(ellipse, rgba(111,203,190,0.06) 0%, transparent 70%)' }}
        />
        <span
          className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[50%] animate-[ambientPulse_10s_ease-in-out_infinite_alternate-reverse] rounded-full motion-reduce:animate-none"
          style={{ background: 'radial-gradient(ellipse, rgba(18,67,63,0.35) 0%, transparent 70%)' }}
        />
      </div>

      <div data-reveal className="relative z-[1] mx-auto max-w-[1200px]">
        <div className="relative mb-16">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-brand-mint uppercase">
            <span
              className="h-1.5 w-1.5 animate-[blink_2.5s_ease-in-out_infinite] rounded-full bg-brand-mint motion-reduce:animate-none"
              style={{ boxShadow: '0 0 8px #6fcbbe' }}
            />
            Company Milestones
          </div>
          <h2 className="font-serif-display text-[clamp(36px,5vw,56px)] leading-[1.05] font-normal tracking-[-0.02em]">
            Bris <em className="text-brand-mint italic">Timeline</em>
          </h2>

          <div className="absolute top-0 right-0 flex gap-2">
            <button onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous year" className={navBtnClass}>
              <TimelineChevronLeftIcon />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === MILESTONES.length - 1}
              aria-label="Next year"
              className={navBtnClass}
            >
              <TimelineChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="relative mb-10 h-[clamp(96px,17vw,196px)] overflow-hidden">
          <div
            className="absolute top-0 left-0 bg-gradient-to-br from-brand-mint to-brand-mint/30 bg-clip-text font-serif-display text-[clamp(72px,14vw,168px)] leading-none font-normal tracking-[-0.04em] text-transparent"
            style={yearStyle}
          >
            {MILESTONES[activeIndex].year}
          </div>
        </div>

        <div className="relative mb-12">
          <div className="relative mt-7 h-0.5 rounded-full bg-brand-mint/12">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-brand-mint to-brand-mint/40 transition-[width] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${trackPct}%`, boxShadow: '0 0 12px rgba(111,203,190,0.4)' }}
            />
          </div>
          <div className="relative top-[-9px] flex justify-between">
            {MILESTONES.map((m, i) => {
              const active = i === activeIndex
              return (
                <button
                  key={m.year}
                  onClick={() => goTo(i)}
                  className="group flex cursor-pointer flex-col items-center gap-2.5 border-none bg-none px-2 font-sans"
                >
                  <span
                    className={`block h-[18px] w-[18px] rounded-full border-2 transition-all duration-400 ${
                      active
                        ? 'scale-[1.2] border-brand-mint bg-brand-mint shadow-[0_0_0_4px_rgba(111,203,190,0.15),0_0_20px_rgba(111,203,190,0.4)]'
                        : 'border-brand-mint/25 bg-brand-950 group-hover:scale-110 group-hover:border-brand-mint/35'
                    }`}
                  />
                  <span
                    className={`text-xs font-medium tracking-[0.04em] transition-colors duration-300 select-none ${
                      active ? 'font-semibold text-brand-mint' : 'text-white/45 group-hover:text-white'
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div
          key={cardSwapKey}
          className="relative flex items-start gap-5 rounded-2xl border border-brand-mint/12 bg-[#0d211f] px-6 py-6 animate-[swapText_0.35s_cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none min-[760px]:px-8 min-[760px]:py-7"
        >
          {/* <span className="min-h-[48px] w-[3px] shrink-0 self-stretch rounded-[3px] bg-gradient-to-b from-brand-mint to-brand-mint/20" /> */}
          <div className="flex-1">
            <div className="mb-2 text-[17px] leading-[1.4] font-normal text-white">{card.title}</div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/20 bg-brand-mint/10 px-3 py-1 text-xs font-semibold tracking-[0.06em] text-brand-mint uppercase">
              <span className="h-[5px] w-[5px] rounded-full bg-brand-mint" />
              {card.tag}
            </div>
          </div>
        </div>

        {/* <p className="mt-6 text-right text-[11px] tracking-[0.06em] text-white/20">← → arrow keys to navigate</p> */}
      </div>
    </section>
  )
}

export default TimelineSection
