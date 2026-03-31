import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { Experience } from "../types/portfolio";
import type { Dictionary } from "../constants/dictionary";
import type { Lang } from "../constants/dictionary";
import { SectionHeading } from "./SectionHeading";

type ExperienceSectionProps = {
  experiences: Experience[];
  lang: Lang;
  t: Dictionary;
};

export function ExperienceSection({
  experiences,
  lang,
  t,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-24 px-3 sm:px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t.experience.title} icon={Briefcase} />

        <div className="space-y-8 mt-12 relative">
          <div className="absolute left-[27px] md:left-[140px] top-4 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-20" />

          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={`${exp.company}-${exp.periodEn}`}
              className="relative pl-16 md:pl-0 md:flex gap-12 group"
            >
              <div className="absolute left-0 md:relative md:w-[130px] shrink-0 pt-2 flex flex-col md:items-end z-10">
                <span className="text-sm font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0 inline-block">
                  {lang === "id"
                    ? exp.periodId.split(" - ")[0]
                    : exp.periodEn.split(" - ")[0]}
                </span>
                <span className="text-xs font-bold text-slate-400 mt-1 hidden md:block">
                  {lang === "id"
                    ? exp.periodId.split(" - ")[1]
                    : exp.periodEn.split(" - ")[1]}
                </span>
                <div className="absolute left-[20px] md:left-auto md:-right-[29px] top-6 md:top-3 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 group-hover:scale-150 group-hover:bg-blue-100 transition-all shadow-md" />
              </div>

              <div className="flex-1 bg-white dark:bg-slate-800 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden min-w-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-slate-700/30 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 break-words">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-6 break-words">
                    {exp.company} • {exp.location}
                  </div>

                  <ul className="m-0 list-none space-y-4 p-0">
                    {(lang === "id" ? exp.highlightsId : exp.highlightsEn).map(
                      (item, i) => (
                        <li
                          key={i}
                          className="relative pl-6 font-medium leading-relaxed text-slate-600 before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-slate-300 before:transition-colors before:content-[''] dark:text-slate-300 dark:before:bg-slate-600 group-hover:before:bg-blue-400 dark:group-hover:before:bg-blue-400"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
