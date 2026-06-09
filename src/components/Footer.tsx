import { Code2, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import type { Dictionary } from "../constants/dictionary";
import type { Profile } from "../types/portfolio";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import type { NavLinkItem } from "./Navbar";

type FooterProps = {
  profile: Profile;
  t: Dictionary;
  navLinks: NavLinkItem[];
  onNavigate?: (id: NavLinkItem["id"]) => void;
};

export function Footer({ profile, t, navLinks, onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 px-3 sm:px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">
        <div className="col-span-1 lg:col-span-2 min-w-0">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 break-words">
            {profile.name}
          </h3>
          <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed">
            {t.footer.desc}
          </p>
          <div className="flex gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.linkedInProfile}
              className="p-3 bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all border border-slate-800"
            >
              <Linkedin size={20} aria-hidden />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.githubProfile}
              className="p-3 bg-slate-900 rounded-xl hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all border border-slate-800"
            >
              <Github size={20} aria-hidden />
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.personalWebsite}
              className="p-3 bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all border border-slate-800"
            >
              <Globe size={20} aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase">{t.footer.contact}</h4>
          <ul className="space-y-4 font-medium">
            <li className="min-w-0">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3 hover:text-white hover:translate-x-1 transition-all break-all"
              >
                <Mail size={18} className="text-slate-500 shrink-0 mt-0.5" />{" "}
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${profile.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.a11y.whatsappContact}: +${profile.wa}`}
                className="flex items-center gap-3 hover:text-white hover:translate-x-1 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-500 shrink-0" aria-hidden />+
                {profile.wa}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-slate-500 shrink-0" aria-hidden />
              <span>
                <span className="sr-only">{t.a11y.locationInfo}: </span>
                {profile.location}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase">{t.footer.nav}</h4>
          <ul className="space-y-3 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-sm font-medium">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Built with <Code2 size={14} className="text-blue-500" aria-hidden /> in React & Tailwind
        </p>
      </div>
    </footer>
  );
}
