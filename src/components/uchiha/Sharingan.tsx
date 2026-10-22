import type { SVGProps } from "react";

const INK = "#0b0b0b";
const RED = "#d10f1f";

/** Single tomoe: head circle at origin, tail sweeping up-left. */
const TOMOE_PATH = "M 0 -7 A 7 7 0 1 0 7 0 C 7 -10 0 -18 -13 -19 C -5 -15 -1 -11 0 -7 Z";

/** One curved blade of Itachi's Mangekyō, pointing up from the pupil. */
const BLADE_PATH = "M -9 -3 C -14 -22 -2 -40 20 -44 C 8 -34 4 -20 9 -3 Z";

type SharinganProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  variant?: "tomoe" | "mangekyo";
  /** Rotate the pattern continuously. */
  spin?: boolean;
};

export function Sharingan({
  variant = "tomoe",
  spin = false,
  className,
  ...props
}: SharinganProps) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true" {...props}>
      <circle r="47" fill={RED} stroke={INK} strokeWidth="4" />
      <g className={spin ? "animate-spin-slow" : undefined}>
        {variant === "tomoe" ? (
          <>
            <circle r="23" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="1.6" />
            {[0, 120, 240].map((angle) => (
              <path
                key={angle}
                d={TOMOE_PATH}
                fill={INK}
                transform={`rotate(${angle}) translate(0 -23) rotate(-80)`}
              />
            ))}
            <circle r="9" fill={INK} />
          </>
        ) : (
          <>
            {[0, 120, 240].map((angle) => (
              <path key={angle} d={BLADE_PATH} fill={INK} transform={`rotate(${angle})`} />
            ))}
            <circle r="11" fill={INK} />
            <circle r="4" fill={RED} />
          </>
        )}
      </g>
      <ellipse cx="-18" cy="-24" rx="7" ry="4" fill="#fff" opacity="0.35" />
    </svg>
  );
}
