import { motion } from "framer-motion";

type CrowProps = {
  color?: string;
  /** Seconds per wing beat. */
  flap?: number;
};

/**
 * Crow silhouette drawn in a 56×28 box facing right; place it with a parent
 * `<g transform>` or motion values. Wings beat continuously.
 */
export function Crow({ color = "#0b0b0b", flap = 0.35 }: CrowProps) {
  return (
    <g fill={color}>
      <motion.g
        style={{ originY: 1 }}
        animate={{ scaleY: [1, -0.5, 1] }}
        transition={{ duration: flap, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <path d="M27 15 Q22 2 8 -1 Q18 6 20 12 Z" />
        <path d="M31 15 Q34 0 50 -5 Q41 5 37 15 Z" />
      </motion.g>
      <ellipse cx="29" cy="17" rx="10" ry="4.5" />
      <circle cx="40" cy="14.5" r="4" />
      <path d="M43 13 L50 15 L43 17 Z" />
      <path d="M20 16 L9 12 L11 21 L20 19 Z" />
    </g>
  );
}
