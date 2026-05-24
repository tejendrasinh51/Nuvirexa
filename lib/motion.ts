/** Shared motion timing — snappy for navigation, premium on scroll reveals */
export const MOTION_EASE = [0.16, 1, 0.3, 1] as const

export const MOTION_DURATION = {
  reveal: 0.4,
  revealFast: 0.22,
  slide: 0.55,
  word: 0.35,
  wordStagger: 0.04,
  scramble: 1200,
} as const

export const MARQUEE_DURATION_DEFAULT = 40
