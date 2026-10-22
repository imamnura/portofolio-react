import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { Dictionary } from "../constants/dictionary";
import { getNextPage, getPageNumber, PAGE_PATH, type PageId } from "../constants/routes";

type NextPageLinkProps = {
  current: PageId;
  t: Dictionary;
};

export function NextPageLink({ current, t }: NextPageLinkProps) {
  const next = getNextPage(current);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <Link
        to={PAGE_PATH[next]}
        className="group brutal press flex flex-col gap-4 bg-ink p-6 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <span>
          <span className="block font-mono text-xs font-bold uppercase tracking-widest text-blood">
            {t.pages.next} — {getPageNumber(next)}
          </span>
          <span className="mt-2 block font-display text-3xl uppercase sm:text-5xl">
            {t.nav[next]}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <span className="font-jp text-4xl font-black text-blood sm:text-5xl" aria-hidden="true">
            {t.pages[next].kanji}
          </span>
          <span className="flex h-14 w-14 items-center justify-center border-4 border-paper bg-blood transition-transform group-hover:translate-x-2">
            <ArrowRight size={28} aria-hidden />
          </span>
        </span>
      </Link>
    </div>
  );
}
