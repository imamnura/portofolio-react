import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
} from "lucide-react";
import type { SkillsMap } from "../types/portfolio";
import type { Dictionary } from "../constants/dictionary";
import { getTechIcon } from "../utils/techIcons";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";
import { SectionHeading } from "./SectionHeading";

type SkillsSectionProps = {
  skills: SkillsMap;
  t: Dictionary;
};

export function SkillsSection({ skills, t }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-24 px-3 sm:px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.skills.title} icon={Code2} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              variants={fadeInUp}
              key={category}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 sm:p-8 rounded-3xl sm:rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  {category.includes("Frontend") && (
                    <Layout className="text-blue-500" size={24} />
                  )}
                  {category.includes("Backend") && (
                    <Server className="text-green-500" size={24} />
                  )}
                  {category.includes("UI") && (
                    <Globe className="text-purple-500" size={24} />
                  )}
                  {category.includes("State") && (
                    <Database className="text-orange-500" size={24} />
                  )}
                  {category.includes("Testing") && (
                    <Code2 className="text-red-500" size={24} />
                  )}
                  {category.includes("Performance") && (
                    <Terminal className="text-teal-500" size={24} />
                  )}
                  {(category.includes("DevOps") ||
                    category.includes("Tools")) && (
                    <Settings className="text-slate-500" size={24} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => {
                  const iconUrl = getTechIcon(skill);
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                    >
                      {iconUrl ? (
                        <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5">
                          <img
                            src={iconUrl}
                            alt=""
                            width={20}
                            height={20}
                            className="h-full w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
