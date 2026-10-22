import { GithubSection } from "../components/GithubSection";
import { NextPageLink } from "../components/NextPageLink";
import { PageHeader } from "../components/PageHeader";
import { ProjectsSection } from "../components/ProjectsSection";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Profile, Project } from "../types/portfolio";

const GITHUB_CHART_COLOR = "D10F1F";

type ProjectsPageProps = {
  profile: Profile;
  projects: Project[];
  lang: Lang;
  isDark: boolean;
  t: Dictionary;
  onSelectProject: (project: Project) => void;
};

export function ProjectsPage({
  profile,
  projects,
  lang,
  isDark,
  t,
  onSelectProject,
}: ProjectsPageProps) {
  return (
    <>
      <PageHeader id="projects" title={t.projects.title} t={t} />
      <ProjectsSection projects={projects} lang={lang} t={t} onSelectProject={onSelectProject} />
      <GithubSection
        githubUrl={profile.github}
        username={profile.githubUsername}
        chartColor={GITHUB_CHART_COLOR}
        isDark={isDark}
        t={t}
      />
      <NextPageLink current="projects" t={t} />
    </>
  );
}
