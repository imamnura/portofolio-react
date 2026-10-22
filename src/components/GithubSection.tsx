import { motion } from "framer-motion";
import type { Dictionary } from "../constants/dictionary";
import { GithubIcon } from "./icons/GithubIcon";
import { SectionHeading } from "./SectionHeading";

type GithubSectionProps = {
  githubUrl: string;
  username: string;
  chartColor: string;
  isDark: boolean;
  t: Dictionary;
};

export function GithubSection({ githubUrl, username, chartColor, isDark, t }: GithubSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <SectionHeading title={t.github.title} icon={GithubIcon} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="brutal overflow-hidden bg-card p-5 sm:p-8"
      >
        <p className="mb-6 font-medium text-ink-soft">
          {t.github.desc}{" "}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink px-1.5 py-0.5 font-mono font-bold text-paper hover:bg-blood hover:text-white"
          >
            @{username}
          </a>
        </p>

        <div
          className={`custom-scrollbar flex w-full max-w-full touch-pan-x justify-start overflow-x-auto overflow-y-hidden border-[3px] border-ink bg-white p-3 pb-4 sm:justify-center ${isDark ? "invert hue-rotate-180" : ""}`}
        >
          <img
            src={`https://ghchart.rshah.org/${chartColor}/${username}`}
            alt={`${username} — ${t.a11y.githubContributionChart}`}
            width={700}
            height={100}
            className="mx-auto h-auto min-w-175 shrink-0 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </section>
  );
}
