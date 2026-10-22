import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { type PointerEvent, useEffect, useId, useState } from "react";
import type { Dictionary } from "../../constants/dictionary";
import { Crow } from "./Crow";
import { Sharingan } from "./Sharingan";

const INK = "#0b0b0b";
const RED = "#d10f1f";
const PAPER = "#f3ede1";
const SKIN = "#efd9bd";
const SKIN_SHADE = "#d6b995";
const CLOAK = "#141414";

const CLOUD_PATH =
  "M0 20 Q0 8 12 8 Q16 0 28 2 Q36 -4 46 4 Q58 2 60 14 Q70 18 64 28 Q60 36 48 32 Q40 40 28 34 Q16 40 8 32 Q-4 32 0 20 Z";

const LEFT_EYE = "M164 213 Q177 203 191 212 Q177 220 164 213 Z";
const RIGHT_EYE = "M209 212 Q223 203 236 213 Q223 220 209 212 Z";

/** Crow box is 56×28; offset so the burst originates from Itachi's chest. */
const BURST_ORIGIN = { x: 172, y: 236 };

const BURST_CROWS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 + (i % 3) * 0.18;
  const distance = 230 + (i % 4) * 45;
  return {
    id: i,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance,
    flip: Math.cos(angle) < 0,
    delay: (i % 5) * 0.03,
  };
});

const AMBIENT_CROWS = [
  { id: "a", y: 70, duration: 9, delay: 0, scale: 0.9 },
  { id: "b", y: 118, duration: 12, delay: 3.5, scale: 0.6 },
  { id: "c", y: 40, duration: 14, delay: 7, scale: 0.5 },
];

const BURST_MS = 1500;

type ItachiPosterProps = {
  t: Dictionary;
};

