import { motion } from "framer-motion";
import { Award, Briefcase, Code2, GraduationCap } from "lucide-react";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Profile } from "../types/portfolio";
import { staggerContainer, stampIn } from "../utils/motionVariants";
import { UchihaCrest } from "./uchiha/UchihaCrest";

type AboutSectionProps = {
  profile: Profile;
  lang: Lang;
  t: Dictionary;
};

export function getAboutStats(t: Dictionary) {
  return [
    { label: t.about.exp, value: t.about.expVal, icon: Briefcase },
    { label: t.about.spec, value: t.about.specVal, icon: Code2 },
    { label: t.about.edu, value: t.about.eduVal, icon: GraduationCap },
    { label: t.about.cert, value: t.about.certVal, icon: Award },
  ];
}

export function AboutSection({ profile, lang, t }: AboutSectionProps) {
  const stats = getAboutStats(t);

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="brutal relative overflow-hidden bg-card p-6 sm:p-10 md:p-14"
      >
        <UchihaCrest
          className="pointer-events-none absolute -right-6 -top-6 h-40 w-auto rotate-12 opacity-15 sm:h-56"
          aria-hidden="true"
        />
        <span className="font-display text-7xl leading-none text-blood" aria-hidden="true">
          “
        </span>
        <p className="relative -mt-6 max-w-4xl text-lg font-medium leading-relaxed text-ink sm:text-xl md:text-2xl">
          {profile.summary[lang]}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={stampIn}>
            <div className="brutal press flex h-full min-w-0 flex-col bg-card p-4 sm:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center border-[3px] border-ink bg-blood text-white">
                <stat.icon size={22} aria-hidden />
              </div>
              <div className="mb-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-ink-soft sm:text-xs">
                {stat.label}
              </div>
              <div className="font-display text-base uppercase leading-tight text-ink wrap-break-word sm:text-xl">
                {stat.value}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
