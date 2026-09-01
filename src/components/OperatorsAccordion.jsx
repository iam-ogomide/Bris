import { useState } from 'react'
import useInView from '../hooks/useInView'
import { PlayIcon } from '../constants/icons'
import { ITEMS } from '../constants/data'

const OperatorsAccordion = () => {
  const [headerRef, headerInView] = useInView(0.2)
  const [accordionRef, accordionInView] = useInView(0.2)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white px-6 pt-2.5 pb-20 min-[760px]:pt-5 min-[900px]:px-12 min-[900px]:pb-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={`mb-14 flex flex-col flex-wrap items-start justify-between gap-8 transition-all duration-700 min-[760px]:flex-row ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="text-[clamp(30px,3.6vw,42px)] leading-[1.2] font-medium tracking-[-0.01em] text-brand-950">
            Aligned. Flexible.
            <span className="block bg-gradient-to-r from-brand-800 via-brand-mint to-brand-800 bg-clip-text font-medium text-transparent">
              Built for Operators.
            </span>
          </h2>

          <div className="max-w-[280px] pt-1.5">
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              We've been in your shoes—our approach is grounded in real experience.
            </p>
            <button className="group inline-flex cursor-pointer items-center gap-2 rounded-full border-none bg-brand-900 px-5 py-3 font-inherit text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-800">
              Discover more
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </button>
          </div>
        </div>

        <div
          ref={accordionRef}
          className={`flex flex-col transition-all delay-150 duration-700 ${
            accordionInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          {ITEMS.map((item, i) => {
            const active = i === activeIndex
            return (
              <div key={item.title} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveIndex(i)}
                  className="relative flex w-full cursor-pointer items-center gap-7 rounded-2xl border-none bg-transparent px-6 py-[26px] text-left font-sans transition-[padding] duration-400 min-[760px]:gap-[18px] min-[760px]:px-4 min-[760px]:py-5"
                >
                  <span
                    className={`relative z-[1] min-w-[26px] text-[15px] font-semibold transition-colors duration-400 ${
                      active ? 'text-brand-950' : 'text-gray-300'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative z-[1] text-[clamp(17px,1.9vw,21px)] font-medium tracking-[-0.01em] text-gray-900">
                    {item.title}
                  </span>
                  <span
                    className={`relative z-[1] ml-auto flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-brand-950 transition-all duration-300 min-[760px]:h-7 min-[760px]:w-7 ${
                      active ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                  >
                    <PlayIcon className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OperatorsAccordion
