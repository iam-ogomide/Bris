import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useInView from '../hooks/useInView'
import { PlusIcon, ChevronDownIcon } from '../constants/icons'
import { DEPARTMENTS, ROLES, PERKS } from '../constants/data'

const chipCls = (active) =>
  `cursor-pointer rounded-full border px-[18px] py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
    active
      ? 'border-brand-950 bg-brand-950 text-white'
      : 'border-gray-200 bg-white text-brand-950 hover:border-brand-950/40 hover:-translate-y-px'
  }`

const Careers = () => {
  const [filter, setFilter] = useState('all')
  const [openRole, setOpenRole] = useState(null)
  const [deptOpen, setDeptOpen] = useState(false)
  const deptRef = useRef(null)

  const [rolesRef, rolesInView] = useInView(0.1)
  const [perksRef, perksInView] = useInView(0.15)

  useEffect(() => {
    if (!deptOpen) return
    const handleClickOutside = (e) => {
      if (deptRef.current && !deptRef.current.contains(e.target)) setDeptOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [deptOpen])

  const isDeptFilter = DEPARTMENTS.includes(filter)
  const visibleRoles = ROLES.filter((role) => {
    if (filter === 'all') return true
    if (filter === 'remote') return role.remote
    return role.department === filter
  })

  const selectFilter = (value) => {
    setFilter(value)
    setDeptOpen(false)
  }

  return (
    <div className="bg-white">
      <section className="bg-brand-950 pb-14">
        <Navbar />
        <div className="mx-auto max-w-[1100px] animate-[heroFadeUp_0.7s_ease_forwards] px-6 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:px-8">
          <span className="mb-6 inline-block rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.04em] text-white/70">
            Career
          </span>
          <h1 className="mb-4 text-[clamp(38px,7vw,64px)] leading-[1.04] font-medium tracking-[-0.01em] text-white">
            Work With Us
          </h1>
          <p className="max-w-[480px] text-[15.5px] leading-relaxed text-white/60">
            Open roles across the team — from the field to the roadmap.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-14 sm:px-8 sm:py-16" ref={rolesRef}>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <button type="button" onClick={() => selectFilter('all')} className={chipCls(filter === 'all')}>
              All Roles
            </button>
            <button type="button" onClick={() => selectFilter('remote')} className={chipCls(filter === 'remote')}>
              Remote
            </button>

            <div className="relative" ref={deptRef}>
              <button
                type="button"
                onClick={() => setDeptOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={deptOpen}
                className={`${chipCls(isDeptFilter || deptOpen)} inline-flex items-center gap-1.5`}
              >
                {isDeptFilter ? filter : 'Department'}
                <ChevronDownIcon className={`h-3 w-3 shrink-0 transition-transform duration-200 ${deptOpen ? '-rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 z-10 mt-2 min-w-[170px] origin-top-left rounded-2xl bg-white p-1.5 shadow-[0_20px_45px_rgba(10,31,30,0.14)] ring-1 ring-black/5 transition-all duration-200 ${
                  deptOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
              >
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => selectFilter(dept)}
                    className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                      filter === dept ? 'bg-brand-950 text-white' : 'text-brand-950 hover:bg-gray-50'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <span className="text-sm text-gray-500 transition-all duration-200">
            {visibleRoles.length === 1 ? '1 role' : `${visibleRoles.length} roles`}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {ROLES.map((role, i) => {
            const isOpen = openRole === role.id
            const isVisible = visibleRoles.includes(role)

            return (
              <div
                key={role.id}
                className={`overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 ${
                  isVisible ? 'block' : 'hidden'
                } ${rolesInView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'} ${
                  isOpen ? 'shadow-[0_12px_32px_rgba(10,31,30,0.08)]' : 'hover:border-brand-950/25'
                }`}
                style={{ transitionDelay: rolesInView ? `${i * 60}ms` : '0ms' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenRole(isOpen ? null : role.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span className="min-w-[160px] flex-1 font-serif-display text-lg font-medium text-brand-950 sm:text-xl">
                    {role.title}
                  </span>

                  <span className="hidden shrink-0 items-center gap-6 sm:flex">
                    <span className="text-sm whitespace-nowrap text-gray-500">{role.type}</span>
                    <span className="min-w-[84px] text-sm font-medium text-brand-800">{role.department}</span>
                    <span className="min-w-[140px] text-right text-sm whitespace-nowrap text-gray-500">{role.location}</span>
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                      isOpen ? 'border-brand-950 bg-brand-950' : 'border-gray-200'
                    }`}
                  >
                    <PlusIcon
                      className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-brand-950'}`}
                    />
                  </span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="mx-6 grid grid-cols-1 gap-8 border-t border-gray-100 pt-6 pb-7 sm:mx-7 md:grid-cols-[1.6fr_1fr]">
                      <div>
                        <h4 className="mb-2.5 text-xs font-semibold tracking-[0.02em] text-brand-800">About the role</h4>
                        <p className="mb-4 text-[14.5px] leading-relaxed text-gray-600">{role.about}</p>
                        <h4 className="mb-2.5 text-xs font-semibold tracking-[0.02em] text-brand-800">What you'll do</h4>
                        <ul className="flex flex-col gap-2">
                          {role.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-gray-600">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-fit rounded-xl bg-gray-50 p-5">
                        <p className="font-serif-display text-2xl font-medium text-brand-950">{role.salary}</p>
                        <p className="mt-1 mb-4 text-[13px] leading-relaxed text-gray-500">{role.salaryNote}</p>
                        <button
                          type="button"
                          className="w-full cursor-pointer rounded-lg bg-brand-950 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(10,31,30,0.22)]"
                        >
                          Apply now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {visibleRoles.length === 0 && (
            <p className="animate-[heroFadeUp_0.4s_ease_forwards] px-1 py-8 text-center text-sm text-gray-500">
              No roles match this filter right now.
            </p>
          )}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 sm:px-8 sm:py-20" ref={perksRef}>
        <h2 className="mb-12 text-center font-serif-display text-[clamp(28px,4.5vw,38px)] font-medium text-brand-950 sm:mb-14">
          Our Perks and Benefits
        </h2>

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {PERKS.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className={`flex gap-4.5 transition-all duration-700 ${
                perksInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: perksInView ? `${i * 90}ms` : '0ms' }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mint/15">
                <Icon className="h-5 w-5 text-brand-800" />
              </div>
              <div>
                <h3 className="mb-1.5 font-serif-display text-[19px] font-medium text-brand-950">{title}</h3>
                <p className="text-[14.5px] leading-relaxed text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Careers
