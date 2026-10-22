export type PageId = "about" | "skills" | "experience" | "projects";

/** Display order of the content pages — also drives the "next scroll" link. */
export const PAGE_ORDER: readonly PageId[] = ["about", "skills", "experience", "projects"];

export const PAGE_PATH: Record<PageId, string> = {
  about: "/about",
  skills: "/skills",
  experience: "/experience",
  projects: "/projects",
};

export function getNextPage(id: PageId): PageId {
  const index = PAGE_ORDER.indexOf(id);
  return PAGE_ORDER[(index + 1) % PAGE_ORDER.length];
}

export function getPageNumber(id: PageId): string {
  return String(PAGE_ORDER.indexOf(id) + 1).padStart(2, "0");
}
