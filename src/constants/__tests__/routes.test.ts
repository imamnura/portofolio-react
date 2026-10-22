import { describe, expect, it } from "vitest";
import { DICT } from "../dictionary";
import { getNextPage, getPageNumber, PAGE_ORDER, PAGE_PATH } from "../routes";

describe("routes", () => {
  it("has a path for every page", () => {
    for (const id of PAGE_ORDER) {
      expect(PAGE_PATH[id]).toBe(`/${id}`);
    }
  });

  it("numbers pages from 01 in display order", () => {
    expect(PAGE_ORDER.map(getPageNumber)).toEqual(["01", "02", "03", "04"]);
  });

  it("returns the following page and wraps around at the end", () => {
    expect(getNextPage("about")).toBe("skills");
    expect(getNextPage("experience")).toBe("projects");
    expect(getNextPage("projects")).toBe("about");
  });

  it("every page has nav text, kanji, and subtitle in both languages", () => {
    for (const lang of ["id", "en"] as const) {
      for (const id of PAGE_ORDER) {
        expect(DICT[lang].nav[id]).toBeTruthy();
        expect(DICT[lang].pages[id].kanji).toBeTruthy();
        expect(DICT[lang].pages[id].subtitle).toBeTruthy();
      }
    }
  });
});
