import { ExperienceSection } from "../components/ExperienceSection";
import { NextPageLink } from "../components/NextPageLink";
import { PageHeader } from "../components/PageHeader";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Experience } from "../types/portfolio";

type ExperiencePageProps = {
  experiences: Experience[];
  lang: Lang;
  t: Dictionary;
};

export function ExperiencePage({ experiences, lang, t }: ExperiencePageProps) {
  return (
    <>
      <PageHeader id="experience" title={t.experience.title} t={t} />
      <ExperienceSection experiences={experiences} lang={lang} t={t} />
      <NextPageLink current="experience" t={t} />
    </>
  );
}
