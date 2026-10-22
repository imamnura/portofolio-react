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

const navButton =
  "absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center border-[3px] border-[#0b0b0b] bg-[#f3ede1] text-[#0b0b0b] transition-colors hover:bg-blood hover:text-white";

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
      className="halftone-red fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0b0b0b]/85 p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.9, rotate: 2, opacity: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="brutal brutal-blood relative flex max-h-[min(100dvh-1.5rem,900px)] w-full max-w-5xl flex-col overflow-hidden bg-card"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.a11y.closeModal}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center border-[3px] border-[#0b0b0b] bg-blood text-white transition-transform hover:rotate-90"
        >
          <X size={24} aria-hidden />
        </button>

        <div className="group relative h-52 w-full shrink-0 overflow-hidden border-b-4 border-ink bg-[#0b0b0b] sm:h-72 md:h-[420px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={project.images[imgIndex]}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute h-full w-full object-cover"
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
                className={`${navButton} left-3`}
              >
                <ChevronLeft size={24} aria-hidden />
              </button>
              <button
                type="button"
                onClick={nextImg}
                aria-label={t.a11y.nextImage}
                className={`${navButton} right-3`}
              >
                <ChevronRight size={24} aria-hidden />
              </button>

              <div className="absolute bottom-4 right-4 flex gap-2">
                {project.images.map((image, idx) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setImgIndex(idx)}
                    aria-label={`${t.a11y.goToSlide} ${idx + 1} ${t.a11y.slideOf} ${project.images.length}`}
                    aria-current={idx === imgIndex ? "true" : undefined}
                    className={`h-3.5 w-3.5 border-2 border-[#0b0b0b] transition-colors ${idx === imgIndex ? "bg-blood" : "bg-[#f3ede1] hover:bg-blood/60"}`}
                  />
                ))}
              </div>
            </>
          )}

          <h3 className="absolute bottom-4 left-4 max-w-[75%] bg-[#0b0b0b] px-3 py-1.5 font-display text-xl uppercase leading-tight text-[#f3ede1] wrap-break-word sm:text-3xl md:text-4xl">
            {project.title}
          </h3>
        </div>

        <div className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-5 sm:p-8">
          <p className="text-base font-medium leading-relaxed text-ink md:text-lg">
            {lang === "id" ? project.descId : project.descEn}
          </p>

          <div className="flex flex-col justify-between gap-6 border-t-4 border-dashed border-ink pt-6 md:flex-row md:items-end">
            <div className="flex-1">
              <h4 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
                <Code2 size={16} aria-hidden /> {t.projects.techStack}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="brutal-sm bg-paper px-3 py-1.5 font-mono text-xs font-bold uppercase text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal press inline-flex w-full shrink-0 items-center justify-center gap-3 bg-blood px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white md:w-auto"
            >
              <PlayCircle size={22} aria-hidden /> {t.projects.liveDemo}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
