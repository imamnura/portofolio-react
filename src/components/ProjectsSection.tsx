import { motion } from "framer-motion";
import { ExternalLink, Globe, Layout } from "lucide-react";
import type { Project } from "../types/portfolio";
import type { Dictionary, Lang } from "../constants/dictionary";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";
import { SectionHeading } from "./SectionHeading";

type ProjectsSectionProps = {
  projects: Project[];
  lang: Lang;
  t: Dictionary;
  onSelectProject: (project: Project) => void;
};

export function ProjectsSection({
  projects,
  lang,
  t,
  onSelectProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 sm:py-24 px-3 sm:px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.projects.title} icon={Layout} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project) => (
            <motion.button
              type="button"
              variants={fadeInUp}
              key={project.title}
              onClick={() => onSelectProject(project)}
              aria-label={`${t.a11y.viewProject}: ${project.title}. ${t.projects.detailDesc}`}
              className={`group relative m-0 w-full cursor-pointer appearance-none rounded-3xl border-0 bg-transparent p-0 text-left shadow-lg sm:rounded-[2rem] ${project.shadow} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                aria-hidden
              />

              <div className="relative h-full p-5 sm:p-8 flex flex-col z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                    <Globe size={28} className="text-white" aria-hidden />
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-white/50 group-hover:text-white transition-colors pointer-events-none"
                    aria-hidden
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 drop-shadow-md break-words">
                  {project.title}
                </h3>

                <p className="text-white/90 font-medium mb-8 flex-grow leading-relaxed line-clamp-3">
                  {lang === "id" ? project.descId : project.descEn}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-black/20 text-white backdrop-blur-md text-xs font-bold tracking-wide rounded-lg border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1.5 bg-black/20 text-white backdrop-blur-md text-xs font-bold tracking-wide rounded-lg border border-white/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
