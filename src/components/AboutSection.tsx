import { motion } from "framer-motion";
import { Award, Briefcase, Code2, GraduationCap, Terminal } from "lucide-react";
import type { Profile } from "../types/portfolio";
import type { Dictionary, Lang } from "../constants/dictionary";
import { SectionHeading } from "./SectionHeading";

type AboutSectionProps = {
  profile: Profile;
  lang: Lang;
  t: Dictionary;
};

export function AboutSection({ profile, lang, t }: AboutSectionProps) {
  const stats = [
    { label: t.about.exp, value: t.about.expVal, icon: Briefcase },
    { label: t.about.spec, value: t.about.specVal, icon: Code2 },
    { label: t.about.edu, value: t.about.eduVal, icon: GraduationCap },
    { label: t.about.cert, value: t.about.certVal, icon: Award },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white dark:border-slate-700 rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-slate-700/50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

          <SectionHeading title={t.about.title} icon={Terminal} />
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl font-medium">
            {profile.summary[lang]}
          </p>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center"
              >
                <stat.icon
                  className="text-blue-500 mb-4 opacity-80"
                  size={28}
                />
                <div className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-lg font-black text-slate-800 dark:text-white">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
