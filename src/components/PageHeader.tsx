import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router";
import type { Dictionary } from "../constants/dictionary";
import { getPageNumber, PAGE_ORDER, type PageId } from "../constants/routes";
import { Sharingan } from "./uchiha/Sharingan";

type PageHeaderProps = {
  id: PageId;
  title: string;
  t: Dictionary;
};

export function PageHeader({ id, title, t }: PageHeaderProps) {
  const { kanji, subtitle } = t.pages[id];
  const words = title.split(" ");

  return (
    <header className="halftone relative overflow-hidden border-b-4 border-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:py-16 lg:px-8">
        <div className="min-w-0">
          <nav className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest">
            <Link
              to="/"
              className="brutal-sm press inline-flex items-center gap-1.5 bg-card px-2.5 py-1.5 text-ink"
            >
              <ArrowLeft size={14} aria-hidden /> {t.pages.back}
            </Link>
            <span className="text-ink-soft" aria-hidden="true">
              /
            </span>
            <span className="bg-ink px-2 py-1 text-paper">{t.nav[id]}</span>
          </nav>

          <div className="mb-2 font-mono text-sm font-bold text-blood">
            {getPageNumber(id)} / {String(PAGE_ORDER.length).padStart(2, "0")}
          </div>
          <h1 className="font-display text-4xl uppercase leading-[0.9] tracking-tight text-ink wrap-break-word min-[400px]:text-5xl sm:text-6xl lg:text-8xl">
            {words.map((word, index) => (
              <Fragment key={word}>
                {index > 0 && " "}
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className={`inline-block ${index === words.length - 1 ? "text-blood" : ""}`}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              </Fragment>
            ))}
          </h1>
          <p className="mt-6 max-w-xl border-l-8 border-blood pl-4 text-lg font-medium text-ink-soft sm:text-xl">
            {subtitle}
          </p>
        </div>

        <motion.div
          className="relative mx-auto flex items-center justify-center md:mx-0"
          initial={{ scale: 1.4, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            delay: 0.45,
            type: "spring",
            stiffness: 300,
            damping: 16,
            opacity: { delay: 0.45, duration: 0.2 },
          }}
          aria-hidden="true"
        >
          <Sharingan spin className="absolute h-40 w-40 opacity-90 sm:h-52 sm:w-52" />
          <span className="brutal relative bg-card px-4 py-3 font-jp text-4xl font-black text-ink writing-vertical sm:text-5xl">
            {kanji}
          </span>
        </motion.div>
      </div>
    </header>
  );
}
