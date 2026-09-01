import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useInView from '../hooks/useInView'
import heroImg1 from '../assets/h1.jpg'
import heroImg3 from '../assets/h3.jpg'
import heroImg7 from '../assets/h7.jpg'

const ArrowUpRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7M17 7H9M17 7V15" />
  </svg>
)

const FlameIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 23c-4.4 0-8-3.4-8-7.5 0-3 1.8-5 3-7 .3 2 1.5 3 2.5 2-.5-3 1-5.5 3.5-7.5-.5 2.5 0 4 1.5 5 2 1.7 3.5 4 3.5 7 0 4.1-3.6 7.5-8 7.5z"
      fill="currentColor"
    />
  </svg>
)

const PlayIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </svg>
)

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className}>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
)

const CARD1 = {
  category: 'Portfolio',
  title: 'Our Portfolio Co. Closes $40M Series B',
  body: "One of our portfolio companies just closed a $40M Series B led by a top-tier growth fund, with participation from three of our earliest co-investors. The round values the company at nearly 4x its Series A mark — a reflection of eighteen months of disciplined execution rather than a market re-rating.",
  bodyExtra: 'We backed the founders at pre-seed and have stayed close to the business through every stage since. This raise gives them the runway to double down on enterprise distribution and build out the team ahead of a planned international launch next year.',
}

const CARD2 = {
  category: 'Insights',
  title: 'What We Look For in a Seed-Stage Founder',
  desc: "Conviction at the earliest stage rarely comes from a polished deck. It comes from how founders think under pressure, how fast they learn, and whether the market actually wants what they're building ...",
  body: "Conviction at the earliest stage rarely comes from a polished deck. It comes from how founders think under pressure, how fast they learn, and whether the market actually wants what they're building.",
  bodyExtra: "Over a hundred seed investments in, the pattern holds: the founders who win are relentlessly specific about the problem, brutally honest about what isn't working, and quick to change their mind when the evidence says to.",
}

const SUB_ARTICLES = [
  {
    category: 'Market Insights',
    title: 'How We Think About Market Timing',
    body: 'Timing is the variable founders can least control and most obsess over. We look at adoption curves, not calendar years, when we underwrite a market.',
    bodyExtra: "The best entries we've backed rode a shift that was already underway, not one they were betting would arrive.",
  },
  {
    category: 'Founder Resources',
    title: "A Founder's Guide to Term Sheets",
    body: 'A term sheet is a negotiation, not a formality. Understanding which terms are standard and which are worth pushing back on can save a founder real ownership and control down the line.',
    bodyExtra: "We've put together the clauses we see founders misread most often, from liquidation preference stacking to pro-rata rights.",
  },
]

const CARD3 = {
  category: 'Market',
  title: 'Why Late-Stage Valuations Are Resetting',
  body: 'Late-stage valuations are coming back down to earth as growth investors re-price risk against a higher cost of capital. Multiples that felt routine in 2021 now require real proof of durable, efficient growth.',
  bodyExtra: 'For founders, that means the metrics that matter have shifted from growth-at-any-cost to net revenue retention, payback period, and a credible path to profitability.',
}

const VIDEO = {
  title: 'Inside the Round: A Conversation With Our Managing Partner',
  embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
}

const TAGS = ['Fundraising', 'Portfolio', 'Market Insights', 'Exits', 'Talent', 'Regulation', 'Press', 'Podcast']

const cardShadow = 'transition-shadow duration-[400ms] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'

