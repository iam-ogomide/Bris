import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useInView from '../../hooks/useInView'
import h1 from '../../assets/h1.jpg'
import h2 from '../../assets/h2.jpg'
import h3 from '../../assets/h3.jpg'
import h6 from '../../assets/h6.jpg'
import h7 from '../../assets/h7.jpg'
import { ArrowRightBoldIcon, ChevronIcon,  } from '../../constants/icons'
import { VALUES, BACKERS, TEAM, TESTIMONIALS, FAQS } from '../../constants/data'

const revealCls = (inView) =>
  `transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`

const About = () => {
  const [heroRef, heroInView] = useInView(0.1)
  const [visionRef, visionInView] = useInView(0.2)
  const [valuesRef, valuesInView] = useInView(0.2)
  const [founderRef, founderInView] = useInView(0.2)
  const [teamRef, teamInView] = useInView(0.15)
  const [testiRef, testiInView] = useInView(0.1)
  const [faqRef, faqInView] = useInView(0.2)

  const [marqueePaused, setMarqueePaused] = useState(false)
  const [testiExpanded, setTestiExpanded] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const teamScrollRef = useRef(null)
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0 })

  const onTeamMouseDown = (e) => {
    dragState.current = { isDown: true, startX: e.pageX, startScroll: teamScrollRef.current.scrollLeft }
  }
  const onTeamMouseUp = () => {
    dragState.current.isDown = false
  }
  const onTeamMouseMove = (e) => {
    if (!dragState.current.isDown) return
    e.preventDefault()
    const dx = e.pageX - dragState.current.startX
    teamScrollRef.current.scrollLeft = dragState.current.startScroll - dx
  }
  const onTeamWheel = (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      teamScrollRef.current.scrollLeft += e.deltaY
      e.preventDefault()
    }
  }

  return (
    <>
      {/*  HERO */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 30% 0%, rgba(28,60,58,0.9), transparent 60%), linear-gradient(180deg, #0c2422 0%, #0a1f1e 45%, #081918 100%)',
          }}
        />

        <Navbar />

        <div
          ref={heroRef}
          className={`relative z-[1] mx-auto max-w-[880px] px-5 pt-6 pb-10 text-center min-[900px]:px-12 min-[900px]:pt-10 min-[900px]:pb-14 ${revealCls(heroInView)}`}
        >
          <h1 className="mx-auto text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            Where capital meets{' '}
            <i className="font-serif-display font-normal not-italic italic text-brand-mint">conviction</i>
          </h1>
          <p className="mx-auto mt-6 max-w-[540px] text-[15.5px] leading-relaxed text-white/70">
            We&rsquo;re a team of investors, operators, and builders committed to backing exceptional leaders and
            turning bold ideas into lasting value.
          </p>
        </div>

        {/* Desktop / tablet bento grid */}
        <div
          className={`relative z-[1] mx-auto hidden max-w-[1180px] gap-4 px-5 pb-20 min-[760px]:grid min-[760px]:h-[500px] min-[760px]:grid-cols-[1.15fr_1fr_1fr] min-[760px]:grid-rows-2 min-[900px]:h-[560px] min-[900px]:gap-5 min-[900px]:px-12 min-[900px]:pb-28 ${revealCls(heroInView)}`}
          style={{ transitionDelay: heroInView ? '150ms' : '0ms' }}
        >
          <div className="col-start-1 row-span-2 overflow-hidden rounded-[20px]">
            <img src={h1} alt="Team member reviewing work" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="col-start-2 row-start-1 flex flex-col justify-between overflow-hidden rounded-[20px] bg-brand-mint p-7 text-brand-950">
            <div className="text-[clamp(1.7rem,2.6vw,2.2rem)] leading-none font-extrabold tracking-[-0.02em]">
              $2.4B+
            </div>
            <div className="text-[14.5px] leading-snug font-medium">Invested across private markets</div>
          </div>

          <div className="col-start-2 row-start-2 overflow-hidden rounded-[20px]">
            <img src={h2} alt="Colleagues collaborating" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="col-start-3 row-start-1 overflow-hidden rounded-[20px]">
            <img src={h3} alt="Focused work session" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="col-start-3 row-start-2 flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/12 bg-white/8 p-7 text-white backdrop-blur-md">
            <div className="text-[clamp(1.7rem,2.6vw,2.2rem)] leading-none font-extrabold tracking-[-0.02em]">120+</div>
            <div className="text-[14.5px] leading-snug font-medium text-white/70">Companies backed since inception</div>
          </div>
        </div>

        {/* Mobile: single image */}
        <div
          className={`relative z-[1] mx-5 mb-16 h-[280px] overflow-hidden rounded-[20px] min-[760px]:hidden ${revealCls(heroInView)}`}
          style={{ transitionDelay: heroInView ? '150ms' : '0ms' }}
        >
          <img src={h1} alt="Team member reviewing work" className="h-full w-full object-cover" />
        </div>
      </section>

      {/*  VISION */}
      <section className="bg-white px-5 py-20 text-brand-950 min-[900px]:px-12 min-[900px]:py-28">
        <div ref={visionRef} className="mx-auto max-w-[1180px]">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 min-[860px]:flex-row min-[860px]:items-end">
            <h2 className={`max-w-[520px] text-[clamp(2.1rem,4.4vw,3.2rem)] leading-[1.1] font-bold tracking-[-0.02em] ${revealCls(visionInView)}`}>
              Turning vision
              <br />
              <i className="font-serif-display font-normal not-italic italic">into reality</i>
            </h2>
            <p
              className={`max-w-[360px] text-[15px] leading-[1.65] text-gray-500 ${revealCls(visionInView)}`}
              style={{ transitionDelay: visionInView ? '100ms' : '0ms' }}
            >
              From first check to exit, we walk alongside founders &mdash; bringing capital, insight, and an
              unwavering commitment to long-term value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 min-[900px]:grid-cols-[1.05fr_1fr_0.85fr] min-[900px]:gap-14">
            <div
              className={`h-[320px] overflow-hidden rounded-[24px] min-[900px]:h-[560px] ${revealCls(visionInView)}`}
              style={{ transitionDelay: visionInView ? '150ms' : '0ms' }}
            >
              <img src={h6} alt="Colleagues talking in a bright office" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            <div className={revealCls(visionInView)} style={{ transitionDelay: visionInView ? '220ms' : '0ms' }}>
              <h3 className="mb-5 text-[1.6rem] font-bold tracking-[-0.01em]">Our mission</h3>
              <p className="mb-7 text-[15px] leading-[1.7] text-gray-500">
                We support visionary entrepreneurs with capital, providing the tools and expertise to grow their
                businesses and drive meaningful, lasting change across the industries we serve.
              </p>
              <a
                href="#team"
                className="group inline-flex items-center gap-3.5 rounded-full bg-brand-mint py-1.5 pr-1.5 pl-6 text-[15px] font-semibold text-brand-950 transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-800 hover:text-white"
              >
                Meet our team
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-950 transition-transform duration-300">
                  <ArrowRightBoldIcon className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className={revealCls(visionInView)} style={{ transitionDelay: visionInView ? '300ms' : '0ms' }}>
              <h3 className="mb-5 text-[1.6rem] font-bold tracking-[-0.01em]">Our goal</h3>
              <ul className="space-y-1">
                {[
                  'Disciplined capital deployment',
                  'Diligence without the bureaucracy',
                  'Partnership beyond the term sheet',
                  'Governance that builds trust',
                  'Outcomes measured in decades, not quarters',
                ].map((item) => (
                  <li key={item} className="relative py-2.5 pl-5 text-[15px] leading-relaxed text-brand-950">
                    <span className="absolute top-[1.1em] left-0 h-1.5 w-1.5 rounded-full bg-brand-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*  CORE VALUES  */}
      <section className="bg-gray-50 px-5 py-20 text-center text-brand-950 min-[900px]:px-12 min-[900px]:py-28">
        <div ref={valuesRef} className="mx-auto max-w-[1180px]">
          <h2 className={`text-[clamp(2rem,4.4vw,3rem)] font-bold tracking-[-0.02em] ${revealCls(valuesInView)}`}>
            Our core values
          </h2>
          <p
            className={`mx-auto mt-5 max-w-[560px] text-[1.05rem] leading-[1.65] text-gray-500 ${revealCls(valuesInView)}`}
            style={{ transitionDelay: valuesInView ? '100ms' : '0ms' }}
          >
            We believe in forging strong partnerships with our founders, co-investors, and team, built on trust
            and mutual respect.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-11 text-left min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.key}
                className={revealCls(valuesInView)}
                style={{ transitionDelay: valuesInView ? `${150 + i * 90}ms` : '0ms' }}
              >
                <v.Icon className="mb-4 h-6 w-6 text-brand-800" />
                <h4 className="mb-3 text-[1.08rem] font-semibold text-brand-950">{v.title}</h4>
                <p className="text-[0.98rem] leading-[1.6] text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-gray-200 pt-20">
            <h3
              className={`text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold tracking-[-0.02em] ${revealCls(valuesInView)}`}
              style={{ transitionDelay: valuesInView ? '250ms' : '0ms' }}
            >
              Backed by the best
            </h3>
            <p
              className={`mx-auto mt-4 max-w-[520px] text-[1rem] leading-[1.65] text-gray-500 ${revealCls(valuesInView)}`}
              style={{ transitionDelay: valuesInView ? '300ms' : '0ms' }}
            >
              We&rsquo;re proud to be supported by a network of world-class investors who share our vision for
              innovation and excellence.
            </p>
          </div>

          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 overflow-hidden"
            onMouseEnter={() => setMarqueePaused(true)}
            onMouseLeave={() => setMarqueePaused(false)}
          >
            <div
              className="flex w-max items-center [mask-image:linear-gradient(90deg,transparent_0%,#000_8%,#000_92%,transparent_100%)]"
              style={{
                animation: 'marqueeScroll 22s linear infinite',
                animationPlayState: marqueePaused ? 'paused' : 'running',
              }}
            >
              {[...BACKERS, ...BACKERS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="mx-7 shrink-0 text-[1.1rem] font-extrabold tracking-[-0.01em] whitespace-nowrap text-gray-300 transition-colors duration-300 hover:text-brand-950"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  FOUNDER  */}
      <section className="bg-white px-5 py-20 text-brand-950 min-[900px]:px-12 min-[900px]:py-28">
        <div ref={founderRef} className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div className={revealCls(founderInView)}>
            <h2 className="mb-7 text-[clamp(2rem,4.2vw,2.9rem)] font-bold tracking-[-0.02em]">A word from the founder</h2>
            <p className="mb-5 max-w-[460px] text-[1.05rem] leading-[1.75] text-gray-500">
              When we started BRIS, the vision was simple: back exceptional people with patient, disciplined
              capital and stay by their side long after the check clears.
            </p>
            <p className="mb-5 max-w-[460px] text-[1.05rem] leading-[1.75] text-gray-500">
              This isn&rsquo;t just a fund. It&rsquo;s a community where ideas grow, challenges are met with
              rigor, and every founder&rsquo;s voice matters. None of it would be possible without the trust of
              the people who&rsquo;ve built alongside us.
            </p>
            <p className="max-w-[460px] text-[1.05rem] leading-[1.75] text-gray-500">
              Together, we&rsquo;re building something that compounds &mdash; and we&rsquo;re just getting started.
            </p>

            <div className="mt-7">
              <div className="text-[1.3rem] font-bold text-brand-950">Bali Gee</div>
              <div className="mt-1 text-[0.98rem] text-gray-500">Co-Founder &amp; Managing Partner</div>
            </div>
          </div>

          <div
            className={`rounded-[32px] bg-gray-50 p-3.5 shadow-[0_30px_60px_-30px_rgba(20,18,12,0.18)] ${revealCls(founderInView)}`}
            style={{ transitionDelay: founderInView ? '150ms' : '0ms' }}
          >
            <div className="h-[340px] overflow-hidden rounded-[22px] min-[900px]:h-[520px]">
              <img src={h7} alt="Bali Gee, Co-Founder & Managing Partner" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/*  TEAM  */}
      <section id="team" className="overflow-hidden bg-brand-950 py-20 text-white min-[900px]:py-28">
        <div ref={teamRef} className="mx-auto max-w-[1180px] px-5 min-[900px]:px-12">
          <h2 className={`text-[clamp(2rem,4.4vw,3rem)] font-bold tracking-[-0.02em] ${revealCls(teamInView)}`}>
            Meet the team
          </h2>
          <p
            className={`mt-5 max-w-[520px] text-[1.05rem] leading-[1.65] text-white/65 ${revealCls(teamInView)}`}
            style={{ transitionDelay: teamInView ? '100ms' : '0ms' }}
          >
            Behind every investment is a team of investors, operators, and problem-solvers who&rsquo;ve built and
            scaled companies themselves.
          </p>
        </div>

        <div
          ref={teamScrollRef}
          onMouseDown={onTeamMouseDown}
          onMouseUp={onTeamMouseUp}
          onMouseLeave={onTeamMouseUp}
          onMouseMove={onTeamMouseMove}
          onWheel={onTeamWheel}
          className="mt-14 flex cursor-grab gap-5 overflow-x-auto px-5 pb-2 select-none [scrollbar-width:none] min-[900px]:px-12 [&::-webkit-scrollbar]:hidden"
        >
          {TEAM.map((person, i) => (
            <div
              key={person.name}
              className={`w-[220px] shrink-0 text-left min-[560px]:w-[260px] ${revealCls(teamInView)}`}
              style={{ transitionDelay: teamInView ? `${150 + i * 80}ms` : '0ms' }}
            >
              <div className="h-[230px] overflow-hidden rounded-[20px] bg-white/5 min-[560px]:h-[280px]">
                <img
                  src={person.img}
                  alt={person.name}
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-4 text-[1.1rem] font-bold">{person.name}</div>
              <div className="mt-1 text-[0.92rem] text-white/55">{person.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/*  TESTIMONIALS */}
      <section className="bg-gray-50 px-5 py-24 min-[900px]:px-12">
        <div ref={testiRef} className="mx-auto max-w-[1180px]">
          <div className="mb-14 text-center">
            <div className={`inline-flex items-center gap-2.5 text-[0.95rem] font-medium text-brand-950 ${revealCls(testiInView)}`}>
              
              Testimonials
            </div>
            <h2
              className={`mt-4 text-[clamp(2.1rem,4.6vw,3.2rem)] leading-[1.12] font-bold tracking-[-0.02em] text-brand-950 ${revealCls(testiInView)}`}
              style={{ transitionDelay: testiInView ? '100ms' : '0ms' }}
            >
              Trusted by the founders
              <br />
              we back
            </h2>
            <p
              className={`mx-auto mt-5 max-w-[480px] text-[1.05rem] text-gray-500 ${revealCls(testiInView)}`}
              style={{ transitionDelay: testiInView ? '150ms' : '0ms' }}
            >
              Find out why fast-growing companies choose BRIS as their long-term capital partner.
            </p>
          </div>

          <div className="relative">
            <div
              className="grid grid-cols-1 gap-5 overflow-hidden transition-[max-height] duration-500 min-[700px]:grid-cols-2 min-[1024px]:grid-cols-3"
              style={{ maxHeight: testiExpanded ? '2000px' : '420px' }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className={`rounded-[20px] bg-white p-7 ${revealCls(testiInView)}`}
                  style={{ transitionDelay: testiInView ? `${200 + i * 80}ms` : '0ms' }}
                >
                  <p className="text-[1.02rem] leading-[1.62] text-brand-950">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="text-[0.98rem] font-bold text-brand-950">{t.name}</div>
                      <div className="mt-0.5 text-[0.86rem] text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!testiExpanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
            )}
          </div>

          <div className="relative z-[1] mt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setTestiExpanded((e) => !e)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.98rem] font-semibold text-brand-950 shadow-[0_14px_30px_-12px_rgba(20,18,12,0.18)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_rgba(20,18,12,0.24)]"
            >
              {testiExpanded ? 'Show less' : 'Show more'}
              <ChevronIcon className={`h-4 w-4 transition-transform duration-300 ${testiExpanded ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        </div>
      </section>

      {/*  FAQ  */}
      <section className="bg-white px-5 py-24 min-[900px]:px-12">
        <div ref={faqRef} className="mx-auto grid max-w-[1180px] grid-cols-1 gap-11 min-[900px]:grid-cols-[0.85fr_1.4fr] min-[900px]:gap-16">
          <div className={revealCls(faqInView)}>
            <h2 className="text-[clamp(2.4rem,5vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em] text-brand-950">
              Questions?
              <br />
              Answers.
            </h2>

            <div className="mt-14 rounded-[20px] bg-gray-50 p-7">
              <p className="text-[1.3rem] leading-[1.3] font-bold tracking-[-0.01em] text-brand-950">
                Feel free to reach out whenever you have questions.
              </p>
              <Link
                to="/contact"
                className="mt-24 inline-flex items-center gap-2.5 rounded-[10px] bg-brand-950 px-5 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-900"
              >
                Contact Now
                <ArrowRightBoldIcon className="h-[15px] w-[15px]" />
              </Link>
            </div>
          </div>

          <div className={revealCls(faqInView)} style={{ transitionDelay: faqInView ? '120ms' : '0ms' }}>
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div key={item.q} className={`border-b border-gray-200 ${i === 0 ? 'border-t' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <h3 className="text-[1.25rem] leading-[1.35] font-bold tracking-[-0.01em] text-brand-950">
                      {item.q}
                    </h3>
                    <span className="relative h-[22px] w-[22px] shrink-0 text-brand-950">
                      <span className="absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span
                        className={`absolute top-1/2 left-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 ${
                          isOpen ? 'rotate-90 opacity-0' : 'opacity-100'
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-400 ease-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="max-w-[640px] pb-6 text-[1rem] leading-[1.7] text-gray-500">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
