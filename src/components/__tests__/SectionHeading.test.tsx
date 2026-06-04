import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "../SectionHeading";
import { Code2 } from "lucide-react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("SectionHeading", () => {
  it("renders the title text", () => {
    render(<SectionHeading title="Test Section" icon={Code2} />);
    expect(screen.getByText("Test Section")).toBeInTheDocument();
  });

  it("renders title as an h2 element", () => {
    render(<SectionHeading title="My Skills" icon={Code2} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("My Skills");
  });

  it("renders the icon container", () => {
    const { container } = render(<SectionHeading title="About" icon={Code2} />);
    const iconWrapper = container.querySelector('[aria-hidden="true"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  it("renders with different titles", () => {
    const { rerender } = render(<SectionHeading title="Skills" icon={Code2} />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    rerender(<SectionHeading title="Experience" icon={Code2} />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });
});