const News = () => {
  const [gridRef, gridInView] = useInView(0.1)

  const [articleData, setArticleData] = useState(CARD1)
  const [articleOpen, setArticleOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeTag, setActiveTag] = useState(null)
  const [toast, setToast] = useState({ visible: false, message: '' })
  const toastTimeoutRef = useRef(null)

  const openArticle = (data) => {
    setArticleData(data)
    setArticleOpen(true)
  }
  const closeArticle = () => setArticleOpen(false)
  const openVideo = () => setVideoOpen(true)
  const closeVideo = () => setVideoOpen(false)

  const showToast = (message) => {
    setToast({ visible: true, message })
    clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500)
  }

  const selectTag = (tag) => {
    setActiveTag(tag)
    showToast(`Filtered by: ${tag}`)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'Escape') return
      setArticleOpen(false)
      setVideoOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      clearTimeout(toastTimeoutRef.current)
    }
  }, [])

  const reveal = () =>
    `${cardShadow} transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      gridInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`
  const revealDelay = (i) => ({ transitionDelay: gridInView ? `${i * 80}ms` : '0ms' })

  return (
    <div className="bg-white">
      <section className="bg-brand-950">
        <Navbar />
        <div className="mx-auto flex max-w-[1380px] animate-[heroFadeUp_0.7s_ease_forwards] flex-wrap items-end justify-between gap-3 px-6 pb-6 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-block shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold tracking-[0.04em] text-white/70">
              News
            </span>
            <h1 className="font-serif-display text-2xl leading-[1.1] font-medium text-white sm:text-3xl">Insights &amp; Announcements</h1>
          </div>
          <p className="hidden max-w-[320px] text-right text-[13.5px] leading-relaxed text-white/55 md:block">
            Portfolio milestones, market perspective, and the occasional conversation worth sharing.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-6 sm:px-8 sm:py-8">
        <main ref={gridRef} className="mx-auto grid max-w-[1380px] grid-cols-1 gap-3 min-[768px]:max-[1100px]:grid-cols-2 md:gap-4 min-[1101px]:grid-cols-[1.25fr_1fr_0.85fr]">
          {/* CARD 1: Large feature */}
          <article
            onClick={() => openArticle(CARD1)}
            style={revealDelay(0)}
            className={`group relative min-h-[260px] cursor-pointer overflow-hidden rounded-[28px] bg-brand-950 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 min-[768px]:max-[1100px]:min-h-[340px] min-[1101px]:min-h-[420px] ${reveal(0)}`}
          >
            <img
              src={heroImg1}
              alt="Dramatic upward view of a modern glass office tower"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />

            <div
              title="Trending"
              className="absolute top-6 left-6 z-[5] flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 shadow-[0_8px_20px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-[400ms] group-hover:scale-110 group-hover:rotate-[15deg]"
            >
              <FlameIcon className="h-5 w-5 text-white" />
            </div>

            <div className="absolute bottom-0 left-0 z-[5] max-w-[72%]">
              <div
                className="relative flex flex-col gap-1.5 rounded-tr-2xl bg-gray-50 py-3 pr-4 pl-3.5 before:pointer-events-none before:absolute before:-top-3.5 before:left-0 before:h-3.5 before:w-3.5 before:rounded-bl-[14px] before:shadow-[0_7px_0_0_var(--color-gray-50)] before:content-[''] after:pointer-events-none after:absolute after:-right-3.5 after:bottom-0 after:h-3.5 after:w-3.5 after:rounded-bl-[14px] after:shadow-[0_7px_0_0_var(--color-gray-50)] after:content-[''] md:gap-1.5 md:rounded-tr-[22px] md:py-[18px] md:pr-[22px] md:pl-[18px] md:before:-top-[18px] md:before:h-[18px] md:before:w-[18px] md:before:rounded-bl-[18px] md:before:shadow-[0_9px_0_0_var(--color-gray-50)] md:after:-right-[18px] md:after:h-[18px] md:after:w-[18px] md:after:rounded-bl-[18px] md:after:shadow-[0_9px_0_0_var(--color-gray-50)]"
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.02em] text-gray-500 md:text-[0.82rem]">
                  Portfolio <span className="mx-1.5 opacity-50">|</span> 22 Feb
                </p>
                <h2 className="font-serif-display text-[0.95rem] leading-[1.15] font-medium text-brand-950 transition-colors duration-300 group-hover:text-brand-800 md:text-[1.4rem]">
                  Our Portfolio Co. Closes $40M Series B
                </h2>
              </div>
            </div>
          </article>

          {/* CARD 2: Insights + sub-articles */}
          <article
            style={revealDelay(1)}
            className={`group relative flex flex-col justify-between rounded-[28px] bg-brand-mint/15 px-6 pt-5 pb-4 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 ${reveal(1)}`}
          >
            <div className="absolute top-0 right-0 z-[5] rounded-bl-[26px] bg-gray-50 pb-3 pl-3 before:pointer-events-none before:absolute before:-left-5 before:top-0 before:h-5 before:w-5 before:rounded-tr-[20px] before:shadow-[6px_-6px_0_6px_var(--color-gray-50)] before:content-[''] after:pointer-events-none after:absolute after:-bottom-5 after:right-0 after:h-5 after:w-5 after:rounded-tr-[20px] after:shadow-[6px_-6px_0_6px_var(--color-gray-50)] after:content-['']">
              <button
                type="button"
                onClick={() => openArticle(CARD2)}
                aria-label="Read this article"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mint text-brand-950 transition-all duration-[400ms] group-hover:rotate-45 group-hover:bg-brand-950 group-hover:text-brand-mint"
              >
                <ArrowUpRightIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-2">
              <p className="mb-1.5 text-[0.75rem] font-semibold text-brand-950/70">Category . Insights</p>
              <h2
                onClick={() => openArticle(CARD2)}
                className="mb-2 line-clamp-2 cursor-pointer pr-10 font-serif-display text-[1.15rem] leading-[1.2] font-medium text-brand-950 md:text-[1.25rem]"
              >
                {CARD2.title}
              </h2>
              <p className="line-clamp-2 text-[0.78rem] leading-[1.45] font-medium text-brand-950/80">
                {CARD2.desc}{' '}
                <span onClick={() => openArticle(CARD2)} className="cursor-pointer font-bold text-brand-950 underline">
                  More
                </span>
              </p>
            </div>

            <div className="flex flex-col border-t border-brand-950/15">
              {SUB_ARTICLES.map((sub) => (
                <div
                  key={sub.title}
                  onClick={() => openArticle(sub)}
                  className="group/sub flex cursor-pointer items-center justify-between border-b border-brand-950/15 py-2 transition-all duration-200 last:pb-1 hover:translate-x-1 hover:opacity-75"
                >
                  <span className="pr-3 font-serif-display text-[0.8rem] font-medium text-brand-950">{sub.title}</span>
                  <span className="shrink-0 text-brand-950 transition-transform duration-300 group-hover/sub:translate-x-1">→</span>
                </div>
              ))}
            </div>
          </article>

          {/* CARD 3: Full background image feature */}
          <article
            onClick={() => openArticle(CARD3)}
            style={revealDelay(2)}
            className={`group relative flex min-h-[160px] cursor-pointer flex-col overflow-hidden rounded-[28px] md:min-h-[170px] min-[768px]:max-[1100px]:col-start-2 min-[768px]:max-[1100px]:col-end-3 min-[768px]:max-[1100px]:row-start-2 min-[768px]:max-[1100px]:row-end-3 min-[1101px]:col-start-3 min-[1101px]:col-end-4 min-[1101px]:row-start-1 min-[1101px]:row-end-2 ${reveal(2)}`}
          >
            <img
              src={heroImg3}
              alt="Glass office tower against a clear blue sky"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <div className="relative z-[2] bg-gradient-to-b from-brand-mint/40 to-transparent px-5 pt-4 pb-3">
              <p className="mb-1.5 text-[0.75rem] font-semibold text-brand-950/75">Category . Market &nbsp;&nbsp; Hot . 12 Feb</p>
              <h2 className="font-serif-display text-[1.1rem] leading-[1.15] font-medium text-brand-950 md:text-[1.2rem]">
                Why Late-Stage Valuations Are Resetting
              </h2>
            </div>
          </article>

          {/* CARD 4: Video / podcast */}
          <article
            onClick={openVideo}
            style={revealDelay(3)}
            className={`group relative min-h-[160px] cursor-pointer overflow-hidden rounded-[28px] bg-brand-950 min-[768px]:max-[1100px]:col-start-1 min-[768px]:max-[1100px]:col-end-2 min-[768px]:max-[1100px]:row-start-3 min-[768px]:max-[1100px]:row-end-4 min-[1101px]:col-start-2 min-[1101px]:col-end-3 min-[1101px]:row-start-2 min-[1101px]:row-end-3 ${reveal(3)}`}
          >
            <img
              src={heroImg7}
              alt="City skyline at golden hour"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 z-[2] flex flex-col justify-between bg-gradient-to-b from-brand-950/20 to-brand-950/70 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/25 px-3 py-1 text-[0.75rem] font-semibold text-white/90 backdrop-blur-sm">
                  Category . Podcast
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.7rem] font-semibold text-white/75">18 Min . 22 Feb</span>
                <h3 className="font-serif-display text-[0.9rem] leading-[1.25] font-medium text-white">{VIDEO.title}</h3>
              </div>
            </div>

            <div
              title="Play video"
              className="absolute top-[45%] left-1/2 z-[4] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/35 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:bg-white/95"
            >
              <PlayIcon className="ml-0.5 h-3.5 w-3.5 text-white transition-colors duration-300 group-hover:text-brand-950" />
            </div>
          </article>

          {/* CARD 5: Category tags */}
          <article
            style={revealDelay(4)}
            className={`flex min-h-[160px] flex-col justify-between rounded-[28px] border border-gray-200 bg-white p-5 min-[768px]:max-[1100px]:col-start-2 min-[768px]:max-[1100px]:col-end-3 min-[768px]:max-[1100px]:row-start-3 min-[768px]:max-[1100px]:row-end-4 min-[1101px]:col-start-3 min-[1101px]:col-end-4 min-[1101px]:row-start-2 min-[1101px]:row-end-3 ${reveal(4)}`}
          >
            <div className="mb-3 flex flex-wrap gap-1.5">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => selectTag(tag)}
                  className={`rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold transition-all duration-200 ${
                    activeTag === tag
                      ? 'border-brand-950 bg-brand-950 text-white'
                      : 'border-gray-200 bg-white text-brand-950 hover:-translate-y-[3px] hover:scale-[1.04] hover:border-brand-mint hover:bg-brand-mint/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="group/card5 mt-auto flex items-center justify-between pt-2.5">
              <span
                onClick={() => showToast('Showing all news categories!')}
                className="cursor-pointer font-serif-display text-[1.05rem] font-medium text-brand-950"
              >
                View All Categories
              </span>
              <div
                onClick={() => showToast('Opening category directory...')}
                className="relative flex cursor-pointer items-center justify-center"
              >
                <span
                  className="absolute h-[52px] w-[52px] animate-[ambientPulse_3s_ease-in-out_infinite_alternate] rounded-full blur-[2px]"
                  style={{ background: 'radial-gradient(circle, rgba(111,203,190,0.9) 0%, rgba(111,203,190,0) 70%)' }}
                />
                <button
                  type="button"
                  aria-label="View all categories"
                  className="relative z-[2] flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-950 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover/card5:translate-x-1 group-hover/card5:bg-brand-950 group-hover/card5:text-white"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        </main>
      </section>

      <Footer />

      {/* Article Modal */}
      <div
        onClick={(e) => e.target === e.currentTarget && closeArticle()}
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-brand-950/65 p-5 backdrop-blur-md transition-opacity duration-[350ms] ${
          articleOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`relative w-full max-w-[680px] rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-9 ${
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
          <span className="mb-3.5 inline-block rounded-full bg-brand-mint px-3.5 py-1.5 text-[0.8rem] font-bold text-brand-950">
            {articleData.category}
          </span>
          <h2 className="mb-4 pr-8 font-serif-display text-[1.6rem] leading-[1.2] font-medium text-brand-950 sm:text-[1.8rem]">
            {articleData.title}
          </h2>
          <div className="flex flex-col gap-3 text-[0.95rem] leading-[1.6] text-gray-600">
            <p>{articleData.body}</p>
            {articleData.bodyExtra && <p>{articleData.bodyExtra}</p>}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div
        onClick={(e) => e.target === e.currentTarget && closeVideo()}
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-brand-950/65 p-5 backdrop-blur-md transition-opacity duration-[350ms] ${
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
            {videoOpen && (
              <iframe
                title={VIDEO.title}
                src={VIDEO.embedUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full border-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 z-[2000] -translate-x-1/2 rounded-full bg-brand-950 px-6 py-3 text-[0.88rem] font-semibold whitespace-nowrap text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          toast.visible ? 'translate-y-0' : 'translate-y-[100px]'
        }`}
      >
        {toast.message}
      </div>
    </div>
  )
}

export default News
