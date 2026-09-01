import { LOGOS } from '../constants/data'

const LogoItem = ({ logo, hidden }) => (
  <div
    className="flex items-center gap-2.5 text-[21px] font-semibold tracking-[-0.01em] whitespace-nowrap text-gray-400 opacity-75"
    aria-hidden={hidden || undefined}
  >
    <logo.icon className="h-6 w-6 shrink-0" />
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
