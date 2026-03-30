import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import type { Profile } from "../types/portfolio";
import type { Dictionary } from "../constants/dictionary";
import { HeroCodeVisual } from "./HeroCodeVisual";

type HeroSectionProps = {
  profile: Profile;
  t: Dictionary;
};

export function HeroSection({ profile, t }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            {t.hero.available}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            {t.hero.greeting} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">
              {profile.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
            {t.hero.role}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#experience"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              {t.hero.viewExp}{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={profile.cvUrl}
              download
              className="w-full sm:w-auto px-8 py-4 bg-blue-50/50 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-400 font-bold rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} /> {t.hero.downloadCV}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold rounded-2xl hover:scale-105 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Linkedin
                size={20}
                className="text-blue-600 dark:text-blue-400"
              />{" "}
              <span className="hidden sm:block">{t.hero.linkedin}</span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all"
            >
              <Mail size={24} />
            </a>
            <span className="flex items-center gap-2 text-sm font-semibold px-4 py-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
              <MapPin size={18} className="text-red-500" /> {profile.location}
            </span>
          </div>
        </motion.div>

        <HeroCodeVisual />
      </div>
    </section>
  );
}
