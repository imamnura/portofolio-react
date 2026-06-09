import { AnimatePresence } from "framer-motion";
import { type FormEvent, useCallback, useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { CertificationModal } from "./components/CertificationModal";
import { ContactModal, type ContactStatus } from "./components/ContactModal";
import { EducationCertSection } from "./components/EducationCertSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { GithubSection } from "./components/GithubSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar, type SectionId } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { ProjectsSection } from "./components/ProjectsSection";
import { SectionPanel } from "./components/SectionPanel";
import { SkillsSection } from "./components/SkillsSection";
import { DATA, DICT, type Lang } from "./constants";
import type { Certification, Project } from "./types/portfolio";

const GITHUB_CHART_COLOR = "2563EB";

function getSectionTitle(id: SectionId, dict: (typeof DICT)[Lang]) {
  switch (id) {
    case "about":
      return dict.about.title;
    case "skills":
      return dict.skills.title;
    case "experience":
      return dict.experience.title;
    case "projects":
      return dict.projects.title;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("id");
  const [isDark, setIsDark] = useState(false);

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");

  const t = DICT[lang];
  const isPanelOpen = activeSection !== null;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : "en";
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPanelOpen]);

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

  const handleNavigate = useCallback((id: SectionId) => {
    setActiveSection(id);
  }, []);

  const handleGoHome = useCallback(() => {
    setActiveSection(null);
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: t.nav.about, id: "about" as const },
    { name: t.nav.skills, id: "skills" as const },
    { name: t.nav.experience, id: "experience" as const },
    { name: t.nav.projects, id: "projects" as const },
  ];

  const sectionTitle = activeSection !== null ? getSectionTitle(activeSection, t) : "";

  const renderPanelContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <>
            <AboutSection profile={DATA.profile} lang={lang} t={t} />
            <EducationCertSection
              certifications={DATA.certifications}
              t={t}
              onSelectCert={setSelectedCert}
            />
          </>
        );
      case "skills":
        return <SkillsSection skills={DATA.skills} t={t} />;
      case "experience":
        return <ExperienceSection experiences={DATA.experiences} lang={lang} t={t} />;
      case "projects":
        return (
          <>
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors duration-300 selection:bg-blue-200 selection:text-blue-900 sf-pro-font">
      <FloatingWhatsApp waNumber={DATA.profile.wa} />
      <BackgroundBlobs />

      <Navbar
        isScrolled={isPanelOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onGoHome={handleGoHome}
        t={t}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main className="relative z-10 h-full">
        <HeroSection
          profile={DATA.profile}
          t={t}
          onViewExperience={() => handleNavigate("experience")}
        />

        <SectionPanel
          isOpen={isPanelOpen}
          sectionKey={activeSection}
          onClose={handleGoHome}
          title={sectionTitle}
          t={t}
        >
          {renderPanelContent()}
        </SectionPanel>
      </main>

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
