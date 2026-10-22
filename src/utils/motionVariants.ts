export const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

/** Brutal "stamp" entrance: drops in rotated, then slams flat. */
export const stampIn = {
  hidden: { opacity: 0, scale: 1.15, rotate: -3 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 18,
      // springs overshoot; keep opacity on a plain tween so it lands exactly at 1
      opacity: { duration: 0.2 },
    },
  },
};

/** Red shutter that wipes over the screen between pages. */
export const shutter = {
  initial: { scaleX: 1, originX: 1 },
  animate: { scaleX: 0, originX: 1, transition: { duration: 0.45, ease: [0.77, 0, 0.18, 1] } },
  exit: { scaleX: 1, originX: 0, transition: { duration: 0.35, ease: [0.77, 0, 0.18, 1] } },
} as const;

export const pageContent = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
} as const;
