import { motion } from "framer-motion";
import { Award, ChevronRight, GraduationCap, MapPin } from "lucide-react";
import type { Dictionary } from "../constants/dictionary";
import type { Certification } from "../types/portfolio";
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
    <section className="border-y-4 border-ink bg-paper-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.eduCert.eduTitle} icon={GraduationCap} />
          <div className="brutal bg-card p-6 sm:p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center border-[3px] border-ink bg-ink text-paper">
              <GraduationCap size={32} aria-hidden />
            </div>
            <h3 className="mb-2 font-display text-xl uppercase leading-tight text-ink wrap-break-word sm:text-2xl">
              Universitas Komputer Indonesia (UNIKOM)
            </h3>
            <p className="mb-6 inline-block bg-blood px-2 py-1 font-mono text-sm font-bold uppercase text-white">
              {t.about.eduVal}
            </p>
            <div className="flex flex-col gap-3 border-[3px] border-ink bg-paper p-4 font-mono text-sm font-bold text-ink sm:flex-row sm:items-center sm:justify-between">
              <span className="flex min-w-0 items-center gap-2">
                <MapPin size={16} className="shrink-0 text-blood" aria-hidden /> Bandung, ID
              </span>
              <span className="shrink-0">Agu 2012 - Apr 2017</span>
            </div>
            <div className="mt-6 flex items-baseline gap-2 border-t-4 border-dashed border-ink pt-6 font-mono text-ink">
              IPK
              <span className="font-display text-4xl text-blood">3.29</span>/ 4.00
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t.eduCert.certTitle} icon={Award} />
          <div className="brutal custom-scrollbar h-[min(440px,60vh)] overflow-y-auto bg-card p-3 sm:p-4">
            <ul className="m-0 list-none space-y-3 p-0">
              {certifications.map((cert, index) => (
                <li key={`${cert.title}-${cert.issuer}`}>
                  <button
                    type="button"
                    onClick={() => onSelectCert(cert)}
                    aria-label={`${t.a11y.viewCert}: ${cert.title}, ${cert.issuer}`}
                    className="group flex w-full cursor-pointer items-center gap-4 border-[3px] border-ink bg-paper p-3 text-left text-ink transition-colors hover:bg-blood hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-ink bg-ink font-mono text-sm font-bold text-paper group-hover:border-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold md:text-base">{cert.title}</span>
                      <span className="font-mono text-xs uppercase opacity-70">{cert.issuer}</span>
                    </span>
                    <ChevronRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
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
