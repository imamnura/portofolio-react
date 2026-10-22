import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import type { Dictionary, Lang } from "../constants/dictionary";
import { getPageNumber, PAGE_PATH, type PageId } from "../constants/routes";
import { UchihaCrest } from "./uchiha/UchihaCrest";

export type NavLinkItem = { name: string; id: PageId };

type NavbarProps = {
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

const iconButton =
  "brutal-sm press flex h-10 w-10 items-center justify-center bg-card text-ink font-mono text-sm font-bold";

export function Navbar({
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
  const closeMenu = () => setMobileMenuOpen(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `brutal-sm press flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider ${
      isActive ? "bg-blood text-white" : "bg-card text-ink"
    }`;

  return (
    <nav
      aria-label={t.a11y.mainNav}
      className="sticky top-0 z-40 border-b-4 border-ink bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label={t.a11y.home}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <UchihaCrest className="h-10 w-auto transition-transform duration-300 group-hover:-rotate-12" />
          <span className="font-display text-xl uppercase leading-none tracking-tight text-ink sm:text-2xl">
            Imamnura<span className="text-blood">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={PAGE_PATH[link.id]} className={desktopLinkClass}>
              <span className="opacity-60" aria-hidden="true">
                {getPageNumber(link.id)}
              </span>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className={iconButton}
            aria-label="Toggle Language"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={iconButton}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="brutal-sm press hidden bg-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-paper sm:block"
          >
            {t.nav.contact}
          </button>
          <button
            type="button"
            className={`${iconButton} lg:hidden`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t-4 border-ink bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5 sm:px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={PAGE_PATH[link.id]}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `brutal-sm press flex items-center justify-between px-4 py-3 font-display text-xl uppercase ${
                      isActive ? "bg-blood text-white" : "bg-card text-ink"
                    }`
                  }
                >
                  {link.name}
                  <span className="font-jp text-lg font-black" aria-hidden="true">
                    {t.pages[link.id].kanji}
                  </span>
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  onOpenContact();
                  closeMenu();
                }}
                className="brutal-sm press mt-2 bg-ink px-4 py-3 font-mono text-sm font-bold uppercase tracking-wider text-paper"
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
