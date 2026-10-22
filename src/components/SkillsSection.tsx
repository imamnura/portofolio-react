import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  type LucideIcon,
  Server,
  Settings,
  Terminal,
} from "lucide-react";
import type { Dictionary } from "../constants/dictionary";
import type { SkillsMap } from "../types/portfolio";
import { staggerContainer, stampIn } from "../utils/motionVariants";
import { getTechIcon } from "../utils/techIcons";

type SkillsSectionProps = {
  skills: SkillsMap;
  t: Dictionary;
};

function getCategoryIcon(category: string): LucideIcon {
  if (category.includes("Frontend")) return Layout;
  if (category.includes("Backend")) return Server;
  if (category.includes("UI")) return Globe;
  if (category.includes("State")) return Database;
  if (category.includes("Performance")) return Terminal;
  if (category.includes("DevOps") || category.includes("Tools")) return Settings;
  return Code2;
}

export function SkillsSection({ skills, t }: SkillsSectionProps) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {Object.entries(skills).map(([category, skillList], index) => {
          const Icon = getCategoryIcon(category);
          return (
            <motion.article key={category} variants={stampIn} className="brutal bg-card">
              <header className="flex items-center justify-between gap-3 border-b-[3px] border-ink bg-ink px-4 py-3 text-paper sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-paper bg-blood text-white">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h2 className="min-w-0 font-display text-lg uppercase leading-tight sm:text-xl">
                    {category}
                  </h2>
                </div>
                <span className="shrink-0 font-mono text-xs font-bold uppercase tracking-wider opacity-80">
                  {String(index + 1).padStart(2, "0")} · {skillList.length} {t.skills.jutsu}
                </span>
              </header>
              <ul className="m-0 flex list-none flex-wrap gap-3 p-4 sm:p-6">
                {skillList.map((skill) => {
                  const iconUrl = getTechIcon(skill);
                  return (
                    <li
                      key={skill}
                      className="brutal-sm press flex items-center gap-2 bg-paper px-3 py-2 text-sm font-bold text-ink"
                    >
                      {iconUrl ? (
                        <span className="flex h-6 w-6 items-center justify-center border-2 border-ink bg-white p-0.5">
                          <img
                            src={iconUrl}
                            alt=""
                            width={20}
                            height={20}
                            className="h-full w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                      ) : (
                        <span className="h-3 w-3 rotate-45 bg-blood" aria-hidden="true" />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
