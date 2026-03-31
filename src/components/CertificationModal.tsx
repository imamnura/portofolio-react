import { motion } from "framer-motion";
import { Award, X } from "lucide-react";
import type { Certification } from "../types/portfolio";
import type { Dictionary, Lang } from "../constants/dictionary";

type CertificationModalProps = {
  cert: Certification;
  onClose: () => void;
  lang: Lang;
  t: Dictionary;
};

export function CertificationModal({
  cert,
  onClose,
  lang,
  t,
}: CertificationModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-800 w-full max-w-lg max-h-[min(100dvh-2rem,640px)] overflow-y-auto custom-scrollbar rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-2xl relative border border-slate-100 dark:border-slate-700 my-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.contactModal.close}
          className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-400 rounded-full transition-colors"
        >
          <X size={20} aria-hidden />
        </button>

        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6">
          <Award size={32} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
          {cert.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-bold mb-6">
          {cert.issuer}
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {lang === "id" ? cert.descId : cert.descEn}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full mt-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
        >
          {t.contactModal.close}
        </button>
      </motion.div>
    </motion.div>
  );
}