export function ItachiPoster({ t }: ItachiPosterProps) {
  const [hovered, setHovered] = useState(false);
  const [burstId, setBurstId] = useState(0);
  const [bursting, setBursting] = useState(false);
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const figureX = useTransform(springX, (v) => v * 14);
  const figureY = useTransform(springY, (v) => v * 8);
  const moonX = useTransform(springX, (v) => v * -20);
  const moonY = useTransform(springY, (v) => v * -12);

  useEffect(() => {
    if (burstId === 0) return;
    const timer = window.setTimeout(() => setBursting(false), BURST_MS);
    return () => window.clearTimeout(timer);
  }, [burstId]);

  const handlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleGenjutsu = () => {
    setBurstId((id) => id + 1);
    setBursting(true);
  };

  const eyeVariant = hovered || bursting ? "mangekyo" : "tomoe";

  return (
    <figure className="relative mx-auto w-full max-w-[440px]">
      <button
        type="button"
        aria-label={t.itachi.label}
        aria-pressed={bursting}
        onClick={handleGenjutsu}
        onPointerEnter={() => setHovered(true)}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="brutal brutal-blood press relative block w-full cursor-pointer overflow-hidden bg-[#f3ede1]"
      >
        <svg viewBox="0 0 400 520" className="block h-auto w-full" aria-hidden="true">
          <defs>
            <pattern id={`${uid}-dots`} width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="4.5" cy="4.5" r="1.3" fill={INK} opacity="0.18" />
            </pattern>
            <clipPath id={`${uid}-eye-l`}>
              <path d={LEFT_EYE} />
            </clipPath>
            <clipPath id={`${uid}-eye-r`}>
              <path d={RIGHT_EYE} />
            </clipPath>
          </defs>

          <rect width="400" height="520" fill={PAPER} />
          <rect width="400" height="520" fill={`url(#${uid}-dots)`} />

          <motion.g style={{ x: moonX, y: moonY }}>
            <motion.circle
              cx="200"
              cy="215"
              r="150"
              fill={RED}
              stroke={INK}
              strokeWidth="4"
              animate={{ scale: [1, 1.035, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.g>

          {AMBIENT_CROWS.map((crow) => (
            <motion.g
              key={crow.id}
              initial={{ x: -70, y: crow.y }}
              animate={{ x: [-70, 470], y: [crow.y, crow.y - 16, crow.y + 10, crow.y] }}
              transition={{
                duration: crow.duration,
                delay: crow.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <g transform={`scale(${crow.scale})`}>
                <Crow />
              </g>
            </motion.g>
          ))}

          <text
            x="378"
            y="26"
            fill={INK}
            fontSize="30"
            fontWeight="900"
            style={{ writingMode: "vertical-rl", fontFamily: "var(--font-jp)" }}
          >
            うちはイタチ
          </text>
          <text
            x="16"
            y="32"
            fill={INK}
            fontSize="15"
            fontWeight="700"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            NO.01 / 写輪眼
          </text>

          <motion.g style={{ x: figureX, y: figureY }}>
            <motion.g
              key={burstId}
              initial={{ opacity: burstId ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: burstId ? 0.9 : 0, duration: 0.5 }}
            >
              <ItachiFigure uid={uid} eyeVariant={eyeVariant} />
            </motion.g>
          </motion.g>

          {bursting && (
            <g key={`burst-${burstId}`}>
              {BURST_CROWS.map((crow) => (
                <motion.g
                  key={crow.id}
                  initial={{ x: BURST_ORIGIN.x, y: BURST_ORIGIN.y, scale: 0.3, opacity: 1 }}
                  animate={{
                    x: BURST_ORIGIN.x + crow.dx,
                    y: BURST_ORIGIN.y + crow.dy,
                    scale: 1.4,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2, delay: crow.delay, ease: "easeOut" }}
                >
                  <g transform={crow.flip ? "translate(56 0) scale(-1 1)" : undefined}>
                    <Crow flap={0.16} />
                  </g>
                </motion.g>
              ))}
            </g>
          )}

          <rect x="0" y="474" width="400" height="46" fill={INK} />
          <text
            x="16"
            y="505"
            fill={PAPER}
            fontSize="20"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
          >
            {t.itachi.caption.toUpperCase()}
          </text>
          <text
            x="384"
            y="505"
            fill={RED}
            fontSize="18"
            fontWeight="900"
            textAnchor="end"
            style={{ fontFamily: "var(--font-jp)" }}
          >
            万華鏡写輪眼
          </text>
        </svg>
      </button>
      <figcaption className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
        ▲ {t.itachi.hint}
      </figcaption>
    </figure>
  );
}

type ItachiFigureProps = {
  uid: string;
  eyeVariant: "tomoe" | "mangekyo";
};

/** Stylised bust: Akatsuki cloak, scratched Leaf headband, Sharingan eyes. */
function ItachiFigure({ uid, eyeVariant }: ItachiFigureProps) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* hair, back layer */}
      <path
        d="M136 150 Q130 108 156 94 L162 74 L178 88 L192 66 L206 84 L224 70 L230 92 Q268 104 264 150 L270 300 L262 292 L256 310 L252 176 L148 176 L144 310 L138 292 L130 300 Z"
        fill={INK}
      />
      <path d="M172 102 Q196 90 222 100" stroke="#3a3a3a" strokeWidth="3" fill="none" />

      {/* neck */}
      <rect x="180" y="284" width="40" height="76" fill={SKIN} stroke={INK} strokeWidth="3" />
      <path d="M180 290 L220 300 L220 330 L180 318 Z" fill={SKIN_SHADE} />

      {/* Akatsuki cloak */}
      <path
        d="M28 520 L44 404 Q62 366 124 350 L200 372 L276 350 Q338 366 356 404 L372 520 Z"
        fill={CLOAK}
        stroke={INK}
        strokeWidth="3"
      />
      <path d="M200 380 L200 520" stroke="#2e2e2e" strokeWidth="3" />
      <g transform="translate(58 404)">
        <path d={CLOUD_PATH} fill={RED} stroke={PAPER} strokeWidth="3" />
      </g>
      <g transform="translate(272 428) scale(0.85)">
        <path d={CLOUD_PATH} fill={RED} stroke={PAPER} strokeWidth="3" />
      </g>

      {/* face */}
      <path
        d="M150 168 L150 238 Q153 276 180 296 L200 306 L220 296 Q247 276 250 238 L250 168 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth="4"
      />
      <path d="M232 176 L250 176 L250 238 Q247 276 220 296 Q240 250 232 176 Z" fill={SKIN_SHADE} />

      {/* brows */}
      <path d="M165 198 Q178 192 191 198" stroke={INK} strokeWidth="3.5" fill="none" />
      <path d="M209 198 Q222 192 235 198" stroke={INK} strokeWidth="3.5" fill="none" />

      {/* eyes */}
      <Eye clipId={`${uid}-eye-l`} path={LEFT_EYE} cx={178} variant={eyeVariant} />
      <Eye clipId={`${uid}-eye-r`} path={RIGHT_EYE} cx={222} variant={eyeVariant} />
      <path d="M162 213 Q177 201 192 211" stroke={INK} strokeWidth="3.2" fill="none" />
      <path d="M208 211 Q223 201 238 213" stroke={INK} strokeWidth="3.2" fill="none" />

      {/* tear troughs, nose, mouth */}
      <path d="M189 219 Q188 232 182 242" stroke={INK} strokeWidth="2.2" fill="none" />
      <path d="M211 219 Q212 232 218 242" stroke={INK} strokeWidth="2.2" fill="none" />
      <path d="M201 226 Q199 240 195 247 L203 248" stroke={INK} strokeWidth="2" fill="none" />
      <path d="M190 270 Q200 273 210 270" stroke={INK} strokeWidth="2.2" fill="none" />

      {/* high collar */}
      <path
        d="M124 352 L136 262 Q150 292 196 316 L200 378 Z"
        fill={CLOAK}
        stroke={INK}
        strokeWidth="3"
      />
      <path
        d="M276 352 L264 262 Q250 292 204 316 L200 378 Z"
        fill={CLOAK}
        stroke={INK}
        strokeWidth="3"
      />
      <path d="M136 262 Q150 292 196 316 L196 328 Q146 304 134 278 Z" fill={RED} />
      <path d="M264 262 Q250 292 204 316 L204 328 Q254 304 266 278 Z" fill={RED} />

      {/* headband with the rogue-ninja scratch */}
      <rect x="138" y="146" width="124" height="30" fill="#1d2230" stroke={INK} strokeWidth="3" />
      <rect
        x="160"
        y="141"
        width="80"
        height="40"
        rx="3"
        fill="#c9ccd3"
        stroke={INK}
        strokeWidth="3"
      />
      <g fill={INK}>
        <circle cx="166" cy="147" r="2" />
        <circle cx="234" cy="147" r="2" />
        <circle cx="166" cy="175" r="2" />
        <circle cx="234" cy="175" r="2" />
      </g>
      <path
        d="M198 162 C198 158 204 158 204 162 C204 168 192 168 192 161 C192 152 208 151 210 160 L214 171"
        stroke={INK}
        strokeWidth="2.6"
        fill="none"
      />
      <path d="M164 162 L236 160" stroke={INK} strokeWidth="3" />

      {/* bangs */}
      <path
        d="M140 136 Q134 200 142 262 Q146 290 158 308 Q154 250 158 204 Q162 168 174 146 Z"
        fill={INK}
      />
      <path
        d="M260 136 Q266 200 258 262 Q254 290 242 308 Q246 250 242 204 Q238 168 226 146 Z"
        fill={INK}
      />
      <path d="M150 120 Q200 100 250 120 L246 142 L154 142 Z" fill={INK} />
    </g>
  );
}

type EyeProps = {
  clipId: string;
  path: string;
  cx: number;
  variant: "tomoe" | "mangekyo";
};

function Eye({ clipId, path, cx, variant }: EyeProps) {
  return (
    <g>
      <path d={path} fill="#fff" />
      <g clipPath={`url(#${clipId})`}>
        <Sharingan
          x={cx - 7.5}
          y={204.5}
          width={15}
          height={15}
          variant={variant}
          spin
          className="animate-eye-glow"
        />
        <motion.rect
          x={cx - 16}
          y={200}
          width={32}
          height={22}
          fill={SKIN}
          style={{ originY: 0 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 0, 1, 0] }}
          transition={{
            duration: 5,
            times: [0, 0.92, 0.96, 1],
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </g>
    </g>
  );
}
