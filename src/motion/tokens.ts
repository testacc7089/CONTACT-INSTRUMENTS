export const easeOut = [0.22, 1, 0.36, 1] as const

export const motionTokens = {
  duration: {
    fast: 0.22,
    base: 0.45,
    slow: 0.7,
  },
  distance: 16,
  stagger: 0.06,
  ease: easeOut,
  spring: { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.7 },
}
