import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { getAboutStats } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import type { NavLinkItem } from "../components/Navbar";
import { Marquee } from "../components/uchiha/Marquee";
import { Sharingan } from "../components/uchiha/Sharingan";
import type { Dictionary } from "../constants/dictionary";
import { getPageNumber, PAGE_PATH } from "../constants/routes";
import type { Profile } from "../types/portfolio";
import { staggerContainer, stampIn } from "../utils/motionVariants";

type HomePageProps = {
  profile: Profile;
  t: Dictionary;
  navLinks: NavLinkItem[];
};

export function HomePage({ profile, t, navLinks }: HomePageProps) {
  const stats = getAboutStats(t);

  return (
    <>
      <HeroSection profile={profile} t={t} />
      <Marquee items={t.home.marquee} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block bg-ink px-2 py-1 font-jp text-sm font-black text-paper">
              忍道
            </span>
            <h2 className="font-display text-4xl uppercase leading-none tracking-tight text-ink sm:text-6xl">
              {t.home.pathTitle}
            </h2>
          </div>
          <p className="max-w-sm border-l-8 border-blood pl-4 font-medium text-ink-soft">
            {t.home.pathDesc}
          </p>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {navLinks.map((link) => (
            <motion.li key={link.id} variants={stampIn}>
              <Link
                to={PAGE_PATH[link.id]}
                className="group brutal press relative flex h-full min-h-72 flex-col overflow-hidden bg-card p-6"
              >
                <Sharingan
                  variant="mangekyo"
                  className="absolute -right-10 -top-10 h-32 w-32 opacity-0 transition-all duration-500 group-hover:rotate-180 group-hover:opacity-100"
                />
                <span className="text-stroke font-display text-6xl leading-none">
                  {getPageNumber(link.id)}
                </span>
                <span
                  className="mt-4 font-jp text-4xl font-black text-blood transition-transform duration-300 group-hover:-rotate-6"
                  aria-hidden="true"
                >
                  {t.pages[link.id].kanji}
                </span>
                <span className="mt-4 font-display text-2xl uppercase text-ink">{link.name}</span>
                <span className="mb-6 mt-2 text-sm font-medium text-ink-soft">
                  {t.pages[link.id].subtitle}
                </span>
                <span className="mt-auto flex items-center justify-between border-t-[3px] border-ink pt-4 font-mono text-xs font-bold uppercase tracking-wider text-ink group-hover:text-blood">
                  {t.home.open}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="border-y-4 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-mono text-sm font-bold uppercase tracking-[0.3em] text-blood">
            {t.home.statsTitle}
          </h2>
          <dl className="m-0 grid grid-cols-2 gap-px border-4 border-paper bg-paper lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3 bg-ink p-5 sm:p-6">
                <stat.icon size={26} className="text-blood" aria-hidden />
                <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-70">
                  {stat.label}
                </dt>
                <dd className="m-0 font-display text-lg uppercase leading-tight sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
