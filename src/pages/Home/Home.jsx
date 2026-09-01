import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import TrustedBy from '../../components/TrustedBy'
import AboutUs from '../../components/AboutUs'
import OperatorsAccordion from '../../components/OperatorsAccordion'
import PortfolioCarousel from '../../components/PortfolioCarousel'
import TimelineSection from '../../components/TimelineSection'
import Footer from '../../components/Footer'
import useInView from '../../hooks/useInView'
import heroBg from '../../assets/h7.jpg'
import { ArrowUpRightIcon } from '../../constants/icons'
import { NEWS_POSTS } from '../../constants/data'

const btnBase =
  'group inline-flex cursor-pointer items-center gap-2 rounded-full border-none text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2'

const Arrow = () => (
  <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
)

const Home = () => {
  const [statValue, setStatValue] = useState(0)
  const [newsRef, newsInView] = useInView(0.15)

  useEffect(() => {
    let frame
    const target = 2.4
    const duration = 1200
    const startTime = performance.now() + 1200

    const tick = (now) => {
      const elapsed = now - startTime
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setStatValue(eased * target)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-brand-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 30% 0%, rgba(28,60,58,0.9), transparent 60%), linear-gradient(180deg, #0c2422 0%, #0a1f1e 45%, #081918 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,15,14,0.15) 0%, rgba(5,15,14,0.55) 70%, rgba(4,12,11,0.85) 100%)',
        }}
      />

      <Navbar />

      {/* STAT BADGE */}
      <div
        className={
          'relative z-[9] mx-[18px] mb-5 w-[calc(100%-36px)] rounded-[18px] border border-white/12 bg-[rgba(10,25,24,0.55)] px-[22px] py-[18px] text-left opacity-0 backdrop-blur-lg animate-[heroFadeInStat_0.8s_ease_forwards_1.1s] motion-reduce:animate-none motion-reduce:opacity-100 ' +
          'min-[520px]:absolute min-[520px]:right-6 min-[520px]:bottom-[180px] min-[520px]:mx-0 min-[520px]:mb-0 min-[520px]:w-auto min-[520px]:max-w-[260px] ' +
          'min-[900px]:right-12 min-[900px]:bottom-[210px] min-[900px]:px-[26px] min-[900px]:py-[22px]'
        }
      >
        <div className="text-[26px] leading-[1.1] font-bold tracking-[-0.02em] min-[900px]:text-[30px]">
          ${statValue.toFixed(1)}B+
        </div>
        <div className="mt-1.5 text-[13px] font-normal text-white/70">Invested across private markets</div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-[8] flex flex-col px-[18px] pb-8 min-[520px]:px-6 min-[520px]:pb-10 min-[900px]:px-12 min-[900px]:pb-14">
        <h1 className="max-w-full text-[clamp(28px,8vw,40px)] leading-[1.08] font-semibold tracking-[-0.03em] min-[520px]:text-[clamp(30px,5.6vw,68px)] min-[640px]:max-w-[900px]">
          <span className="block overflow-hidden">
            <span className="inline-block animate-[heroRiseIn_0.9s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 [animation-delay:0.35s] motion-reduce:animate-none motion-reduce:opacity-100">
              Building Long-Term Value
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-[heroRiseIn_0.9s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 [animation-delay:0.5s] motion-reduce:animate-none motion-reduce:opacity-100">
              In Uncertain Markets
            </span>
          </span>
        </h1>

        <p className="mt-[26px] max-w-full animate-[heroFadeUp_0.8s_ease_forwards_0.85s] text-[14.5px] leading-relaxed font-normal text-white/70 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 min-[520px]:max-w-[520px] min-[520px]:text-[15.5px]">
          We invest with conviction, insight, and discipline — partnering with exceptional leaders to create
          lasting impact across evolving industries.
        </p>

        <div className="mt-[34px] flex animate-[heroFadeUp_0.8s_ease_forwards_1.05s] flex-col gap-3.5 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 min-[520px]:flex-row min-[520px]:flex-wrap">
          <Link
            to="/contact"
            className={`${btnBase} w-full justify-center bg-white px-[22px] py-3 text-[#0a1f1e] hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)] min-[520px]:w-auto`}
          >
            Get In Touch <Arrow />
          </Link>
          <button
            className={`${btnBase} w-full justify-center border border-white/16 bg-white/8 px-[22px] py-3 text-white backdrop-blur-md hover:bg-white/14 min-[520px]:w-auto`}
          >
            Our Portfolio
          </button>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="pointer-events-none absolute right-12 bottom-[52px] z-[9] hidden animate-[heroFadeUp_0.8s_ease_forwards_1.25s] items-center gap-2.5 text-[13px] font-medium text-white/55 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 min-[640px]:flex">
        Scroll to Explore
        <span className="animate-[heroBounce_1.8s_ease-in-out_infinite] motion-reduce:animate-none">↓</span>
      </div>
      </section>

      <TrustedBy />
      <AboutUs />
      <OperatorsAccordion />
      <PortfolioCarousel />
      <TimelineSection />

      {/* NEWS */}
      <section className="bg-white text-brand-950">
        <div
          ref={newsRef}
          className={`mx-auto max-w-[1180px] px-6 py-[90px] transition-all duration-700 min-[900px]:px-12 ${
            newsInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="mb-9 flex flex-col items-start gap-4 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between">
            <h2 className="font-serif-display text-[clamp(30px,4.4vw,46px)] font-normal">
              News <i className="italic">&</i> Insights
            </h2>
            <Link
              to="/news"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gray-100 py-1.5 pr-1.5 pl-5 text-[15px] font-medium text-brand-950 transition-all duration-300 hover:-translate-y-px hover:bg-gray-200"
            >
              View All
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-mint transition-all duration-400 group-hover:rotate-45 group-hover:bg-brand-800">
                <ArrowUpRightIcon className="h-[15px] w-[15px] text-brand-950" />
              </span>
            </Link>
          </div>

          <div className="group/hero relative aspect-[16/7.2] w-full cursor-pointer overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <img
              src="https://picsum.photos/id/1015/1400/650"
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/hero:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0)_100%)] transition-all duration-400 group-hover/hero:bg-[linear-gradient(0deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute top-5 left-5 rounded-full bg-white/92 px-4 py-2 text-xs font-bold tracking-[0.6px] uppercase backdrop-blur-sm">
              AI Solutions
            </div>
            <div className="absolute top-[18px] right-[18px] flex h-10 w-10 items-center justify-center rounded-full bg-white/92 transition-all duration-400 group-hover/hero:rotate-45 group-hover/hero:scale-[1.06] group-hover/hero:bg-brand-mint">
              <ArrowUpRightIcon className="h-4 w-4 text-brand-950" />
            </div>
            <div className="absolute right-[100px] bottom-[30px] left-8 translate-y-1.5 text-[clamp(20px,3vw,34px)] leading-[1.28] font-light text-white transition-transform duration-500 group-hover/hero:translate-y-0">
              <b className="font-bold">IMPACT Synergy</b> is an <b className="font-bold">AI powered</b>
              <br />
              <b className="font-bold">investment banking</b> solution
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
            {NEWS_POSTS.map((post, i) => (
              <div
                key={post.tag}
                className={`group/card relative aspect-[3/3.6] cursor-pointer overflow-hidden rounded-[18px] transition-all duration-700 ${
                  newsInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: newsInView ? `${150 + i * 100}ms` : '0ms' }}
              >
                <img
                  src={post.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 group-hover/card:scale-[1.09]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.72)_100%)] transition-all duration-400 group-hover/card:bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.05)_30%,rgba(0,0,0,0.85)_100%)]" />
                <div className="absolute top-3.5 left-3.5 rounded-full bg-white/92 px-3 py-1.5 text-[10.5px] font-bold tracking-[0.6px] uppercase">
                  {post.tag}
                </div>
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/92 transition-all duration-400 group-hover/card:rotate-45 group-hover/card:bg-brand-mint">
                  <ArrowUpRightIcon className="h-[13px] w-[13px] text-brand-950" />
                </div>
                <div className="absolute right-4 bottom-4 left-4 text-white">
                  <div className="mb-1.5 text-xs tracking-[0.3px] text-white/78">{post.date}</div>
                  <div className="text-base leading-[1.32] font-light">{post.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
