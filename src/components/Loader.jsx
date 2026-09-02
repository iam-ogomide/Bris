import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../constants/animations'
import { BrandMarkIcon } from '../constants/icons'

// Full-screen intro loader.
const Loader = ({ onDone }) => {
  const rootRef = useRef(null)
  const markRef = useRef(null)
  const barRef = useRef(null)
  const labelRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      onDone?.()
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => onDone?.(),
      })

      tl.set(rootRef.current, { autoAlpha: 1 })
        .from(markRef.current, { scale: 0.6, opacity: 0, duration: 0.6, ease: 'back.out(1.8)' })
        .from(labelRef.current, { y: 10, opacity: 0, duration: 0.5 }, '-=0.35')
        .to(barRef.current, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, '-=0.15')
        .to(markRef.current, { scale: 1.06, duration: 0.35, ease: 'power1.inOut', yoyo: true, repeat: 1 }, '-=0.9')
        .to(rootRef.current, { autoAlpha: 0, duration: 0.6, ease: 'power2.inOut' }, '+=0.15')
        .set(rootRef.current, { display: 'none' })
    }, rootRef)

    return () => ctx.revert()
  }, [onDone])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-5 bg-brand-950 opacity-0"
      aria-hidden="true"
    >
      <div ref={markRef} className="flex h-14 w-14 items-center justify-center">
        <BrandMarkIcon color="#6fcbbe" className="h-full w-full" />
      </div>
      <div ref={labelRef} className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase">
        Bris
      </div>
      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
        <div ref={barRef} className="h-full w-full origin-left scale-x-0 rounded-full bg-brand-mint" />
      </div>
    </div>
  )
}

export default Loader
