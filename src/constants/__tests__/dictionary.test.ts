import { describe, it, expect } from "vitest";
import { DICT } from "../dictionary";

describe("DICT", () => {
  it("has both supported languages", () => {
    expect(DICT).toHaveProperty("id");
    expect(DICT).toHaveProperty("en");
  });

  const topLevelKeys = ["nav", "hero", "about", "skills", "experience", "projects", "github", "eduCert", "footer", "contactModal", "a11y"];

  topLevelKeys.forEach((key) => {
    it(`both languages have '${key}' section`, () => {
      expect(DICT.id).toHaveProperty(key);
      expect(DICT.en).toHaveProperty(key);
    });
  });

  it("nav section has all required keys in both languages", () => {
    const navKeys = ["about", "skills", "experience", "projects", "contact"];
    navKeys.forEach((key) => {
      expect(DICT.id.nav).toHaveProperty(key);
      expect(DICT.en.nav).toHaveProperty(key);
    });
  });

  it("hero section has all required keys in both languages", () => {
    const heroKeys = ["available", "greeting", "role", "viewExp", "downloadCV", "linkedin"];
    heroKeys.forEach((key) => {
      expect(DICT.id.hero).toHaveProperty(key);
      expect(DICT.en.hero).toHaveProperty(key);
    });
  });

  it("a11y section has all required accessibility keys in both languages", () => {
    const a11yKeys = ["home", "githubProfile", "sendEmail", "closeModal", "previousImage", "nextImage"];
    a11yKeys.forEach((key) => {
      expect(DICT.id.a11y).toHaveProperty(key);
      expect(DICT.en.a11y).toHaveProperty(key);
    });
  });

  it("all string values are non-empty", () => {
    const checkStrings = (obj: unknown, path: string) => {
      if (typeof obj === "string") {
        expect(obj.length, `${path} should not be empty`).toBeGreaterThan(0);
      } else if (typeof obj === "object" && obj !== null) {
        for (const [key, val] of Object.entries(obj)) {
          checkStrings(val, `${path}.${key}`);
        }
      }
    };
    checkStrings(DICT.id, "DICT.id");
    checkStrings(DICT.en, "DICT.en");
  });
});
