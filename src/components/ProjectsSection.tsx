import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Project } from "../types/portfolio";
import { staggerContainer, stampIn } from "../utils/motionVariants";

type ProjectsSectionProps = {
  projects: Project[];
  lang: Lang;
  t: Dictionary;
  onSelectProject: (project: Project) => void;
};

export function ProjectsSection({ projects, lang, t, onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={stampIn}>
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              aria-label={`${t.a11y.viewProject}: ${project.title}. ${t.projects.detailDesc}`}
              className="group brutal press flex h-full w-full cursor-pointer flex-col bg-card text-left"
            >
              <div className="relative h-44 overflow-hidden border-b-[3px] border-ink bg-ink">
                <img
                  src={project.images[0]}
                  alt=""
                  width={600}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-blood mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                  aria-hidden="true"
                />
                <span className="absolute left-0 top-0 border-b-[3px] border-r-[3px] border-ink bg-paper px-3 py-1 font-mono text-sm font-bold text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="mb-3 font-display text-xl uppercase leading-tight text-ink wrap-break-word sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mb-6 line-clamp-3 grow font-medium leading-relaxed text-ink-soft">
                  {lang === "id" ? project.descId : project.descEn}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-ink bg-paper px-2 py-1 font-mono text-[0.7rem] font-bold uppercase text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="border-2 border-ink bg-ink px-2 py-1 font-mono text-[0.7rem] font-bold text-paper">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <span className="mt-auto flex items-center justify-between border-t-[3px] border-ink pt-4 font-mono text-xs font-bold uppercase tracking-wider text-ink group-hover:text-blood">
                  {t.projects.view}
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
