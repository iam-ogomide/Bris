import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useInView from '../hooks/useInView'

const PlusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ChevronDownIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const ClockIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GlobeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M4 12h16" strokeLinecap="round" />
    <path d="M4 12a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M8 12v6" strokeLinecap="round" />
    <path d="M16 12v6" strokeLinecap="round" />
  </svg>
)

const CoinsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="8" cy="12" r="4" />
    <circle cx="16" cy="12" r="4" />
  </svg>
)

const HeartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="4" y="8" width="16" height="11" rx="2" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    <path d="M12 12v4M10 14h4" strokeLinecap="round" />
  </svg>
)

const DEPARTMENTS = ['Sales', 'Engineering', 'Design', 'Marketing', 'Support']

const ROLES = [
  {
    id: 'field-sales',
    title: 'Field Sales',
    type: 'Full Time',
    department: 'Sales',
    location: 'New York / On-site',
    remote: false,
    about:
      "You'll own the full sales cycle for our New York territory — prospecting, running demos, and closing new accounts face to face. This is a floor role: you're in the field most days, not behind a desk.",
    bullets: [
      'Build and manage a pipeline of local business accounts',
      'Run in-person product walkthroughs and negotiate contracts',
      'Report weekly on pipeline health and close rates',
      'Work closely with onboarding to hand off new clients',
    ],
    salary: '$95,000',
    salaryNote: 'Lower base with uncapped commission — most reps land in the $180K–$220K range on-target.',
  },
  {
    id: 'frontend-dev',
    title: 'Front-end Development',
    type: 'Freelancer',
    department: 'Engineering',
    location: 'New York / Remote',
    remote: true,
    about:
      "A contract engagement to help ship a redesign of our investor-facing dashboard. You'll work directly with our design and platform teams to turn Figma files into fast, accessible interfaces.",
    bullets: [
      'Build components in React from finished design files',
      'Optimize load performance across the dashboard',
      'Pair with the design team on interaction details',
      'Ship in weekly increments alongside the core team',
    ],
    salary: '$110 / hr',
    salaryNote: '3-month contract, roughly 25–30 hours a week. Extension possible based on scope.',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    type: 'Part-time',
    department: 'Design',
    location: 'New York / Remote',
    remote: true,
    about:
      "We're looking for a designer to help us keep our product feeling considered as it grows. You'll split time between new feature work and tending our design system.",
    bullets: [
      'Design flows for new features from sketch to hand-off',
      'Maintain and extend our shared component library',
      'Run lightweight usability checks with real users',
      'Partner with engineering on implementation details',
    ],
    salary: '$103,632',
    salaryNote: 'Pro-rated base for 20 hours a week, with full benefits eligibility.',
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    type: 'Full Time',
    department: 'Engineering',
    location: 'New York / Remote',
    remote: true,
    about:
      "You'll help build out the services behind our core platform — the systems that handle portfolio data, reporting pipelines, and everything our front-end relies on.",
    bullets: [
      'Design and maintain APIs used across the product',
      'Own reliability for a handful of core services',
      'Improve test coverage and deployment tooling',
      'Take part in on-call rotation with the rest of the team',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same for every full-time engineer regardless of location.',
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    type: 'Full Time',
    department: 'Marketing',
    location: 'New York / On-site',
    remote: false,
    about:
      "You'll shape how people first hear about Bris — planning campaigns, working with the founders on positioning, and keeping our story consistent everywhere it shows up.",
    bullets: [
      'Plan and run quarterly marketing campaigns',
      'Manage relationships with outside agencies and freelancers',
      'Track performance across channels and report on results',
      'Keep brand voice consistent across every touchpoint',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same as every other full-time role at Bris.',
  },
  {
    id: 'customer-success-lead',
    title: 'Customer Success Lead',
    type: 'Full Time',
    department: 'Support',
    location: 'New York / Remote',
    remote: true,
    about:
      "You'll be the first senior voice our partners talk to after they sign — helping them get set up, staying close to accounts at risk, and feeding what you hear back to the product team.",
    bullets: [
      'Own onboarding for new mid-market accounts',
      'Build playbooks for the rest of the support team',
      'Flag churn risk early and lead save conversations',
      'Share recurring customer feedback with product',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same for every full-time employee regardless of location.',
  },
]

const PERKS = [
  {
    Icon: ClockIcon,
    title: 'Flexible Working Hours',
    text: 'Our families and lives outside of our jobs are very important to us; our schedules are flexible to reflect and support that.',
  },
  {
    Icon: GlobeIcon,
    title: 'Remote First',
    text: 'Most of our team are based outside of New York. We do ask that your workday overlaps with Eastern Time for at least four hours.',
  },
  {
    Icon: CoinsIcon,
    title: 'Compensation',
    text: 'Everyone at Bris makes $207,264 USD, regardless of location. (Some sales positions have a lower base salary and contain a commission component.)',
  },
  {
    Icon: HeartIcon,
    title: 'Premium Healthcare',
    text: 'We offer the best medical PPO, dental, and vision plans we can find and cover 100% of premiums for employees and dependents.',
  },
]

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
