import { NextPageLink } from "../components/NextPageLink";
import { PageHeader } from "../components/PageHeader";
import { SkillsSection } from "../components/SkillsSection";
import type { Dictionary } from "../constants/dictionary";
import type { SkillsMap } from "../types/portfolio";

type SkillsPageProps = {
  skills: SkillsMap;
  t: Dictionary;
};

export function SkillsPage({ skills, t }: SkillsPageProps) {
  return (
    <>
      <PageHeader id="skills" title={t.skills.title} t={t} />
      <SkillsSection skills={skills} t={t} />
      <NextPageLink current="skills" t={t} />
    </>
  );
}
