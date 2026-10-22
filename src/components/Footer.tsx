import { Globe, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import type { Dictionary } from "../constants/dictionary";
import { PAGE_PATH } from "../constants/routes";
import type { Profile } from "../types/portfolio";
import { GithubIcon as Github } from "./icons/GithubIcon";
import { LinkedinIcon as Linkedin } from "./icons/LinkedinIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import type { NavLinkItem } from "./Navbar";
import { UchihaCrest } from "./uchiha/UchihaCrest";

type FooterProps = {
  profile: Profile;
  t: Dictionary;
  navLinks: NavLinkItem[];
};

const socialClass =
  "flex h-12 w-12 items-center justify-center border-[3px] border-paper bg-ink text-paper transition-colors hover:bg-blood hover:text-white";

export function Footer({ profile, t, navLinks }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t-4 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="min-w-0 lg:col-span-2">
          <div className="mb-6 flex items-center gap-4">
            <UchihaCrest className="h-16 w-auto shrink-0" />
            <h3 className="font-display text-3xl uppercase leading-none wrap-break-word sm:text-4xl">
              {profile.name}
            </h3>
          </div>
          <p className="mb-8 max-w-sm font-medium leading-relaxed opacity-80">{t.footer.desc}</p>
          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.linkedInProfile}
              className={socialClass}
            >
              <Linkedin size={20} aria-hidden />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.githubProfile}
              className={socialClass}
            >
              <Github size={20} aria-hidden />
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.personalWebsite}
              className={socialClass}
            >
              <Globe size={20} aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 inline-block bg-blood px-2 py-1 font-mono text-sm font-bold uppercase tracking-widest text-white">
            {t.footer.contact}
          </h4>
          <ul className="space-y-4 font-medium">
            <li className="min-w-0">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3 break-all underline-offset-4 hover:underline"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-blood" aria-hidden />
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${profile.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.a11y.whatsappContact}: +${profile.wa}`}
                className="flex items-center gap-3 underline-offset-4 hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-blood" aria-hidden />+{profile.wa}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-blood" aria-hidden />
              <span>
                <span className="sr-only">{t.a11y.locationInfo}: </span>
                {profile.location}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 inline-block bg-blood px-2 py-1 font-mono text-sm font-bold uppercase tracking-widest text-white">
            {t.footer.nav}
          </h4>
          <ul className="space-y-3 font-display uppercase">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={PAGE_PATH[link.id]}
                  className="inline-flex items-baseline gap-3 transition-colors hover:text-blood"
                >
                  <span className="font-jp text-sm font-black text-blood" aria-hidden="true">
                    {t.pages[link.id].kanji}
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-4 border-paper/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 font-mono text-xs uppercase tracking-wider opacity-80 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {t.footer.rights}
          </p>
          <p>{t.footer.built}</p>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-6 font-mono text-[0.65rem] uppercase tracking-wider opacity-50 sm:px-6 lg:px-8">
          {t.footer.fanArt}
        </p>
      </div>
    </footer>
  );
}
