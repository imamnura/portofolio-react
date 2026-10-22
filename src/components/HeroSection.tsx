import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router";
import type { Dictionary } from "../constants/dictionary";
import { PAGE_PATH } from "../constants/routes";
import type { Profile } from "../types/portfolio";
import { GithubIcon as Github } from "./icons/GithubIcon";
import { LinkedinIcon as Linkedin } from "./icons/LinkedinIcon";
import { ItachiPoster } from "./uchiha/ItachiPoster";

type HeroSectionProps = {
  profile: Profile;
  t: Dictionary;
};

const ctaBase =
  "brutal press inline-flex w-full items-center justify-center gap-2 px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider sm:w-auto";

export function HeroSection({ profile, t }: HeroSectionProps) {
  const nameWords = profile.name.split(" ");

  return (
    <section className="relative overflow-hidden border-b-4 border-ink">
      <span
        className="text-stroke pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none font-jp text-[11rem] font-black leading-none opacity-10 writing-vertical sm:text-[16rem]"
        aria-hidden="true"
      >
        うちは
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="brutal-sm mb-8 inline-flex items-center gap-3 bg-card px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping bg-blood opacity-75" />
              <span className="relative inline-flex h-3 w-3 bg-blood" />
            </span>
            {t.hero.available}
          </motion.div>

          <h1 className="mb-6">
            <span className="mb-3 block font-mono text-sm font-bold uppercase tracking-[0.3em] text-ink-soft">
              {t.hero.greeting}
            </span>
            <span className="block font-display text-5xl uppercase leading-[0.92] tracking-tight text-ink wrap-break-word sm:text-7xl xl:text-8xl">
              {nameWords.map((word, index) => {
                const isLast = index === nameWords.length - 1;
                return (
                  <Fragment key={word}>
                    {index > 0 && " "}
                    <span className="inline-block overflow-hidden align-bottom">
                      <motion.span
                        className={`inline-block ${isLast ? "-rotate-2 bg-blood px-2 text-white" : ""}`}
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                          delay: 0.4 + index * 0.1,
                          type: "spring",
                          stiffness: 240,
                          damping: 22,
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  </Fragment>
                );
              })}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <p className="animate-glitch mb-6 inline-block bg-ink px-3 py-1.5 font-mono text-base font-bold text-paper sm:text-lg">
              {t.hero.role}
            </p>
            <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-ink-soft">
              {t.hero.intro}
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Link to={PAGE_PATH.experience} className={`${ctaBase} group bg-blood text-white`}>
                {t.hero.viewExp}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <a href={profile.cvUrl} download className={`${ctaBase} bg-card text-ink`}>
                <Download size={18} aria-hidden /> {t.hero.downloadCV}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.hero.linkedin} — ${profile.name}`}
                className={`${ctaBase} bg-card text-ink`}
              >
                <Linkedin size={18} aria-hidden />
                <span aria-hidden="true">{t.hero.linkedin}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.a11y.githubProfile} (${profile.name})`}
                className="brutal-sm press flex h-12 w-12 items-center justify-center bg-card text-ink"
              >
                <Github size={22} aria-hidden />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`${t.a11y.sendEmail}: ${profile.email}`}
                className="brutal-sm press flex h-12 w-12 items-center justify-center bg-card text-ink"
              >
                <Mail size={22} aria-hidden />
              </a>
              <span className="brutal-sm flex items-center gap-2 bg-card px-3 py-2.5 font-mono text-xs font-bold uppercase text-ink">
                <MapPin size={16} className="shrink-0 text-blood" aria-hidden />
                <span className="sr-only">{t.a11y.locationInfo}: </span>
                {profile.location}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 160,
            damping: 16,
            opacity: { delay: 0.5, duration: 0.3 },
          }}
        >
          <ItachiPoster t={t} />
        </motion.div>
      </div>
    </section>
  );
}
