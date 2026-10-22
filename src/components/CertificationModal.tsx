import { motion } from "framer-motion";
import { Award, X } from "lucide-react";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Certification } from "../types/portfolio";

type CertificationModalProps = {
  cert: Certification;
  onClose: () => void;
  lang: Lang;
  t: Dictionary;
};

export function CertificationModal({ cert, onClose, lang, t }: CertificationModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="halftone-red fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0b0b0b]/80 p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
        initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.9, rotate: 2, opacity: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="brutal brutal-blood custom-scrollbar relative my-auto max-h-[min(100dvh-2rem,640px)] w-full max-w-lg overflow-y-auto bg-card p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.a11y.closeModal}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-paper text-ink transition-colors hover:bg-blood hover:text-white"
        >
          <X size={20} aria-hidden />
        </button>

        <div className="mb-6 flex h-16 w-16 items-center justify-center border-[3px] border-ink bg-blood text-white">
          <Award size={32} aria-hidden />
        </div>
        <h3 className="mb-3 pr-10 font-display text-2xl uppercase leading-tight text-ink">
          {cert.title}
        </h3>
        <p className="mb-6 inline-block bg-ink px-2 py-1 font-mono text-xs font-bold uppercase text-paper">
          {cert.issuer}
        </p>

        <div className="border-[3px] border-ink bg-paper p-5">
          <p className="font-medium leading-relaxed text-ink">
            {lang === "id" ? cert.descId : cert.descEn}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="brutal-sm press mt-8 w-full bg-ink py-3 font-mono text-sm font-bold uppercase tracking-wider text-paper"
        >
          {t.contactModal.close}
        </button>
      </motion.div>
    </motion.div>
  );
}
