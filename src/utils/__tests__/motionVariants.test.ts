import { describe, expect, it } from "vitest";
import { fadeInUp, staggerContainer } from "../motionVariants";

describe("staggerContainer", () => {
  it("has a hidden state with opacity 0", () => {
    expect(staggerContainer.hidden).toEqual({ opacity: 0 });
  });

  it("has a show state with opacity 1", () => {
    expect(staggerContainer.show.opacity).toBe(1);
  });

  it("has staggerChildren in the show transition", () => {
    expect(staggerContainer.show.transition?.staggerChildren).toBe(0.1);
  });
});

describe("fadeInUp", () => {
  it("has a hidden state with opacity 0 and positive y offset", () => {
    expect(fadeInUp.hidden.opacity).toBe(0);
    expect(fadeInUp.hidden.y).toBeGreaterThan(0);
  });

  it("has a show state with opacity 1 and y offset of 0", () => {
    expect(fadeInUp.show.opacity).toBe(1);
    expect(fadeInUp.show.y).toBe(0);
  });

  it("uses spring transition in show state", () => {
    expect(fadeInUp.show.transition?.type).toBe("spring");
  });
});
