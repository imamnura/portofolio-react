import { fireEvent, render, screen } from "@testing-library/react";
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
  isScrolled: false,
  mobileMenuOpen: false,
  setMobileMenuOpen: vi.fn(),
  lang: "en" as const,
  setLang: vi.fn(),
  isDark: false,
  setIsDark: vi.fn(),
  navLinks,
  activeSection: null,
  onNavigate: vi.fn(),
  onGoHome: vi.fn(),
  t: DICT.en,
  onOpenContact: vi.fn(),
};

describe("Navbar", () => {
  it("renders nav links in desktop menu", () => {
    render(<Navbar {...defaultProps} />);
    const links = screen.getAllByRole("button", { name: "About" });
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the contact button", () => {
    render(<Navbar {...defaultProps} />);
    const contactBtns = screen.getAllByRole("button", { name: DICT.en.nav.contact });
    expect(contactBtns.length).toBeGreaterThan(0);
  });

  it("calls onOpenContact when contact button is clicked", () => {
    const onOpenContact = vi.fn();
    render(<Navbar {...defaultProps} onOpenContact={onOpenContact} />);
    const contactBtns = screen.getAllByRole("button", { name: DICT.en.nav.contact });
    fireEvent.click(contactBtns[0]);
    expect(onOpenContact).toHaveBeenCalled();
  });

  it("renders toggle language button", () => {
    render(<Navbar {...defaultProps} />);
    const langBtns = screen.getAllByRole("button", { name: /toggle language/i });
    expect(langBtns.length).toBeGreaterThan(0);
  });

  it("calls setLang with toggled value when language button is clicked", () => {
    const setLang = vi.fn();
    render(<Navbar {...defaultProps} lang="en" setLang={setLang} />);
    const langBtns = screen.getAllByRole("button", { name: /toggle language/i });
    fireEvent.click(langBtns[0]);
    expect(setLang).toHaveBeenCalledWith("id");
  });

  it("calls setLang with 'en' when current lang is 'id'", () => {
    const setLang = vi.fn();
    render(<Navbar {...defaultProps} lang="id" setLang={setLang} t={DICT.id} />);
    const langBtns = screen.getAllByRole("button", { name: /toggle language/i });
    fireEvent.click(langBtns[0]);
    expect(setLang).toHaveBeenCalledWith("en");
  });

  it("renders dark mode toggle button", () => {
    render(<Navbar {...defaultProps} />);
    const themeBtn = screen.getAllByRole("button", { name: /toggle theme/i });
    expect(themeBtn.length).toBeGreaterThan(0);
  });

  it("calls setIsDark with toggled value", () => {
    const setIsDark = vi.fn();
    render(<Navbar {...defaultProps} isDark={false} setIsDark={setIsDark} />);
    const themeBtn = screen.getAllByRole("button", { name: /toggle theme/i });
    fireEvent.click(themeBtn[0]);
    expect(setIsDark).toHaveBeenCalledWith(true);
  });

  it("renders hamburger menu button on mobile", () => {
    render(<Navbar {...defaultProps} />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  it("calls setMobileMenuOpen when hamburger is clicked", () => {
    const setMobileMenuOpen = vi.fn();
    render(<Navbar {...defaultProps} setMobileMenuOpen={setMobileMenuOpen} />);
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(setMobileMenuOpen).toHaveBeenCalledWith(true);
  });

  it("shows mobile menu links when mobileMenuOpen is true", () => {
    render(<Navbar {...defaultProps} mobileMenuOpen={true} />);
    const aboutLinks = screen.getAllByRole("button", { name: "About" });
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("calls onNavigate when a nav link is clicked", () => {
    const onNavigate = vi.fn();
    render(<Navbar {...defaultProps} onNavigate={onNavigate} />);
    fireEvent.click(screen.getAllByRole("button", { name: "About" })[0]);
    expect(onNavigate).toHaveBeenCalledWith("about");
  });

  it("calls onGoHome when logo is clicked", () => {
    const onGoHome = vi.fn();
    render(<Navbar {...defaultProps} onGoHome={onGoHome} />);
    fireEvent.click(screen.getByRole("button", { name: DICT.en.a11y.home }));
    expect(onGoHome).toHaveBeenCalled();
  });

  it("home link has correct aria-label", () => {
    render(<Navbar {...defaultProps} />);
    expect(screen.getByRole("button", { name: DICT.en.a11y.home })).toBeInTheDocument();
  });

  it("applies scrolled styles when isScrolled is true", () => {
    const { container } = render(<Navbar {...defaultProps} isScrolled={true} />);
    const nav = container.querySelector("nav");
    expect(nav?.className).toContain("backdrop-blur-lg");
  });
});
