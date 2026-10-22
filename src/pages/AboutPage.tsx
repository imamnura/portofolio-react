import { AboutSection } from "../components/AboutSection";
import { EducationCertSection } from "../components/EducationCertSection";
import { NextPageLink } from "../components/NextPageLink";
import { PageHeader } from "../components/PageHeader";
import type { Dictionary, Lang } from "../constants/dictionary";
import type { Certification, Profile } from "../types/portfolio";

type AboutPageProps = {
  profile: Profile;
  certifications: Certification[];
  lang: Lang;
  t: Dictionary;
  onSelectCert: (cert: Certification) => void;
};

export function AboutPage({ profile, certifications, lang, t, onSelectCert }: AboutPageProps) {
  return (
    <>
      <PageHeader id="about" title={t.about.title} t={t} />
      <AboutSection profile={profile} lang={lang} t={t} />
      <EducationCertSection certifications={certifications} t={t} onSelectCert={onSelectCert} />
      <div className="pt-16">
        <NextPageLink current="about" t={t} />
      </div>
    </>
  );
}
