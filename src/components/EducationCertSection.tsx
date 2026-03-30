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
    <section className="py-24 px-4 md:px-8 bg-slate-100/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.eduCert.eduTitle} icon={GraduationCap} />
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Universitas Komputer Indonesia (UNIKOM)
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-bold mb-4">
              {t.about.eduVal}
            </p>
            <div className="flex justify-between items-center font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Bandung, ID
              </span>
              <span>Agu 2012 - Apr 2017</span>
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
          <div className="bg-white dark:bg-slate-800 p-4 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm h-[400px] overflow-y-auto custom-scrollbar pr-2">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={`${cert.title}-${index}`}
                  onClick={() => onSelectCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelectCert(cert);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer flex items-center gap-4 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <Award className="text-amber-500" size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                      {cert.title}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors"
                  />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
