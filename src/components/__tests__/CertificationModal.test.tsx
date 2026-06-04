import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CertificationModal } from "../CertificationModal";
import { DICT } from "../../constants/dictionary";
import type { Certification } from "../../types/portfolio";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const mockCert: Certification = {
  title: "React Advanced",
  issuer: "Test Issuer",
  descId: "Deskripsi dalam bahasa Indonesia",
  descEn: "Description in English",
};

describe("CertificationModal", () => {
  it("renders certification title", () => {
    render(
      <CertificationModal
        cert={mockCert}
        onClose={vi.fn()}
        lang="en"
        t={DICT.en}
      />,
    );
    expect(screen.getByText("React Advanced")).toBeInTheDocument();
  });

  it("renders issuer name", () => {
    render(
      <CertificationModal
        cert={mockCert}
        onClose={vi.fn()}
        lang="en"
        t={DICT.en}
      />,
    );
    expect(screen.getByText("Test Issuer")).toBeInTheDocument();
  });

  it("shows English description when lang is 'en'", () => {
    render(
      <CertificationModal
        cert={mockCert}
        onClose={vi.fn()}
        lang="en"
        t={DICT.en}
      />,
    );
    expect(screen.getByText("Description in English")).toBeInTheDocument();
  });

  it("shows Indonesian description when lang is 'id'", () => {
    render(
      <CertificationModal
        cert={mockCert}
        onClose={vi.fn()}
        lang="id"
        t={DICT.id}
      />,
    );
    expect(screen.getByText("Deskripsi dalam bahasa Indonesia")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <CertificationModal cert={mockCert} onClose={onClose} lang="en" t={DICT.en} />,
    );
    const closeBtn = screen.getByRole("button", { name: DICT.en.a11y.closeModal });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the bottom close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <CertificationModal cert={mockCert} onClose={onClose} lang="en" t={DICT.en} />,
    );
    const closeButtons = screen.getAllByRole("button");
    fireEvent.click(closeButtons[closeButtons.length - 1]);
    expect(onClose).toHaveBeenCalled();
  });

  it("close button has correct aria-label", () => {
    render(
      <CertificationModal
        cert={mockCert}
        onClose={vi.fn()}
        lang="en"
        t={DICT.en}
      />,
    );
    const closeBtn = screen.getByRole("button", { name: DICT.en.a11y.closeModal });
    expect(closeBtn).toBeInTheDocument();
  });
});
