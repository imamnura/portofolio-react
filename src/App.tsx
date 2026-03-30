import { useState, useEffect, useCallback, type FormEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { DATA, DICT, type Lang } from "./constants";
import type { Certification, Project } from "./types/portfolio";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { GithubSection } from "./components/GithubSection";
import { EducationCertSection } from "./components/EducationCertSection";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { CertificationModal } from "./components/CertificationModal";
import {
  ContactModal,
  type ContactStatus,
} from "./components/ContactModal";

const GITHUB_CHART_COLOR = "2563EB";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("id");
  const [isDark, setIsDark] = useState(false);

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");

  const t = DICT[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleContactSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setContactStatus("submitting");
    window.setTimeout(() => {
      setContactStatus("success");
      window.setTimeout(() => {
        setIsContactModalOpen(false);
        window.setTimeout(() => setContactStatus("idle"), 300);
      }, 3000);
    }, 1500);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors duration-300 selection:bg-blue-200 selection:text-blue-900 sf-pro-font">
      <FloatingWhatsApp waNumber={DATA.profile.wa} />
      <BackgroundBlobs />

      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        navLinks={navLinks}
        t={t}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main className="relative z-10">
        <HeroSection profile={DATA.profile} t={t} />
        <AboutSection profile={DATA.profile} lang={lang} t={t} />
        <SkillsSection skills={DATA.skills} t={t} />
        <ExperienceSection
          experiences={DATA.experiences}
          lang={lang}
          t={t}
        />
        <ProjectsSection
          projects={DATA.projects}
          lang={lang}
          t={t}
          onSelectProject={setSelectedProject}
        />
        <GithubSection
          githubUrl={DATA.profile.github}
          username={DATA.profile.githubUsername}
          chartColor={GITHUB_CHART_COLOR}
          isDark={isDark}
          t={t}
        />
        <EducationCertSection
          certifications={DATA.certifications}
          t={t}
          onSelectCert={setSelectedCert}
        />
      </main>

      <Footer profile={DATA.profile} t={t} navLinks={navLinks} />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.title}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            lang={lang}
            t={t}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCert && (
          <CertificationModal
            key={selectedCert.title}
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
            lang={lang}
            t={t}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal
            key="contact"
            onClose={() => {
              if (contactStatus !== "submitting") setIsContactModalOpen(false);
            }}
            t={t}
            contactStatus={contactStatus}
            onSubmit={handleContactSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
