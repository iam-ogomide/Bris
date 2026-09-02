// Shared GSAP animation presets + hooks.
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const EASE = 'power3.out'
export const EASE_SOFT = 'power2.out'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** One-off entrance animation, e.g. gsap.from() with sane defaults. */
export const fadeUp = (target, opts = {}) => {
  const { y = 28, duration = 0.9, delay = 0, ease = EASE, ...rest } = opts
  return gsap.from(target, { y, opacity: 0, duration, delay, ease, ...rest })
}

export const fadeIn = (target, opts = {}) => {
  const { duration = 0.8, delay = 0, ease = EASE_SOFT, ...rest } = opts
  return gsap.from(target, { opacity: 0, duration, delay, ease, ...rest })
}

export const scaleIn = (target, opts = {}) => {
  const { scale = 0.9, duration = 0.8, delay = 0, ease = 'back.out(1.7)', ...rest } = opts
  return gsap.from(target, { scale, opacity: 0, duration, delay, ease, ...rest })
}

/**
 * Scroll-triggered reveal hook. Attach the returned ref to a section
 */
export const useScrollReveal = ({
  childSelector = '[data-reveal]',
  y = 32,
  duration = 0.9,
  stagger = 0.12,
  start = 'top 82%',
  ease = EASE,
  once = true,
  onStart,
} = {}) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = childSelector ? node.querySelectorAll(childSelector) : []

    if (prefersReducedMotion()) {
      gsap.set(targets.length ? targets : node, { opacity: 1, y: 0 })
      onStart?.()
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(targets.length ? targets : node, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: node,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
          onEnter: onStart,
        },
      })
    }, node)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childSelector, y, duration, stagger, start, ease, once])

  return ref
}

/** Simple counter : animates obj.value from 0 - target, call onUpdate to render it. */
export const countTo = (obj, { value, duration = 1.4, ease = EASE, onUpdate, ...rest } = {}) =>
  gsap.to(obj, { value, duration, ease, onUpdate, ...rest })

/** Marks reduced-motion preference so components can early-out of manual GSAP timelines. */
export { prefersReducedMotion }
