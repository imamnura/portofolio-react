import { describe, it, expect } from "vitest";
import { getTechIcon } from "../techIcons";

describe("getTechIcon", () => {
  it("returns a URL for React", () => {
    const url = getTechIcon("React");
    expect(url).not.toBeNull();
    expect(url).toContain("react");
  });

  it("returns a URL for Next.js", () => {
    const url = getTechIcon("Next.js");
    expect(url).not.toBeNull();
    expect(url).toContain("nextjs");
  });

  it("returns a URL for Vue", () => {
    const url = getTechIcon("Vue");
    expect(url).not.toBeNull();
    expect(url).toContain("vuejs");
  });

  it("returns a URL for TypeScript", () => {
    const url = getTechIcon("TypeScript");
    expect(url).not.toBeNull();
    expect(url).toContain("typescript");
  });

  it("returns a URL for JavaScript", () => {
    const url = getTechIcon("JavaScript");
    expect(url).not.toBeNull();
    expect(url).toContain("javascript");
  });

  it("returns a URL for HTML 5", () => {
    const url = getTechIcon("HTML 5");
    expect(url).not.toBeNull();
    expect(url).toContain("html5");
  });

  it("returns a URL for CSS 3", () => {
    const url = getTechIcon("CSS 3");
    expect(url).not.toBeNull();
    expect(url).toContain("css3");
  });

  it("returns a URL for Node JS", () => {
    const url = getTechIcon("Node JS");
    expect(url).not.toBeNull();
    expect(url).toContain("nodejs");
  });

  it("returns a URL for Tailwind", () => {
    const url = getTechIcon("Tailwind");
    expect(url).not.toBeNull();
    expect(url).toContain("tailwindcss");
  });

  it("returns a URL for Git", () => {
    const url = getTechIcon("Git");
    expect(url).not.toBeNull();
    expect(url).toContain("git");
  });

  it("returns a URL for Docker", () => {
    const url = getTechIcon("Docker");
    expect(url).not.toBeNull();
    expect(url).toContain("docker");
  });

  it("returns a URL for Firebase", () => {
    const url = getTechIcon("Firebase");
    expect(url).not.toBeNull();
    expect(url).toContain("firebase");
  });

  it("is case-insensitive", () => {
    expect(getTechIcon("REACT")).toEqual(getTechIcon("react"));
    expect(getTechIcon("Docker")).toEqual(getTechIcon("DOCKER"));
  });

  it("returns null for unknown skill", () => {
    expect(getTechIcon("Unknown Skill XYZ")).toBeNull();
    expect(getTechIcon("")).toBeNull();
  });

  it("returns CDN URLs from jsdelivr or external providers", () => {
    const reactUrl = getTechIcon("React");
    const antDesignUrl = getTechIcon("Ant Design");
    expect(reactUrl).toMatch(/^https:\/\//);
    expect(antDesignUrl).toMatch(/^https:\/\//);
  });
});
