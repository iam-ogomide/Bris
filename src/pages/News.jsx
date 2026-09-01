import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useInView from '../hooks/useInView'
import heroImg1 from '../assets/h1.jpg'
import heroImg2 from '../assets/h2.jpg'
import heroImg3 from '../assets/h3.jpg'
import heroImg4 from '../assets/h4.jpg'
import heroImg5 from '../assets/h5.jpg'
import heroImg6 from '../assets/h6.jpg'
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

const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
  </svg>
)

const ArrowLeftIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.1-9.3L1 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
  </svg>
)

const LinkIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" />
  </svg>
)

const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
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

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Operations',
    date: '02 Jul 2025',
    readTime: '6 min read',
    title: 'The Playbook Behind Our Portfolio Reviews',
    excerpt: 'How we run quarterly check-ins that catch problems early, instead of after the board deck is already finalized.',
    image: heroImg2,
    author: 'Grace Adeyemi',
    role: 'Principal, Portfolio Ops',
    body: [
      "A quarterly review is only useful if it surfaces problems before they show up in the numbers. We built ours around a short, structured set of questions rather than a slide template, so founders spend their prep time thinking instead of formatting.",
      'The format stays consistent: what changed since last quarter, what nearly broke, and what the team needs from us specifically. That last part matters — a review that ends without a concrete ask from either side usually meant nothing got said.',
      "We keep the loop tight between reviews too. A monthly async note beats a perfect quarterly deck, because it means the review is a checkpoint, not the first time we're hearing about a problem.",
    ],
  },
  {
    id: 2,
    category: 'Security',
    date: '25 Jun 2025',
    readTime: '7 min read',
    title: 'Securing the Data Room During Diligence',
    excerpt: 'Most diligence leaks trace back to access controls, not a flaw in whatever tool is hosting the data room.',
    image: heroImg4,
    author: 'Daniel Okoro',
    role: 'Platform & Security Lead',
    body: [
      'A data room opened for diligence is, for a few weeks, the most sensitive collection of documents a company has ever assembled in one place. Most leaks trace back to who had access and for how long, not a flaw in the platform hosting it.',
      'Expiring, role-based access beats a single shared link every time. Give each counterparty their own credentials, scope what they can see to their stage of diligence, and revoke access the moment a round closes or falls through.',
      'Treat the access log as part of the deal record. Knowing exactly who viewed what, and when, has saved more than one founder an awkward conversation after a process leaked to a competitor.',
    ],
  },
  {
    id: 3,
    category: 'Strategy',
    date: '10 Jun 2025',
    readTime: '5 min read',
    title: 'Choosing the Right Cap Table Tool',
    excerpt: 'The right tool fits how your team already works, not the one with the flashiest feature list.',
    image: heroImg5,
    author: 'Amara Chukwu',
    role: 'Product Strategist',
    body: [
      'Every cap table tool promises to remove the spreadsheet headaches of fundraising. Before switching, get specific about the actual failure mode you are trying to fix, and what "fixed" looks like in practice.',
      'The migration cost rarely shows up on the pricing page. Factor in the time to reconcile historical grants, the learning curve for whoever runs payroll and equity, and the cost of switching again if the tool does not scale with headcount.',
      'The safest long-term bet is usually the option your finance and legal counsel already know how to use, rather than the newest platform with the best onboarding demo.',
    ],
  },
  {
    id: 4,
    category: 'Infrastructure',
    date: '25 Jun 2025',
    readTime: '6 min read',
    title: 'Building Infrastructure That Scales With You',
    excerpt: 'The right hosting choice depends less on price and more on how much control your stage actually needs.',
    image: heroImg6,
    author: 'Tobenna Eze',
    role: 'Infrastructure Advisor',
    body: [
      'Shared hosting, a single cloud VM, and a fully managed platform all solve the same basic problem in very different ways. The right choice depends less on price and more on how much control and scale your current stage actually needs.',
      'Look past the advertised uptime number and read the SLA itself. Understand what counts as downtime, how credits are calculated, and how quickly support actually responds when something breaks at 2am before a demo.',
      'Budget for the traffic you will have after a good launch, not the traffic you have today. A setup that is perfect for your current load can become your biggest bottleneck the moment something goes well.',
    ],
  },
  {
    id: 5,
    category: 'Culture',
    date: '25 Jun 2025',
    readTime: '8 min read',
    title: 'What a Founder-First Culture Actually Looks Like',
    excerpt: 'It shows up in how fast a fund answers a hard question, not in the language on its website.',
    image: heroImg1,
    author: 'Ifeoma Bello',
    role: 'Engineering Manager, Portfolio',
    body: [
      '"Founder-first" is one of the most overused phrases in venture, and one of the easiest to say without meaning. The real test is how a fund behaves when a founder brings bad news early, or asks a question they are afraid sounds naive.',
      'The clearest signal we look for in ourselves is response time on hard questions, not easy ones. Any partner can turn around a warm intro quickly. Fewer will give a straight, fast answer when a founder asks whether the next round is at risk.',
      'Culture compounds the same way a product does. Every unhurried, honest conversation with a founder in a hard quarter makes the next one easier, for us and for them.',
    ],
  },
  {
    id: 6,
    category: 'Operations',
    date: '10 Jun 2025',
    readTime: '7 min read',
    title: 'Getting Ops Ready Before Your Series A',
    excerpt: 'The operational gaps that felt fine at ten people become the first thing diligence finds at fifty.',
    image: heroImg3,
    author: 'Daniel Okoro',
    role: 'Platform & Security Lead',
    body: [
      'The operational shortcuts that felt harmless at ten people are usually the first thing a Series A diligence process finds at fifty. Contracts in someone\'s inbox, access nobody has audited in a year, a finance stack held together by one spreadsheet.',
      'Real-time visibility into spend, access, and infrastructure turns that slow drift into something you can actually see. Once a small gap is visible, it is cheap to fix. Once diligence finds it, it is a delay on your term sheet.',
      'You do not need to fix everything before you raise. Prioritize the gaps that carry real legal or security risk, and be ready to speak plainly about the rest — investors trust founders who already know where the bodies are buried.',
    ],
  },
]

