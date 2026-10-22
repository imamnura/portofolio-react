import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { DICT } from "../../constants/dictionary";
import { Navbar } from "../Navbar";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const navLinks = [
  { name: "About", id: "about" as const },
  { name: "Skills", id: "skills" as const },
];

const defaultProps = {
  mobileMenuOpen: false,
  setMobileMenuOpen: vi.fn(),
  lang: "en" as const,
  setLang: vi.fn(),
  isDark: false,
  setIsDark: vi.fn(),
  navLinks,
  t: DICT.en,
  onOpenContact: vi.fn(),
};

function renderNavbar(props: Partial<typeof defaultProps> = {}, initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar {...defaultProps} {...props} />
    </MemoryRouter>,
  );
}

describe("Navbar", () => {
  it("renders nav links pointing at their pages", () => {
    renderNavbar();
    const about = screen.getAllByRole("link", { name: /about/i })[0];
    expect(about).toHaveAttribute("href", "/about");
    expect(screen.getAllByRole("link", { name: /skills/i })[0]).toHaveAttribute("href", "/skills");
  });

  it("marks the link of the current page as active", () => {
    renderNavbar({}, "/skills");
    const skills = screen.getAllByRole("link", { name: /skills/i })[0];
    expect(skills).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByRole("link", { name: /about/i })[0]).not.toHaveAttribute("aria-current");
  });

  it("renders the contact button", () => {
    renderNavbar();
    expect(screen.getAllByRole("button", { name: DICT.en.nav.contact }).length).toBeGreaterThan(0);
  });

  it("calls onOpenContact when contact button is clicked", () => {
    const onOpenContact = vi.fn();
    renderNavbar({ onOpenContact });
    fireEvent.click(screen.getAllByRole("button", { name: DICT.en.nav.contact })[0]);
    expect(onOpenContact).toHaveBeenCalled();
  });

  it("calls setLang with 'id' when current lang is 'en'", () => {
    const setLang = vi.fn();
    renderNavbar({ setLang });
    fireEvent.click(screen.getByRole("button", { name: /toggle language/i }));
    expect(setLang).toHaveBeenCalledWith("id");
  });

  it("calls setLang with 'en' when current lang is 'id'", () => {
    const setLang = vi.fn();
    render(
      <MemoryRouter>
        <Navbar {...defaultProps} lang="id" setLang={setLang} t={DICT.id} />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole("button", { name: /toggle language/i }));
    expect(setLang).toHaveBeenCalledWith("en");
  });

  it("shows the active language on the toggle", () => {
    renderNavbar();
    expect(screen.getByRole("button", { name: /toggle language/i })).toHaveTextContent("EN");
  });

  it("calls setIsDark with toggled value", () => {
    const setIsDark = vi.fn();
    renderNavbar({ setIsDark });
    fireEvent.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(setIsDark).toHaveBeenCalledWith(true);
  });

  it("calls setMobileMenuOpen when hamburger is clicked", () => {
    const setMobileMenuOpen = vi.fn();
    renderNavbar({ setMobileMenuOpen });
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(setMobileMenuOpen).toHaveBeenCalledWith(true);
  });

  it("shows mobile menu links when mobileMenuOpen is true", () => {
    renderNavbar({ mobileMenuOpen: true });
    expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThanOrEqual(2);
  });

  it("closes the mobile menu after picking a link", () => {
    const setMobileMenuOpen = vi.fn();
    renderNavbar({ mobileMenuOpen: true, setMobileMenuOpen });
    const links = screen.getAllByRole("link", { name: /about/i });
    fireEvent.click(links[links.length - 1]);
    expect(setMobileMenuOpen).toHaveBeenCalledWith(false);
  });

  it("logo links home with an accessible label", () => {
    renderNavbar();
    expect(screen.getByRole("link", { name: DICT.en.a11y.home })).toHaveAttribute("href", "/");
  });

  it("exposes a labelled navigation landmark", () => {
    renderNavbar();
    expect(screen.getByRole("navigation", { name: DICT.en.a11y.mainNav })).toBeInTheDocument();
  });
});
