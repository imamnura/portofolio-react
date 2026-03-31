import { motion } from "framer-motion";
import {
  Award,
  ChevronRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import type { Certification } from "../types/portfolio";
import type { Dictionary } from "../constants/dictionary";
import { SectionHeading } from "./SectionHeading";

type EducationCertSectionProps = {
  certifications: Certification[];
  t: Dictionary;
  onSelectCert: (cert: Certification) => void;
};

export function EducationCertSection({
  certifications,
  t,
  onSelectCert,
}: EducationCertSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-4 md:px-8 bg-slate-100/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.eduCert.eduTitle} icon={GraduationCap} />
          <div className="bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-3xl sm:rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 break-words">
              Universitas Komputer Indonesia (UNIKOM)
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-bold mb-4">
              {t.about.eduVal}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-sm sm:text-base">
              <span className="flex items-center gap-2 min-w-0">
                <MapPin size={16} className="shrink-0" /> Bandung, ID
              </span>
              <span className="shrink-0 sm:text-right">Agu 2012 - Apr 2017</span>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-300 font-medium text-lg">
                IPK:{" "}
                <span className="font-black text-slate-900 dark:text-white text-2xl ml-2">
                  3.29
                </span>{" "}
                / 4.00
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.eduCert.certTitle} icon={Award} />
          <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-3xl sm:rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm h-[min(400px,55vh)] sm:h-[400px] overflow-y-auto custom-scrollbar pr-2">
            <ul className="m-0 list-none space-y-3 p-0">
              {certifications.map((cert, index) => (
                <li key={`${cert.title}-${index}`}>
                  <button
                    type="button"
                    onClick={() => onSelectCert(cert)}
                    aria-label={`${t.a11y.viewCert}: ${cert.title}, ${cert.issuer}`}
                    className="group flex w-full cursor-pointer items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left text-slate-700 transition-all hover:border-blue-400 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-blue-500"
                  >
                    <div className="rounded-lg bg-white p-2 shadow-sm transition-transform group-hover:scale-110 dark:bg-slate-800">
                      <Award className="text-amber-500" size={20} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-sm font-bold transition-colors group-hover:text-blue-600 md:text-base dark:group-hover:text-blue-400">
                        {cert.title}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-slate-300 transition-colors group-hover:text-blue-500 dark:text-slate-600"
                      aria-hidden
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
