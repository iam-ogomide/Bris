import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../constants/animations'
import { ArrowUpRightIcon, PlayIcon, XIcon, ArrowLeftIcon, ArrowRightIcon } from '../constants/icons'
import { FEATURED, VIDEOS, CATEGORIES, NEWS_ITEMS } from '../constants/data'

const VIDEO_EMBED = 'https://www.youtube.com/embed/2u007Msq1qo?autoplay=1'
const PAGE_SIZE = 6

const Insights = () => {
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(null)
  const [articleOpen, setArticleOpen] = useState(false)
  const [activeArticle, setActiveArticle] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All Categories')
  const [page, setPage] = useState(1)

  const scrollerRef = useRef(null)
  const videosRef = useScrollReveal({ childSelector: '[data-reveal]', y: 24, stagger: 0.08 })
  const newsRef = useScrollReveal({ childSelector: null, y: 24 })

  const filteredItems = useMemo(
    () => (activeCategory === 'All Categories' ? NEWS_ITEMS : NEWS_ITEMS.filter((n) => n.cat === activeCategory)),
    [activeCategory],
  )
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE))
  const pagedItems = filteredItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const countFor = (cat) => (cat === 'All Categories' ? NEWS_ITEMS.length : NEWS_ITEMS.filter((n) => n.cat === cat).length)

  const selectCategory = (cat) => {
    setActiveCategory(cat)
    setPage(1)
  }

  const scrollVideos = (dir) => scrollerRef.current?.scrollBy({ left: dir * 640, behavior: 'smooth' })

  const openVideo = (v) => {
    setActiveVideo(v)
    setVideoOpen(true)
  }
  const closeVideo = () => setVideoOpen(false)

  const openArticle = (n) => {
    setActiveArticle(n)
    setArticleOpen(true)
  }
  const closeArticle = () => setArticleOpen(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setVideoOpen(false)
      setArticleOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const revealKey = `${activeCategory}-${page}`

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950">
        <Navbar />
        <div className="relative mx-auto grid max-w-[1380px] gap-10 px-6 pt-6 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-20">
          <div>
            <div
              className="mb-5 flex animate-[heroFadeUp_0.7s_ease_forwards] items-center gap-3 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
            >
              <span className="h-px w-10 bg-brand-mint" />
              <span className="text-xs font-semibold tracking-[0.08em] text-white/60 uppercase">Research & Commentary</span>
            </div>

            <h1 className="font-serif-display text-[clamp(40px,6vw,76px)] leading-[0.98] font-medium text-white">
              <span className="block overflow-hidden">
                <span
                  className="block animate-[heroRiseIn_0.9s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
                  style={{ animationDelay: '0.05s' }}
                >
                  Our
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block animate-[heroRiseIn_0.9s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
                  style={{ animationDelay: '0.16s' }}
                >
                  Insights
                </span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[46ch] animate-[heroFadeUp_0.8s_ease_forwards] text-[17px] leading-relaxed text-white/60 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{ animationDelay: '0.5s' }}
            >
              Perspective from our investment team on the markets we back, drawn from white papers, media appearances, and conversations with our
              founders.
            </p>
          </div>

          <div
            className="relative animate-[heroFadeUp_0.8s_ease_forwards] rounded-[28px] bg-brand-900 p-8 opacity-0 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="mb-5 flex items-center justify-between text-[12.5px] tracking-[0.03em] text-brand-mint">
              <span>{FEATURED.kicker}</span>
              <span className="text-white/50">{FEATURED.date}</span>
            </div>
            <h2 className="mb-7 font-serif-display text-2xl leading-[1.2] font-medium text-white">{FEATURED.title}</h2>
            <a
              href={FEATURED.url}
              className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm text-white transition-all duration-300 hover:gap-3 hover:border-white"
            >
              Read the paper
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="pointer-events-none absolute inset-2.5 rounded-2xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="group overflow-hidden border-y border-white/10 bg-brand-950">
        <div className="flex w-max animate-[marqueeScroll_38s_linear_infinite] py-3.5 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {[...NEWS_ITEMS.slice(0, 9), ...NEWS_ITEMS.slice(0, 9)].map((n, i) => (
            <span key={i} className="flex shrink-0 items-center gap-4 px-8 text-[13.5px] whitespace-nowrap text-white/70">
              <b className="font-semibold text-brand-mint">{n.cat}</b> {n.title} <span className="text-white/20">·</span> {n.date}
            </span>
          ))}
        </div>
      </div>

      {/* Videos */}
      <section ref={videosRef} className="bg-white px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mb-2 block text-sm font-semibold tracking-[0.04em] text-gray-400 uppercase">Watch</span>
              <h2 className="font-serif-display text-3xl font-medium text-brand-950 sm:text-4xl">Videos</h2>
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => scrollVideos(-1)}
                aria-label="Scroll videos left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-950 hover:bg-brand-950 hover:text-white"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollVideos(1)}
                aria-label="Scroll videos right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-950 hover:bg-brand-950 hover:text-white"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto pb-3 [scroll-snap-type:x_proximity] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIDEOS.map((v, i) => (
              <button
                key={`${v.title}-${i}`}
                type="button"
                onClick={() => openVideo(v)}
                data-reveal
                className="group w-[280px] shrink-0 text-left [scroll-snap-align:start] sm:w-[300px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={v.img}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[45%] contrast-105 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/0 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 flex items-center gap-2.5 text-[12.5px] font-medium text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover:border-brand-mint group-hover:bg-brand-mint">
                      <PlayIcon className="ml-0.5 h-3 w-3 text-white transition-colors duration-300 group-hover:text-brand-950" />
                    </span>
                    Watch
                  </div>
                </div>
                <h4 className="mt-3.5 line-clamp-2 text-[14.5px] leading-snug font-semibold text-brand-950">{v.title}</h4>
                <p className="mt-1 text-[12.5px] text-gray-400">{v.meta}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section ref={newsRef} className="bg-gray-50 px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mb-2 block text-sm font-semibold tracking-[0.04em] text-gray-400 uppercase">Latest</span>
              <h2 className="font-serif-display text-3xl font-medium text-brand-950 sm:text-4xl">News & Insights</h2>
            </div>
            <p className="max-w-[320px] text-[13.5px] leading-relaxed text-gray-500">{NEWS_ITEMS.length} items.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="flex flex-wrap gap-2 lg:sticky lg:top-24 lg:h-fit lg:flex-col lg:flex-nowrap lg:gap-1">
              <p className="mb-1 hidden text-[12.5px] font-semibold text-gray-400 lg:block">Categories</p>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => selectCategory(cat)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium whitespace-nowrap transition-all duration-200 lg:w-full lg:rounded-none lg:border-none lg:border-b lg:border-transparent lg:px-0 lg:py-2.5 ${
                    activeCategory === cat
                      ? 'border-brand-950 bg-brand-950 text-white lg:bg-transparent lg:font-semibold lg:text-brand-950'
                      : 'border-gray-200 bg-white text-gray-500 hover:text-brand-950 lg:bg-transparent'
                  }`}
                >
                  <span
                    className={`hidden h-1.5 w-1.5 shrink-0 rounded-full lg:inline-block ${
                      activeCategory === cat ? 'bg-brand-mint' : 'bg-transparent'
                    }`}
                  />
                  {cat}
                  <span className="ml-auto text-[11px] text-gray-400 tabular-nums">{countFor(cat)}</span>
                </button>
              ))}
            </aside>

            <div>
              <div className="border-t border-gray-200">
                {pagedItems.length === 0 ? (
                  <p className="py-10 text-[14.5px] text-gray-500">No items in this category yet.</p>
                ) : (
                  pagedItems.map((n, i) => (
                    <button
                      key={`${revealKey}-${n.title}`}
                      type="button"
                      onClick={() => openArticle(n)}
                      style={{ animationDelay: `${i * 55}ms` }}
                      className="group grid w-full grid-cols-1 items-baseline gap-1.5 border-b border-gray-200 py-6 text-left opacity-0 transition-colors duration-200 hover:bg-white animate-[heroFadeUp_0.5s_ease_both] motion-reduce:animate-none motion-reduce:opacity-100 sm:grid-cols-[110px_1fr_120px] sm:gap-6 sm:py-5"
                    >
                      <span className="text-xs font-semibold text-brand-800">{n.cat}</span>
                      <h4 className="font-serif-display text-lg leading-snug font-medium text-brand-950 transition-colors duration-200 group-hover:text-brand-800 sm:text-[1.15rem]">
                        {n.title}
                      </h4>
                      <span className="text-[13px] text-gray-400 sm:text-right">{n.date}</span>
                    </button>
                  ))
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[13.5px] text-gray-400">
                  {filteredItems.length === 0 ? '0' : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filteredItems.length)}`} of{' '}
                  {filteredItems.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-label="Previous page"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all duration-200 enabled:hover:bg-brand-950 enabled:hover:text-white disabled:opacity-30"
                  >
                    <ArrowLeftIcon className="h-3.5 w-3.5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
                        page === n ? 'bg-brand-950 text-white' : 'text-gray-400 hover:text-brand-950'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-label="Next page"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all duration-200 enabled:hover:bg-brand-950 enabled:hover:text-white disabled:opacity-30"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <div
        onClick={(e) => e.target === e.currentTarget && closeVideo()}
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-brand-950/70 p-5 backdrop-blur-md transition-opacity duration-300 ${
          videoOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`relative w-full max-w-[840px] rounded-[20px] bg-black p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            videoOpen ? 'translate-y-0 scale-100' : 'translate-y-[30px] scale-95'
          }`}
        >
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close video"
            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/30"
          >
            <XIcon className="h-4 w-4" />
          </button>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            {videoOpen && activeVideo && (
              <iframe
                title={activeVideo.title}
                src={VIDEO_EMBED}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full border-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      <div
        onClick={(e) => e.target === e.currentTarget && closeArticle()}
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-brand-950/65 p-5 backdrop-blur-md transition-opacity duration-300 ${
          articleOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`relative w-full max-w-[640px] rounded-[28px] bg-white p-7 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-9 ${
            articleOpen ? 'translate-y-0 scale-100' : 'translate-y-[30px] scale-95'
          }`}
        >
          <button
            type="button"
            onClick={closeArticle}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-brand-950 transition-colors duration-200 hover:bg-gray-200"
          >
            <XIcon className="h-4 w-4" />
          </button>
          {activeArticle && (
            <>
              <span className="mb-3.5 inline-block rounded-full bg-brand-mint px-3.5 py-1.5 text-[0.8rem] font-bold text-brand-950">
                {activeArticle.cat}
              </span>
              <h2 className="mb-2 pr-8 font-serif-display text-[1.5rem] leading-[1.25] font-medium text-brand-950 sm:text-[1.7rem]">
                {activeArticle.title}
              </h2>
              <p className="mb-4 text-[13px] text-gray-400">
                {activeArticle.source} · {activeArticle.date}
              </p>
              <p className="text-[0.95rem] leading-[1.65] text-gray-600">{activeArticle.excerpt}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Insights
