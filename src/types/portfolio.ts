import type { Lang } from "../constants/dictionary";

export type Profile = {
  name: string;
  location: string;
  phone: string;
  wa: string;
  email: string;
  linkedin: string;
  github: string;
  /** GitHub username for contribution chart (ghchart.rshah.org) */
  githubUsername: string;
  website: string;
  cvUrl: string;
  summary: Record<Lang, string>;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  periodId: string;
  periodEn: string;
  highlightsId: string[];
  highlightsEn: string[];
};

export type Project = {
  title: string;
  descId: string;
  descEn: string;
  tags: string[];
  gradient: string;
  shadow: string;
  demoUrl: string;
  images: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  descId: string;
  descEn: string;
};

export type SkillsMap = Record<string, string[]>;

export type SiteData = {
  profile: Profile;
  skills: SkillsMap;
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
};
