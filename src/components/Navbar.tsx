import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import type { Dictionary, Lang } from "../constants/dictionary";

export type NavLinkItem = { name: string; href: string };

type NavbarProps = {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  navLinks: NavLinkItem[];
  t: Dictionary;
  onOpenContact: () => void;
};

export function Navbar({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
  setLang,
  isDark,
  setIsDark,
  navLinks,
  t,
  onOpenContact,
}: NavbarProps) {
  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 flex justify-between items-center gap-3 relative z-10 min-h-[3.25rem] sm:min-h-0">
        <a
          href="#"
          aria-label={t.a11y.home}
          className="shrink-0 flex items-center text-2xl font-black text-slate-800 dark:text-white tracking-tighter hover:opacity-80 transition-opacity"
        >
          {/* Imam<span className="text-blue-600 dark:text-blue-400">.dev</span> */}
          <img
            src="/logo.svg"
            alt=""
            width={350}
            height={100}
            className="h-9 w-auto max-h-10 sm:h-10 sm:max-h-11 md:h-12 md:max-h-14 object-contain object-left"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
            <button
              type="button"
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group relative"
              aria-label="Toggle Language"
            >
              <Languages
                size={18}
                className="text-slate-600 dark:text-slate-300 group-hover:text-blue-600"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {lang.toUpperCase()}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-slate-600" />
              )}
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-blue-500/30"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle Language"
            className="font-bold text-sm text-slate-600 dark:text-slate-300"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 overflow-hidden z-40"
          >
            <div className="py-4 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 font-bold py-2 hover:text-blue-600 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg mx-4"
              >
                {t.nav.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
