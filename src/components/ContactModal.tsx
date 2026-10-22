import { motion } from "framer-motion";
import { CheckCircle, Send, X } from "lucide-react";
import type { FormEvent } from "react";
import type { Dictionary } from "../constants/dictionary";
import { Sharingan } from "./uchiha/Sharingan";

export type ContactStatus = "idle" | "submitting" | "success";

type ContactModalProps = {
  onClose: () => void;
  t: Dictionary;
  contactStatus: ContactStatus;
  onSubmit: (e: FormEvent) => void;
};

const labelClass = "mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-ink";
const fieldClass =
  "w-full border-[3px] border-ink bg-paper px-4 py-3 font-medium text-ink outline-none transition-shadow placeholder:text-ink-soft/60 focus:shadow-[4px_4px_0_0_var(--blood)] disabled:opacity-60";

export function ContactModal({ onClose, t, contactStatus, onSubmit }: ContactModalProps) {
  const isSubmitting = contactStatus === "submitting";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="halftone-red fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0b0b0b]/80 p-3 sm:p-4"
      onClick={() => {
        if (!isSubmitting) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={t.contactModal.title}
        initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.9, rotate: 2, opacity: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="brutal brutal-blood custom-scrollbar relative my-4 max-h-[min(100dvh-2rem,900px)] w-full max-w-xl overflow-y-auto bg-card p-6 sm:my-8 sm:p-8 md:p-10"
      >
        {!isSubmitting && (
          <button
            type="button"
            onClick={onClose}
            aria-label={t.contactModal.close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-paper text-ink transition-colors hover:bg-blood hover:text-white"
          >
            <X size={22} aria-hidden />
          </button>
        )}

        {contactStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="brutal mb-6 flex h-20 w-20 items-center justify-center bg-leaf text-white">
              <CheckCircle size={40} aria-hidden />
            </div>
            <h3 className="mb-3 font-display text-3xl uppercase text-ink">
              {t.contactModal.thankYou}
            </h3>
            <p className="text-lg font-medium text-ink-soft">{t.contactModal.success}</p>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 pr-10">
              <h3 className="mb-4 font-display text-3xl uppercase leading-none tracking-tight text-ink md:text-4xl">
                {t.contactModal.title}
              </h3>
              <p className="border-l-8 border-blood pl-4 text-sm font-medium leading-relaxed text-ink-soft md:text-base">
                {t.contactModal.desc}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  {t.contactModal.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className={fieldClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {t.contactModal.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  className={fieldClass}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  {t.contactModal.message}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className={`${fieldClass} custom-scrollbar resize-none`}
                  placeholder="Hello Imam, I have a project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="brutal press flex w-full items-center justify-center gap-3 bg-blood py-4 font-mono text-sm font-bold uppercase tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <Sharingan spin className="h-6 w-6" />
                    {t.contactModal.sending}
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden /> {t.contactModal.send}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
