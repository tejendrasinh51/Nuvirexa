/** Shared motion timing — slower, premium pacing */
export const MOTION_EASE = [0.16, 1, 0.3, 1] as const

export const MOTION_DURATION = {
  page: 0.55,
  reveal: 0.85,
  slide: 0.9,
  word: 0.6,
  wordStagger: 0.1,
  scramble: 1600,
} as const

export const MARQUEE_DURATION_DEFAULT = 40
