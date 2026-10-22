import type { SVGProps } from "react";

/** The Uchiha clan uchiwa (fan) crest. */
export function UchihaCrest({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 132" className={className} aria-hidden="true" {...props}>
      <rect x="43" y="86" width="14" height="42" fill="#fff" stroke="#0b0b0b" strokeWidth="5" />
      <circle cx="50" cy="50" r="44" fill="#fff" />
      <path d="M 6.7 58 A 44 44 0 1 1 93.3 58 Q 50 47 6.7 58 Z" fill="#d10f1f" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="#0b0b0b" strokeWidth="5" />
    </svg>
  );
}