const cardShadow = 'transition-shadow duration-[400ms] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'

const News = () => {
  const [gridRef, gridInView] = useInView(0.1)

  const [articleData, setArticleData] = useState(CARD1)
  const [articleOpen, setArticleOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeTag, setActiveTag] = useState(null)
  const [toast, setToast] = useState({ visible: false, message: '' })
  const toastTimeoutRef = useRef(null)

  const [blogGridRef, blogGridInView] = useInView(0.1)
  const blogSectionRef = useRef(null)
  const isFirstBlogRender = useRef(true)
  const copyTimeoutRef = useRef(null)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [blogPage, setBlogPage] = useState(1)
  const [linkCopied, setLinkCopied] = useState(false)

  const selectedPost = selectedPostId ? BLOG_POSTS.find((p) => p.id === selectedPostId) : null
  const relatedPosts = useMemo(() => {
    if (!selectedPostId) return []
    const idx = BLOG_POSTS.findIndex((p) => p.id === selectedPostId)
    const rotated = [...BLOG_POSTS.slice(idx + 1), ...BLOG_POSTS.slice(0, idx)]
    return rotated.slice(0, 3)
  }, [selectedPostId])

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

  const openPost = (id) => setSelectedPostId(id)
  const closePost = () => setSelectedPostId(null)

  const copyPostLink = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {})
    setLinkCopied(true)
    clearTimeout(copyTimeoutRef.current)
    copyTimeoutRef.current = setTimeout(() => setLinkCopied(false), 1800)
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
      clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (isFirstBlogRender.current) {
      isFirstBlogRender.current = false
      return
    }
    blogSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [selectedPostId])

  const reveal = () =>
    `${cardShadow} transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      gridInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`
  const revealDelay = (i) => ({ transitionDelay: gridInView ? `${i * 80}ms` : '0ms' })

  const blogReveal = () =>
    `transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      blogGridInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`
  const blogRevealDelay = (i) => ({ transitionDelay: blogGridInView ? `${i * 90}ms` : '0ms' })

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

      {/* Knowledge Posts / Blog */}
      <section ref={blogSectionRef} className="bg-white px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          {selectedPost ? (
            <div key={selectedPost.id} className="animate-[heroFadeUp_0.6s_ease_forwards] motion-reduce:animate-none">
              <button
                type="button"
                onClick={closePost}
                className="group mb-8 inline-flex items-center gap-2.5 text-sm font-semibold text-gray-500 transition-colors duration-200 hover:text-brand-950"
              >
                <ArrowLeftIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to all posts
              </button>

              <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-brand-950 sm:h-[400px] md:h-[460px]">
                <img src={selectedPost.image} alt={selectedPost.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
                  <span className="mb-4 inline-block rounded-full bg-brand-mint px-3.5 py-1.5 text-[0.8rem] font-bold text-brand-950">
                    {selectedPost.category}
                  </span>
                  <h1 className="mb-4 max-w-[720px] font-serif-display text-2xl leading-[1.15] font-medium sm:text-4xl">
                    {selectedPost.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-5 text-[13.5px] text-white/80">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {selectedPost.date}
                    </span>
                    <span>{selectedPost.readTime}</span>
                    <span>By {selectedPost.author}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_300px]">
                <div className="flex flex-col gap-5">
                  {selectedPost.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className={`leading-[1.85] ${i === 0 ? 'text-lg text-brand-950/90' : 'text-[16.5px] text-gray-600'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <aside className="flex h-fit flex-col gap-5 lg:sticky lg:top-8">
                  <div className="flex items-center gap-3.5 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mint/25 text-sm font-bold text-brand-950">
                      {selectedPost.author
                        .split(' ')
                        .map((w) => w[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-[14.5px] font-bold text-brand-950">{selectedPost.author}</div>
                      <div className="mt-0.5 text-[12.5px] text-gray-400">{selectedPost.role}</div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <p className="mb-3.5 text-[13px] font-bold text-brand-950">Share this article</p>
                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        aria-label="Share on X"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-950 hover:bg-brand-950 hover:text-white"
                      >
                        <TwitterIcon className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Share on LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-950 hover:bg-brand-950 hover:text-white"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={copyPostLink}
                        aria-label="Copy link"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
                          linkCopied
                            ? 'border-brand-mint bg-brand-mint text-brand-950'
                            : 'border-gray-200 bg-white text-gray-500 hover:border-brand-950 hover:bg-brand-950 hover:text-white'
                        }`}
                      >
                        {linkCopied ? <CheckIcon className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </aside>
              </div>

              {relatedPosts.length > 0 && (
                <>
                  <h3 className="mt-20 mb-8 font-serif-display text-xl font-medium text-brand-950">You might also like</h3>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {relatedPosts.map((r) => (
                      <article key={r.id} onClick={() => openPost(r.id)} className="group cursor-pointer">
                        <div className="mb-3.5 aspect-[4/3] overflow-hidden rounded-2xl">
                          <img
                            src={r.image}
                            alt={r.title}
                            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                          />
                        </div>
                        <div className="mb-2 flex items-center gap-2 text-[12.5px] text-gray-400">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {r.date}
                        </div>
                        <h4 className="text-[15px] font-bold leading-snug text-brand-950 transition-colors duration-200 group-hover:text-brand-800">
                          {r.title}
                        </h4>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
                <div>
                  <span className="mb-2 block text-sm font-semibold tracking-[0.04em] text-gray-400 uppercase">Our Blog</span>
                  <h2 className="font-serif-display text-3xl leading-[1.1] font-medium text-brand-950 sm:text-4xl md:text-[2.6rem]">
                    View All
                    <br />
                    Knowledge Posts
                  </h2>
                </div>
                <p className="max-w-[340px] text-[15px] leading-relaxed text-gray-500">
                  Perspective from our team on fundraising, portfolio operations, and the startup ecosystem we invest in.
                </p>
              </div>

              <div ref={blogGridRef} className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((post, i) => (
                  <article
                    key={post.id}
                    onClick={() => openPost(post.id)}
                    style={blogRevealDelay(i)}
                    className={`group cursor-pointer ${blogReveal(i)}`}
                  >
                    <div className="mb-5 flex items-center gap-2 text-[13px] text-gray-400">
                      <CalendarIcon className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h3 className="mb-2.5 font-serif-display text-xl leading-snug font-medium text-brand-950">{post.title}</h3>
                    <p className="mb-5 line-clamp-2 text-[14.5px] leading-relaxed text-gray-500">{post.excerpt}</p>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-950">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-950/0 transition-colors duration-300 group-hover:bg-brand-950/25">
                        <span className="translate-y-2 scale-95 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-950 opacity-0 shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          Read More
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-14 flex items-center justify-between border-t border-gray-100 pt-8">
                <div className="flex gap-2.5">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setBlogPage(n)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 ${
                        blogPage === n
                          ? 'border-brand-mint bg-brand-mint text-brand-950'
                          : 'border-gray-200 text-gray-400 hover:border-brand-950/30 hover:text-brand-950'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    disabled={blogPage === 1}
                    onClick={() => setBlogPage((p) => Math.max(1, p - 1))}
                    aria-label="Previous page"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all duration-200 enabled:hover:-translate-y-0.5 enabled:hover:bg-brand-950 enabled:hover:text-white disabled:cursor-not-allowed"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    disabled={blogPage === 6}
                    onClick={() => setBlogPage((p) => Math.min(6, p + 1))}
                    aria-label="Next page"
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed ${
                      blogPage === 6 ? 'bg-gray-100 text-gray-400' : 'bg-brand-mint text-brand-950 hover:bg-brand-950 hover:text-white'
                    }`}
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
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
