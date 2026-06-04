import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactModal } from "../ContactModal";
import { DICT } from "../../constants/dictionary";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("ContactModal — idle state", () => {
  it("renders the modal title", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="idle"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByText(DICT.en.contactModal.title)).toBeInTheDocument();
  });

  it("renders name, email, and message fields", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="idle"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByLabelText(DICT.en.contactModal.name)).toBeInTheDocument();
    expect(screen.getByLabelText(DICT.en.contactModal.email)).toBeInTheDocument();
    expect(screen.getByLabelText(DICT.en.contactModal.message)).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", () => {
    const onSubmit = vi.fn((e) => e.preventDefault());
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="idle"
        onSubmit={onSubmit}
      />,
    );
    const form = screen.getByRole("button", { name: /send message/i }).closest("form")!;
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders the close button", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="idle"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: DICT.en.contactModal.close })).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <ContactModal
        onClose={onClose}
        t={DICT.en}
        contactStatus="idle"
        onSubmit={vi.fn()}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: DICT.en.contactModal.close }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("ContactModal — submitting state", () => {
  it("disables all form fields during submission", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="submitting"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByLabelText(DICT.en.contactModal.name)).toBeDisabled();
    expect(screen.getByLabelText(DICT.en.contactModal.email)).toBeDisabled();
    expect(screen.getByLabelText(DICT.en.contactModal.message)).toBeDisabled();
  });

  it("disables submit button during submission", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="submitting"
        onSubmit={vi.fn()}
      />,
    );
    const submitBtn = screen.getByRole("button", { name: new RegExp(DICT.en.contactModal.sending, "i") });
    expect(submitBtn).toBeDisabled();
  });

  it("hides the close button during submission", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="submitting"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.queryByRole("button", { name: DICT.en.contactModal.close })).not.toBeInTheDocument();
  });
});

describe("ContactModal — success state", () => {
  it("renders the thank-you message", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="success"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByText(DICT.en.contactModal.thankYou)).toBeInTheDocument();
    expect(screen.getByText(DICT.en.contactModal.success)).toBeInTheDocument();
  });

  it("does not render the form in success state", () => {
    render(
      <ContactModal
        onClose={vi.fn()}
        t={DICT.en}
        contactStatus="success"
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });
});
