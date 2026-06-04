import { describe, it, expect } from "vitest";
import { DATA } from "../data";

describe("DATA.profile", () => {
  it("has all required profile fields", () => {
    expect(DATA.profile.name).toBeTruthy();
    expect(DATA.profile.email).toBeTruthy();
    expect(DATA.profile.linkedin).toBeTruthy();
    expect(DATA.profile.github).toBeTruthy();
    expect(DATA.profile.githubUsername).toBeTruthy();
    expect(DATA.profile.location).toBeTruthy();
    expect(DATA.profile.wa).toBeTruthy();
  });

  it("has a bilingual summary", () => {
    expect(DATA.profile.summary.id).toBeTruthy();
    expect(DATA.profile.summary.en).toBeTruthy();
  });

  it("email is a valid email format", () => {
    expect(DATA.profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("linkedin URL starts with https://linkedin.com", () => {
    expect(DATA.profile.linkedin).toMatch(/^https:\/\/linkedin\.com/);
  });

  it("github URL starts with https://github.com", () => {
    expect(DATA.profile.github).toMatch(/^https:\/\/github\.com/);
  });

  it("githubUsername matches the github URL", () => {
    expect(DATA.profile.github).toContain(DATA.profile.githubUsername);
  });
});

describe("DATA.skills", () => {
  it("has multiple skill categories", () => {
    expect(Object.keys(DATA.skills).length).toBeGreaterThan(0);
  });

  it("each skill category has at least one skill", () => {
    for (const [category, skills] of Object.entries(DATA.skills)) {
      expect(skills.length, `${category} should have at least 1 skill`).toBeGreaterThan(0);
    }
  });

  it("has Frontend and Backend categories", () => {
    expect(DATA.skills).toHaveProperty("Frontend");
    expect(DATA.skills).toHaveProperty("Backend");
  });
});

describe("DATA.experiences", () => {
  it("has at least one experience entry", () => {
    expect(DATA.experiences.length).toBeGreaterThan(0);
  });

  it("each experience has required fields", () => {
    DATA.experiences.forEach((exp, i) => {
      expect(exp.company, `experience[${i}].company`).toBeTruthy();
      expect(exp.role, `experience[${i}].role`).toBeTruthy();
      expect(exp.periodEn, `experience[${i}].periodEn`).toBeTruthy();
      expect(exp.periodId, `experience[${i}].periodId`).toBeTruthy();
      expect(exp.highlightsEn.length, `experience[${i}] should have English highlights`).toBeGreaterThan(0);
      expect(exp.highlightsId.length, `experience[${i}] should have Indonesian highlights`).toBeGreaterThan(0);
    });
  });

  it("highlights arrays have matching lengths per experience", () => {
    DATA.experiences.forEach((exp, i) => {
      expect(exp.highlightsEn.length, `experience[${i}] highlights length mismatch`).toBe(exp.highlightsId.length);
    });
  });
});

describe("DATA.projects", () => {
  it("has at least one project", () => {
    expect(DATA.projects.length).toBeGreaterThan(0);
  });

  it("each project has required fields", () => {
    DATA.projects.forEach((project, i) => {
      expect(project.title, `project[${i}].title`).toBeTruthy();
      expect(project.descEn, `project[${i}].descEn`).toBeTruthy();
      expect(project.descId, `project[${i}].descId`).toBeTruthy();
      expect(project.tags.length, `project[${i}] should have tags`).toBeGreaterThan(0);
      expect(project.images.length, `project[${i}] should have images`).toBeGreaterThan(0);
      expect(project.gradient, `project[${i}].gradient`).toBeTruthy();
      expect(project.demoUrl, `project[${i}].demoUrl`).toBeTruthy();
    });
  });

  it("project images are valid URLs or placeholders", () => {
    DATA.projects.forEach((project) => {
      project.images.forEach((img) => {
        expect(img).toMatch(/^https:\/\//);
      });
    });
  });
});

describe("DATA.certifications", () => {
  it("has at least one certification", () => {
    expect(DATA.certifications.length).toBeGreaterThan(0);
  });

  it("each certification has required fields", () => {
    DATA.certifications.forEach((cert, i) => {
      expect(cert.title, `cert[${i}].title`).toBeTruthy();
      expect(cert.issuer, `cert[${i}].issuer`).toBeTruthy();
      expect(cert.descEn, `cert[${i}].descEn`).toBeTruthy();
      expect(cert.descId, `cert[${i}].descId`).toBeTruthy();
    });
  });
});
