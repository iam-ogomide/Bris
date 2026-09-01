import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { ArrowUpRightIcon, ChevronUpIcon, BrandMarkIcon } from '../constants/icons'
import { EXPLORE_LINKS, SOCIALS } from '../constants/data'

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
                <BrandMarkIcon />
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
              Terms & Conditions
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
