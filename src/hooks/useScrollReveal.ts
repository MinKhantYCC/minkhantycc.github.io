import { useLayoutEffect } from 'react'

export function useScrollReveal() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      return
    }

    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (elements.length === 0) {
      return
    }

    root.classList.add('motion-enhanced')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    for (const element of elements) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
      root.classList.remove('motion-enhanced')
    }
  }, [])
}
