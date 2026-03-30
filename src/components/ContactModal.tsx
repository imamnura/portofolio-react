import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, X } from "lucide-react";
import type { Dictionary } from "../constants/dictionary";

export type ContactStatus = "idle" | "submitting" | "success";

type ContactModalProps = {
  onClose: () => void;
  t: Dictionary;
  contactStatus: ContactStatus;
  onSubmit: (e: FormEvent) => void;
};

export function ContactModal({
  onClose,
  t,
  contactStatus,
  onSubmit,
}: ContactModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto"
      onClick={() => {
        if (contactStatus !== "submitting") onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-800 w-full max-w-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border border-slate-100 dark:border-slate-700 my-8"
      >
        {contactStatus !== "submitting" && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        )}

        {contactStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
              {t.contactModal.thankYou}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              {t.contactModal.success}
            </p>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                {t.contactModal.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm md:text-base">
                {t.contactModal.desc}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  {t.contactModal.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  disabled={contactStatus === "submitting"}
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800 dark:text-white font-medium disabled:opacity-60"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  {t.contactModal.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  disabled={contactStatus === "submitting"}
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800 dark:text-white font-medium disabled:opacity-60"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  {t.contactModal.message}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  disabled={contactStatus === "submitting"}
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-slate-800 dark:text-white font-medium custom-scrollbar disabled:opacity-60"
                  placeholder="Hello Imam, I have a project..."
                />
              </div>

              <button
                type="submit"
                disabled={contactStatus === "submitting"}
                className="w-full pt-2 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {contactStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.contactModal.sending}
                  </>
                ) : (
                  <>
                    <Send size={18} /> {t.contactModal.send}
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
