import { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView'
import { CarouselChevronLeftIcon, CarouselChevronRightIcon } from '../constants/icons'
import { CARDS } from '../constants/data'

const BrandCard = ({ card }) => (
  <div className="relative flex h-[300px] w-[min(320px,74vw)] shrink-0 scroll-ml-6 flex-col justify-end overflow-hidden rounded-[20px] p-6 text-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-[3] hover:scale-[1.045] min-[760px]:h-[340px] min-[760px]:p-[26px]">
    <img
      src={card.img}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/45 to-brand-950/10" />

    <div className="absolute top-7 left-7 z-[2] flex items-center gap-2.5">
      <card.logo className="h-[26px] w-[26px] shrink-0" />
      <span className="text-[15px] leading-[1.1] font-bold tracking-[0.01em]">
        {card.logoText}
        <span className="block text-[10px] font-medium tracking-[0.14em] opacity-75">{card.logoSub}</span>
      </span>
    </div>

    <div className="relative z-[2]">
      <div className="mb-3 text-[19px] font-semibold tracking-[-0.01em]">{card.name}</div>
      <div className="max-w-[320px] text-[13.5px] leading-[1.65] text-white/82">{card.desc}</div>
    </div>
  </div>
)

const PortfolioCarousel = () => {
  const [headerRef, headerInView] = useInView(0.15)
  const [trackWrapRef, trackWrapInView] = useInView(0.15)
  const trackRef = useRef(null)
  const [thumb, setThumb] = useState({ width: 100, left: 0 })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0 })
  const [dragging, setDragging] = useState(false)

  const updateControls = () => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0
    const visibleFraction = Math.min(track.clientWidth / track.scrollWidth, 1)
    const width = visibleFraction * 100
    const left = progress * (100 - width)
    setThumb({ width, left })
    setAtStart(track.scrollLeft <= 4)
    setAtEnd(track.scrollLeft >= maxScroll - 4)
  }

  useEffect(() => {
    updateControls()
    window.addEventListener('resize', updateControls)
    return () => window.removeEventListener('resize', updateControls)
  }, [])

  const cardStep = () => {
    const track = trackRef.current
    const firstCard = track?.querySelector('[data-pf-card]')
    if (!firstCard) return (track?.clientWidth ?? 0) * 0.8
    const style = getComputedStyle(track)
    const gap = parseFloat(style.columnGap || style.gap || '24')
    return firstCard.getBoundingClientRect().width + gap
  }

  const scrollByStep = (dir) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' })
  }

  const handlePointerDown = (e) => {
    const track = trackRef.current
    if (!track) return
    dragState.current = { isDown: true, startX: e.clientX, startScroll: track.scrollLeft }
    setDragging(true)
    track.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragState.current.isDown || !trackRef.current) return
    const dx = e.clientX - dragState.current.startX
    trackRef.current.scrollLeft = dragState.current.startScroll - dx
  }

  const endDrag = () => {
    dragState.current.isDown = false
    setDragging(false)
  }

  return (
    <section className="overflow-hidden bg-white pt-2.5 pb-20 min-[760px]:pt-5 min-[900px]:pb-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 min-[900px]:px-12">
        <div
          ref={headerRef}
          className={`mb-12 flex flex-col flex-wrap items-start justify-between gap-8 transition-all duration-700 min-[760px]:flex-row ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="max-w-[480px] text-[clamp(28px,3.4vw,40px)] leading-[1.22] font-medium tracking-[-0.01em] text-brand-950">
            A Growing Portfolio of Enduring Partnerships
          </h2>
          <div className="max-w-[280px] pt-1.5">
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              We partner with exceptional entrepreneurs to build businesses that stand the test of time.
            </p>
            <button className="group inline-flex cursor-pointer items-center gap-2 rounded-full border-none bg-brand-900 px-5 py-3 text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-800">
              Explore Our Cases
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackWrapRef}
          className={`relative transition-all delay-150 duration-700 ${
            trackWrapInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div
            ref={trackRef}
            onScroll={updateControls}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            className={`-mx-6 flex snap-x snap-proximity gap-4 overflow-x-auto px-6 py-5 select-none [scrollbar-width:none] min-[760px]:-mx-12 min-[760px]:gap-6 min-[760px]:px-12 min-[760px]:py-5 [&::-webkit-scrollbar]:hidden ${
              dragging ? 'cursor-grabbing [scroll-snap-type:none]' : 'cursor-grab'
            }`}
          >
            {CARDS.map((card) => (
              <div key={card.id} data-pf-card className="snap-start">
                <BrandCard card={card} />
              </div>
            ))}
          </div>

          <div className="mt-9 flex items-center gap-6">
            <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-gray-200">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-[#2f2b26] transition-[left,width] duration-250 ease-out"
                style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
              />
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => scrollByStep(-1)}
                disabled={atStart}
                aria-label="Previous"
                className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border-none bg-[#4b4640] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#332f2a] disabled:cursor-default disabled:opacity-35"
              >
                <CarouselChevronLeftIcon />
              </button>
              <button
                onClick={() => scrollByStep(1)}
                disabled={atEnd}
                aria-label="Next"
                className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border-none bg-[#4b4640] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#332f2a] disabled:cursor-default disabled:opacity-35"
              >
                <CarouselChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCarousel
