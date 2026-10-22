import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Experience } from "../types/portfolio";

type ExperienceSectionProps = {
  experiences: Experience[];
  lang: Lang;
  t: Dictionary;
};

export function ExperienceSection({ experiences, lang, t }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative">
        <span className="stripes absolute bottom-0 left-3 top-2 w-2 sm:left-5" aria-hidden="true" />
        <ol className="relative m-0 list-none space-y-10 p-0 pl-10 sm:pl-14">
          {experiences.map((exp, index) => {
            const period = lang === "id" ? exp.periodId : exp.periodEn;
            const isActive = exp.periodEn.includes("Present");
            const highlights = lang === "id" ? exp.highlightsId : exp.highlightsEn;

            return (
              <motion.li
                key={`${exp.company}-${exp.periodEn}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 200, damping: 22 }}
                className="relative"
              >
                <span
                  className={`absolute left-[-2.35rem] top-6 h-6 w-6 rotate-45 border-[3px] border-ink sm:left-[-2.85rem] ${
                    isActive ? "bg-blood" : "bg-card"
                  }`}
                  aria-hidden="true"
                />

                <article className="brutal press bg-card">
                  <header className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-ink bg-paper-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink sm:px-6">
                    <span>
                      {t.experience.mission} {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-2">
                      <span>{period}</span>
                      <span
                        className={`px-2 py-0.5 ${isActive ? "bg-blood text-white" : "bg-ink text-paper"}`}
                      >
                        {isActive ? t.experience.active : t.experience.done}
                      </span>
                    </span>
                  </header>

                  <div className="p-5 sm:p-8">
                    <h2 className="font-display text-2xl uppercase leading-tight text-ink wrap-break-word sm:text-3xl">
                      {exp.role}
                    </h2>
                    <p className="mb-6 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-bold text-blood">
                      <span className="text-lg">{exp.company}</span>
                      <span className="flex items-center gap-1 font-mono text-xs uppercase text-ink-soft">
                        <MapPin size={14} aria-hidden /> {exp.location}
                      </span>
                    </p>

                    <ul className="m-0 list-none space-y-3 p-0">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="relative pl-7 font-medium leading-relaxed text-ink-soft before:absolute before:left-0 before:top-1 before:font-bold before:text-blood before:content-['✦']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
