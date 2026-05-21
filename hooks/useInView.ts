'use client'

import { useInView as useInViewObserver } from 'react-intersection-observer'

export function useInView(options?: { threshold?: number; triggerOnce?: boolean }) {
  return useInViewObserver({
    threshold: options?.threshold ?? 0.1,
    triggerOnce: options?.triggerOnce ?? true,
  })
}
