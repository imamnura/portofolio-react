import { AnimatePresence } from "framer-motion";
import {
  type FormEvent,
  lazy,
  type ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { CertificationModal } from "./components/CertificationModal";
import { ContactModal, type ContactStatus } from "./components/ContactModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Navbar, type NavLinkItem } from "./components/Navbar";
import { PageTransition } from "./components/PageTransition";
import { ProjectModal } from "./components/ProjectModal";
import { Sharingan } from "./components/uchiha/Sharingan";
import { DATA, DICT, type Lang } from "./constants";
import { PAGE_ORDER, PAGE_PATH } from "./constants/routes";
import { HomePage } from "./pages/HomePage";
import type { Certification, Project } from "./types/portfolio";

// Content pages are split out so the home page ships a lighter first bundle.
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const SkillsPage = lazy(() =>
  import("./pages/SkillsPage").then((m) => ({ default: m.SkillsPage })),
);
const ExperiencePage = lazy(() =>
  import("./pages/ExperiencePage").then((m) => ({ default: m.ExperiencePage })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Sharingan spin className="h-20 w-20" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("id");
  const [isDark, setIsDark] = useState(false);

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");

  const t = DICT[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : "en";
  }, [lang]);

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

  const navLinks: NavLinkItem[] = PAGE_ORDER.map((id) => ({ id, name: t.nav[id] }));

  const page = (content: ReactNode) => (
    <PageTransition>
      <Suspense fallback={<PageLoader />}>{content}</Suspense>
    </PageTransition>
  );

  return (
    <div className="min-h-screen bg-paper font-body text-ink transition-colors duration-300">
      <Navbar
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

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={page(<HomePage profile={DATA.profile} t={t} navLinks={navLinks} />)}
            />
            <Route
              path={PAGE_PATH.about}
              element={page(
                <AboutPage
                  profile={DATA.profile}
                  certifications={DATA.certifications}
                  lang={lang}
                  t={t}
                  onSelectCert={setSelectedCert}
                />,
              )}
            />
            <Route
              path={PAGE_PATH.skills}
              element={page(<SkillsPage skills={DATA.skills} t={t} />)}
            />
            <Route
              path={PAGE_PATH.experience}
              element={page(<ExperiencePage experiences={DATA.experiences} lang={lang} t={t} />)}
            />
            <Route
              path={PAGE_PATH.projects}
              element={page(
                <ProjectsPage
                  profile={DATA.profile}
                  projects={DATA.projects}
                  lang={lang}
                  isDark={isDark}
                  t={t}
                  onSelectProject={setSelectedProject}
                />,
              )}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer profile={DATA.profile} t={t} navLinks={navLinks} />
      <FloatingWhatsApp waNumber={DATA.profile.wa} />

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
