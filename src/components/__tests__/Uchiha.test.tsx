import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DICT } from "../../constants/dictionary";
import { ItachiPoster } from "../uchiha/ItachiPoster";
import { Marquee } from "../uchiha/Marquee";
import { Sharingan } from "../uchiha/Sharingan";

describe("Sharingan", () => {
  it("renders three tomoe by default", () => {
    const { container } = render(<Sharingan />);
    // iris + ring + pupil circles, plus three tomoe paths
    expect(container.querySelectorAll("path")).toHaveLength(3);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("renders the three-blade Mangekyō variant", () => {
    const { container } = render(<Sharingan variant="mangekyo" />);
    expect(container.querySelectorAll("path")).toHaveLength(3);
    // Mangekyō has no tomoe ring: iris, pupil, red core
    expect(container.querySelectorAll("circle")).toHaveLength(3);
  });

  it("only spins when asked to", () => {
    const { container, rerender } = render(<Sharingan />);
    expect(container.querySelector(".animate-spin-slow")).toBeNull();
    rerender(<Sharingan spin />);
    expect(container.querySelector(".animate-spin-slow")).not.toBeNull();
  });
});

describe("Marquee", () => {
  it("duplicates items for a seamless loop and hides itself from screen readers", () => {
    const { container } = render(<Marquee items={["React", "Next.js"]} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
    expect(screen.getAllByText("React")).toHaveLength(2);
  });
});

describe("ItachiPoster", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("is an accessible button with a hint caption", () => {
    render(<ItachiPoster t={DICT.en} />);
    expect(screen.getByRole("button", { name: DICT.en.itachi.label })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(DICT.en.itachi.hint))).toBeInTheDocument();
  });

  it("releases the crow genjutsu on click, then settles", () => {
    vi.useFakeTimers();
    render(<ItachiPoster t={DICT.en} />);
    const poster = screen.getByRole("button", { name: DICT.en.itachi.label });

    expect(poster).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(poster);
    expect(poster).toHaveAttribute("aria-pressed", "true");

    act(() => {
      vi.advanceTimersByTime(1600);
    });
    expect(poster).toHaveAttribute("aria-pressed", "false");
  });
});
