import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavChevronDownIcon, BrandMarkIcon } from '../constants/icons'
import { NAV_LINKS, ABOUT_ITEMS } from '../constants/data'

const ABOUT_DROPDOWN_LABEL = 'About Us'

const btnBase =
  'group cursor-pointer items-center gap-2 rounded-full border-none text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2'

const Arrow = () => (
  <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const aboutRef = useRef(null)
  const { pathname } = useLocation()

  const isAboutActive = ABOUT_ITEMS.some((item) => pathname === item.to)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setAboutOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    if (!aboutOpen) return
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [aboutOpen])

  return (
    <nav className="relative z-30 flex animate-[heroFadeDown_0.7s_ease_forwards] items-center justify-between gap-4 px-[18px] py-[18px] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 min-[520px]:px-6 min-[520px]:py-[22px] min-[900px]:px-12 min-[900px]:py-7">
      <Link to="/" className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-[-0.02em] text-white min-[520px]:text-xl">
        <span className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center">
          <BrandMarkIcon color="white" />
        </span>
        Bris
      </Link>

      <div className="hidden items-center gap-1 rounded-full border border-white/14 bg-white/8 p-1.5 backdrop-blur-md min-[900px]:flex">
        <Link
          to="/"
          className={`rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            pathname === '/' ? 'bg-white font-semibold text-brand-900' : 'text-white/70 hover:text-white'
          }`}
        >
          Home
        </Link>

        <div className="relative" ref={aboutRef}>
          <button
            type="button"
            onClick={() => setAboutOpen((o) => !o)}
            aria-haspopup="true"
            aria-expanded={aboutOpen}
            className={`inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              isAboutActive || aboutOpen ? 'bg-white font-semibold text-brand-900' : 'text-white/70 hover:text-white'
            }`}
          >
            {ABOUT_DROPDOWN_LABEL}
            <NavChevronDownIcon className={aboutOpen ? '-rotate-180' : ''} />
          </button>

          <div
            className={`absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 origin-top rounded-2xl bg-white p-2 shadow-[0_20px_45px_rgba(10,31,30,0.22)] ring-1 ring-black/5 transition-all duration-200 ${
              aboutOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
            }`}
          >
            {ABOUT_ITEMS.map(({ label, to, description }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setAboutOpen(false)}
                className="block rounded-xl p-3 transition-colors duration-150 hover:bg-gray-50"
              >
                <span className="block text-sm font-semibold text-brand-950">{label}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{description}</span>
              </Link>
            ))}
          </div>
        </div>

        {NAV_LINKS.filter((link) => link.label !== 'Home').map((link) => {
          const isActive = link.to !== null && pathname === link.to
          const className = `rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            isActive ? 'bg-white font-semibold text-brand-900' : 'text-white/70 hover:text-white'
          }`

          return link.to ? (
            <Link key={link.label} to={link.to} className={className}>
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href="#" className={className}>
              {link.label}
            </a>
          )
        })}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <Link
          to="/contact"
          className={`${btnBase} hidden border border-white/12 bg-brand-800 px-5 py-3 text-white hover:bg-[#15423e] min-[640px]:inline-flex`}
        >
          Get In Touch <Arrow />
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[32] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 min-[900px]:hidden"
        >
          <span
            className={`absolute h-0.5 w-[18px] rounded-sm bg-white transition-all duration-300 ${
              menuOpen ? 'top-[22px] rotate-45' : 'top-4'
            }`}
          />
          <span
            className={`absolute top-[22px] h-0.5 w-[18px] rounded-sm bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-[18px] rounded-sm bg-white transition-all duration-300 ${
              menuOpen ? 'top-[22px] -rotate-45' : 'top-7'
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobileMenu"
        className={`absolute inset-x-0 top-0 z-[25] flex max-h-[calc(100vh-1px)] flex-col gap-1.5 overflow-y-auto border-b border-white/10 bg-[rgba(8,20,19,0.92)] px-[18px] pt-24 pb-7 backdrop-blur-xl transition-all duration-300 min-[900px]:hidden ${
          menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className={`border-b border-white/8 px-1.5 py-3.5 text-base font-medium transition-colors duration-200 ${
            pathname === '/' ? 'font-semibold text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Home
        </Link>

        <div className="border-b border-white/8">
          <button
            type="button"
            onClick={() => setMobileAboutOpen((o) => !o)}
            aria-expanded={mobileAboutOpen}
            className={`flex w-full items-center justify-between px-1.5 py-3.5 text-base font-medium transition-colors duration-200 ${
              isAboutActive || mobileAboutOpen ? 'font-semibold text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {ABOUT_DROPDOWN_LABEL}
            <NavChevronDownIcon className={mobileAboutOpen ? '-rotate-180' : ''} />
          </button>

          <div className={`grid transition-all duration-300 ${mobileAboutOpen ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="flex flex-col gap-1 overflow-hidden">
              {ABOUT_ITEMS.map(({ label, to, description }) => (
                <Link key={label} to={to} onClick={() => setMenuOpen(false)} className="block rounded-xl px-1.5 py-2.5">
                  <span className="block text-sm font-semibold text-white">{label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-white/55">{description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {NAV_LINKS.filter((link) => link.label !== 'Home').map((link) => {
          const isActive = link.to !== null && pathname === link.to
          const className = `border-b border-white/8 px-1.5 py-3.5 text-base font-medium transition-colors duration-200 ${
            isActive ? 'font-semibold text-white' : 'text-white/70 hover:text-white'
          }`

          return link.to ? (
            <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className={className}>
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href="#" onClick={() => setMenuOpen(false)} className={className}>
              {link.label}
            </a>
          )
        })}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={`${btnBase} flex mt-4 w-full justify-center bg-white px-[22px] py-3.5 text-[#0a1f1e] hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)]`}
        >
          Get In Touch <Arrow />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
