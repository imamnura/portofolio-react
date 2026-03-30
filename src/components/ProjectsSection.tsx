import { motion } from "framer-motion";
import { ExternalLink, Globe, Layout } from "lucide-react";
import type { Project } from "../types/portfolio";
import type { Dictionary } from "../constants/dictionary";
import type { Lang } from "../constants/dictionary";
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
    <section id="projects" className="py-24 px-4 md:px-8 relative">
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
            <motion.div
              variants={fadeInUp}
              key={project.title}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              className={`group cursor-pointer relative rounded-[2rem] overflow-hidden shadow-lg ${project.shadow} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative h-full p-8 flex flex-col z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                    <Globe size={28} className="text-white" />
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-white/50 group-hover:text-white transition-colors cursor-pointer"
                  />
                </div>

                <h3 className="text-2xl font-black text-white mb-4 drop-shadow-md">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
