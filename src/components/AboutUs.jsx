import useInView from '../hooks/useInView'

const NODES = [
  { key: 'n1', type: 'plant', left: '8.49%', top: '72.5%' },
  { key: 'n2', type: 'solid', left: '25.47%', top: '37.5%', year: 2020, label: 'Founded' },
  { key: 'n3', type: 'light', left: '49.06%', top: '77.5%', year: 2021, label: '15 startups invested', size: 'lg' },
  { key: 'n4', type: 'light', left: '71.7%', top: '40%', year: 2022, label: 'Raised $50M', size: 'md' },
  { key: 'n5', type: 'light', left: '91.51%', top: '72.5%', year: 2024, label: '300% Growth', size: 'sm' },
]

const PlantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-[52%] w-[52%]">
    <path d="M12 21V11" stroke="#9fd6ab" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 12c0-3.5 2.5-6 6-6-0.5 3.5-2.8 6-6 6Z" fill="#7fc98d" />
    <path d="M12 15c0-3.2-2.3-5.6-5.5-5.8C6.8 12.6 9 15 12 15Z" fill="#5fae72" />
  </svg>
)

const nodeSizeClass = {
  lg: 'h-[clamp(120px,14vw,164px)] w-[clamp(120px,14vw,164px)]',
  md: 'h-[clamp(108px,12.4vw,148px)] w-[clamp(108px,12.4vw,148px)]',
  sm: 'h-[clamp(96px,11vw,128px)] w-[clamp(96px,11vw,128px)]',
}

const TimelineNode = ({ node, inView, delay }) => {
  const base =
    'absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center opacity-0 scale-50 transition-all duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]'
  const revealed = inView ? 'opacity-100 scale-100' : ''

  if (node.type === 'plant') {
    return (
      <div
        className={`${base} ${revealed} h-[clamp(76px,9vw,108px)] w-[clamp(76px,9vw,108px)] bg-[radial-gradient(circle_at_35%_30%,#234d33,#0d2016_75%)] shadow-[0_10px_26px_rgba(13,32,22,0.28)]`}
        style={{ left: node.left, top: node.top, transitionDelay: delay }}
      >
        <PlantIcon />
      </div>
    )
  }

  if (node.type === 'solid') {
    return (
      <div
        className={`${base} ${revealed} h-[clamp(108px,12.4vw,148px)] w-[clamp(108px,12.4vw,148px)] bg-gradient-to-br from-brand-800 to-brand-950 text-white shadow-[0_14px_30px_rgba(18,63,58,0.28)]`}
        style={{ left: node.left, top: node.top, transitionDelay: delay }}
      >
        <div className="text-[clamp(17px,2vw,24px)] leading-none font-bold tracking-[-0.01em]">{node.year}</div>
        <div className="mt-1.5 max-w-[80%] text-[clamp(10px,1vw,12.5px)] leading-[1.3] font-medium opacity-85">
          {node.label}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${base} ${revealed} ${nodeSizeClass[node.size]} bg-[#e9eef0] text-brand-900 shadow-[0_10px_26px_rgba(15,27,26,0.06)]`}
      style={{ left: node.left, top: node.top, transitionDelay: delay }}
    >
      <div className="text-[clamp(17px,2vw,24px)] leading-none font-bold tracking-[-0.01em]">{node.year}</div>
      <div className="mt-1.5 max-w-[80%] text-[clamp(10px,1vw,12.5px)] leading-[1.3] font-medium opacity-85">
        {node.label}
      </div>
    </div>
  )
}

const AboutUs = () => {
  const [headerRef, headerInView] = useInView(0.25)
  const [timelineRef, timelineInView] = useInView(0.25)

  return (
    <section className="bg-white px-6 pt-[56px] pb-20 min-[900px]:px-12 min-[900px]:pt-[70px] min-[900px]:pb-[120px]">
      <div
        ref={headerRef}
        className="mx-auto mb-[60px] grid max-w-[1200px] grid-cols-1 items-start gap-9 min-[760px]:mb-[100px] min-[760px]:grid-cols-[1.15fr_1fr]"
      >
        <div
          className={`col-span-full mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-800 transition-all duration-600 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-3.5 opacity-0'
          }`}
        >
          <span className="h-2 w-2 shrink-0 rounded-sm bg-brand-800" />
          About Us
        </div>
        <h2
          className={`max-w-[520px] text-[clamp(28px,3.4vw,42px)] leading-[1.22] font-bold tracking-[-0.02em] text-brand-950 transition-all delay-100 duration-700 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0'
          }`}
        >
          We support visionary entrepreneurs with capital
        </h2>
        <p
          className={`max-w-[400px] pt-1.5 text-[15px] leading-[1.75] text-gray-500 transition-all delay-200 duration-700 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0'
          }`}
        >
          We help bring their forward-thinking ideas to fruition, providing the necessary tools and expertise to
          grow their businesses and drive meaningful change.
        </p>
      </div>

      {/* Desktop / tablet zig-zag timeline */}
      <div ref={timelineRef} className="relative mx-auto hidden aspect-[1060/400] w-full max-w-[1200px] min-[760px]:block">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 1060 400"
          preserveAspectRatio="none"
        >
          <path
            d="M90,290 L270,150 L520,310 L760,160 L970,290"
            fill="none"
            stroke="#d3d8d9"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
            className={`transition-opacity delay-500 duration-600 ${timelineInView ? 'opacity-100' : 'opacity-0'}`}
          />
        </svg>

        {NODES.map((node, i) => (
          <TimelineNode key={node.key} node={node} inView={timelineInView} delay={`${0.05 + i * 0.13}s`} />
        ))}
      </div>

      {/* Mobile vertical fallback */}
      <div className="mx-auto flex max-w-[420px] flex-col items-center min-[760px]:hidden">
        {NODES.map((node, i) => (
          <div key={node.key} className="flex flex-col items-center">
            {i > 0 && (
              <div
                className="h-9 w-0.5 bg-[linear-gradient(#d3d8d9_60%,transparent_0%)] bg-[length:2px_10px] bg-repeat-y"
                aria-hidden="true"
              />
            )}
            <div
              className={`flex flex-col items-center justify-center rounded-full text-center opacity-0 transition-all duration-[550ms] ease-out ${
                timelineInView ? 'translate-y-0 opacity-100' : 'translate-y-3.5 opacity-0'
              } ${
                node.type === 'plant'
                  ? 'h-[84px] w-[84px] bg-[radial-gradient(circle_at_35%_30%,#234d33,#0d2016_75%)]'
                  : node.type === 'solid'
                    ? 'h-[118px] w-[118px] bg-gradient-to-br from-brand-800 to-brand-950 text-white'
                    : 'h-[118px] w-[118px] bg-[#e9eef0] text-brand-900'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {node.type === 'plant' ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-1/2 w-1/2">
                  <path d="M12 21V11" stroke="#9fd6ab" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M12 12c0-3.5 2.5-6 6-6-0.5 3.5-2.8 6-6 6Z" fill="#7fc98d" />
                  <path d="M12 15c0-3.2-2.3-5.6-5.5-5.8C6.8 12.6 9 15 12 15Z" fill="#5fae72" />
                </svg>
              ) : (
                <>
                  <div className="text-lg leading-none font-bold tracking-[-0.01em]">{node.year}</div>
                  <div className="mt-1.5 max-w-[80%] text-xs leading-[1.3] font-medium opacity-85">{node.label}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutUs
