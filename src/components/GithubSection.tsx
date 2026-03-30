import { motion } from "framer-motion";
import { Github } from "lucide-react";
import type { Dictionary } from "../constants/dictionary";
import { SectionHeading } from "./SectionHeading";

type GithubSectionProps = {
  githubUrl: string;
  username: string;
  chartColor: string;
  isDark: boolean;
  t: Dictionary;
};

export function GithubSection({
  githubUrl,
  username,
  chartColor,
  isDark,
  t,
}: GithubSectionProps) {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading title={t.github.title} icon={Github} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden"
        >
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
            {t.github.desc}{" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline"
            >
              @{username}
            </a>
          </p>

          <div
            className={`w-full overflow-x-auto overflow-y-hidden custom-scrollbar pb-4 flex justify-center ${isDark ? "filter invert hue-rotate-180 brightness-90" : ""}`}
          >
            <img
              src={`https://ghchart.rshah.org/${chartColor}/${username}`}
              alt={`${username} GitHub contributions`}
              className="min-w-[700px] h-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
