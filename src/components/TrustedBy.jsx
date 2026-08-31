const LOGOS = [
  {
    name: 'Logoipsum',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    name: 'Logoipsum',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'Logoipsum',
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    name: 'Logoipsum',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8 20h8M9 10l3 3 3-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    name: 'Logoipsum',
    icon: (
      <>
        <path d="M4 12a8 8 0 1 1 3 6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 17v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

const LogoItem = ({ logo, hidden }) => (
  <div
    className="flex items-center gap-2.5 text-[21px] font-semibold tracking-[-0.01em] whitespace-nowrap text-gray-400 opacity-75"
    aria-hidden={hidden || undefined}
  >
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0">
      {logo.icon}
    </svg>
    {logo.name}
  </div>
)

const TrustedBy = () => {
  return (
    <section className="bg-white px-6 pt-14 pb-9 text-center min-[900px]:px-12 min-[900px]:pt-[72px] min-[900px]:pb-12">
      <div className="mb-9 text-[13px] font-medium tracking-[0.01em] text-gray-500">
        Trusted by 100+ Famous Companies
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_14%,#000_86%,transparent_100%)]">
        <div className="flex w-max animate-[marqueeScroll_26s_linear_infinite] items-center gap-[72px] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {LOGOS.map((logo, i) => (
            <LogoItem key={`a-${i}`} logo={logo} />
          ))}
          {LOGOS.map((logo, i) => (
            <LogoItem key={`b-${i}`} logo={logo} hidden />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
