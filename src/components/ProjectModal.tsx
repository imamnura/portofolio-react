import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, PlayCircle, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Project } from "../types/portfolio";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  lang: Lang;
  t: Dictionary;
};

export function ProjectModal({ project, onClose, lang, t }: ProjectModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-2xl sm:rounded-[2.5rem] shadow-2xl relative border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[min(100dvh,900px)] md:max-h-[90vh]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.a11y.closeModal}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md rounded-full transition-all"
        >
          <X size={24} aria-hidden />
        </button>

        <div className="relative w-full h-52 sm:h-64 md:h-[450px] shrink-0 bg-slate-100 dark:bg-slate-800 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={project.images[imgIndex]}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full h-full object-cover"
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              width={1200}
              height={630}
              decoding="async"
            />
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImg}
                aria-label={t.a11y.previousImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
              >
                <ChevronLeft size={24} aria-hidden />
              </button>
              <button
                type="button"
                onClick={nextImg}
                aria-label={t.a11y.nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
              >
                <ChevronRight size={24} aria-hidden />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((image, idx) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setImgIndex(idx)}
                    aria-label={`${t.a11y.goToSlide} ${idx + 1} ${t.a11y.slideOf} ${project.images.length}`}
                    aria-current={idx === imgIndex ? "true" : undefined}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === imgIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />
          <h3 className="absolute bottom-4 left-4 right-14 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10 md:right-auto text-2xl sm:text-3xl md:text-5xl font-black text-white drop-shadow-lg tracking-tight break-words pr-2">
            {project.title}
          </h3>
        </div>

        <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8 min-h-0 flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
          <div className="max-h-[140px] md:max-h-[160px] overflow-y-auto custom-scrollbar pr-4 text-slate-600 dark:text-slate-300">
            <p className="text-base md:text-lg leading-relaxed font-medium">
              {lang === "id" ? project.descId : project.descEn}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code2 size={16} /> {t.projects.techStack}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm rounded-xl border border-blue-100 dark:border-blue-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-xl transition-all shadow-slate-900/20"
              >
                <PlayCircle size={24} /> {t.projects.liveDemo}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
