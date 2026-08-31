import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

const EXPLORE_LINKS = ['Investment', 'Advisor', 'AI Solutions', 'Focus', 'Company', 'News']

const ArrowUpRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7M17 7H9M17 7V15" />
  </svg>
)

const ChevronUpIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58zm7.02-11.14a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0z" />
  </svg>
)

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.24 3H21l-6.5 7.43L22 21h-6.15l-4.82-6.3L5.6 21H3l7-8.02L2.5 3h6.3l4.36 5.77L18.24 3zm-1.08 16.17h1.53L7.9 4.74H6.26l10.9 14.43z" />
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
  </svg>
)

const SOCIALS = [
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: XIcon, label: 'X' },
  { Icon: LinkedInIcon, label: 'LinkedIn' },
  { Icon: YoutubeIcon, label: 'YouTube' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [panelRef, panelInView] = useInView(0.1)

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-white px-4 pt-10 pb-14 min-[560px]:px-6">
      <footer
        ref={panelRef}
        className={`mx-auto max-w-[1400px] rounded-[28px] bg-gray-50 px-8 pt-14 pb-8 transition-all duration-700 min-[560px]:px-14 min-[860px]:px-16 ${
          panelInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[620px] min-w-[280px] flex-1">
            <Link to="/" className="flex w-fit items-center gap-2.5 text-lg font-bold tracking-[-0.02em] text-brand-950">
              <span className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <rect x="2" y="2" width="9" height="9" rx="2" fill="#0a1f1e" />
                  <rect x="13" y="2" width="9" height="9" rx="2" fill="#0a1f1e" fillOpacity="0.5" />
                  <rect x="2" y="13" width="9" height="9" rx="2" fill="#0a1f1e" fillOpacity="0.5" />
                  <rect x="13" y="13" width="9" height="9" rx="2" fill="#0a1f1e" />
                </svg>
              </span>
              Bris
            </Link>

            <h2 className="mt-[22px] mb-5 text-[clamp(30px,4.6vw,52px)] leading-[1.08] font-medium tracking-[-0.5px] text-brand-950">
              Investing with
              <br />
              <i className="font-serif-display italic">conviction</i> 
            </h2>
            <p className="mb-[30px] max-w-[400px] text-[15px] leading-[1.55] text-gray-600">
              Disciplined strategies, rigorous research, and long-term thinking to create enduring value.
            </p>

            <Link
              to="/contact"
              className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full border-none bg-white py-2 pr-2 pl-[22px] text-[14.5px] font-semibold text-brand-950 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.1)]"
            >
              Contact Us
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-mint transition-all duration-400 group-hover:rotate-45 group-hover:bg-brand-800">
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-brand-950" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-[70px] min-[860px]:gap-[90px]">
            <div>
              <div className="mb-[18px] text-[11.5px] font-semibold tracking-[1.2px] text-gray-400 uppercase">Explore</div>
              {EXPLORE_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="group relative mb-[15px] block w-fit text-[16.5px] font-medium text-brand-950 transition-transform duration-300 hover:translate-x-5 hover:text-black"
                >
                  <span className="absolute top-px -left-5 -translate-x-1 text-[13px] text-brand-mint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    »
                  </span>
                  {label}
                </a>
              ))}
            </div>

            <div>
              <div className="mb-[18px] text-[11.5px] font-semibold tracking-[1.2px] text-gray-400 uppercase">Stay In Touch</div>
              <div className="mb-3.5 text-[16.5px] font-semibold text-brand-950">Subscribe</div>
              <form onSubmit={(e) => e.preventDefault()} className="mt-1 flex max-w-[280px] items-center rounded-full bg-white p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-3.5 py-2 text-sm text-brand-950 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-[34px] w-[34px] min-w-[34px] items-center justify-center rounded-full bg-brand-mint transition-all duration-400 hover:rotate-45 hover:bg-brand-800"
                >
                  <ArrowUpRightIcon className="h-3.5 w-3.5 text-brand-950" />
                </button>
              </form>

              <div className="mt-[26px] flex gap-3">
                {SOCIALS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-950 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-800"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-[48px] h-px bg-gray-200" />

        <div className="flex flex-wrap items-center justify-between gap-3.5 text-[13px] text-gray-500">
          <div>© All rights reserved. {new Date().getFullYear()} Bris</div>
          <div className="flex flex-wrap gap-7">
            <a href="#" className="transition-colors duration-300 hover:text-brand-950">
              Information Security Policy
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-brand-950">
              Cookie policy
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-brand-950">
              Terms &amp; Conditions
            </a>
          </div>
          <a href="#" onClick={scrollToTop} className="group inline-flex items-center gap-1.5 font-semibold text-brand-950">
            Back to the top
            <ChevronUpIcon className="h-[13px] w-[13px] text-brand-950 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer
