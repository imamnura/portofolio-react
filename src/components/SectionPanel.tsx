import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "../constants/dictionary";
import { slideInFromRight } from "../utils/motionVariants";

type SectionPanelProps = {
  isOpen: boolean;
  sectionKey: string | null;
  onClose: () => void;
  title: string;
  t: Dictionary;
  children: ReactNode;
};

export function SectionPanel({
  isOpen,
  sectionKey,
  onClose,
  title,
  t,
  children,
}: SectionPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && sectionKey && (
        <>
          <motion.button
            type="button"
            key={`${sectionKey}-backdrop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-0 z-30 hidden h-full w-[10%] cursor-pointer bg-transparent md:block"
            onClick={onClose}
            aria-label={t.a11y.closeSection}
          />

          <motion.aside
            key={sectionKey}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={slideInFromRight.initial}
            animate={slideInFromRight.animate}
            exit={slideInFromRight.exit}
            transition={slideInFromRight.transition}
            className="fixed right-0 top-0 z-30 flex h-full w-full flex-col border-l border-slate-200/80 bg-slate-50/95 shadow-[-12px_0_40px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95 dark:shadow-[-12px_0_40px_rgba(0,0,0,0.35)] md:w-[90%]"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200/80 px-4 py-3 pt-[4.75rem] dark:border-slate-700/80 sm:px-6 md:px-8">
              <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white sm:text-xl">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label={t.a11y.closeSection}
              >
                <X size={22} aria-hidden />
              </button>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto overscroll-contain">
              {children}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
