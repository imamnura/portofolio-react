import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import App from "../App";
import { DATA } from "../constants/data";
import { DICT } from "../constants/dictionary";

function renderApp(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

const t = DICT.id;

describe("App routing", () => {
  it("renders the home page with the hero and the four ninja-way cards", () => {
    renderApp("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(t.hero.greeting);
    expect(screen.getByRole("heading", { name: t.home.pathTitle })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: t.itachi.label })).toBeInTheDocument();
  });

  it.each([
    ["/about", t.about.title],
    ["/skills", t.skills.title],
    ["/experience", t.experience.title],
    ["/projects", t.projects.title],
  ])("renders %s with its page title", async (path, title) => {
    renderApp(path);
    // Content pages are lazy-loaded; the first dynamic import is slow under Vitest.
    const heading = await screen.findByRole("heading", { level: 1 }, { timeout: 5000 });
    expect(heading).toHaveTextContent(title);
  });

  it("redirects unknown paths home", async () => {
    renderApp("/does-not-exist");
    expect(await screen.findByRole("heading", { name: t.home.pathTitle })).toBeInTheDocument();
  });

  it("navigates to a page from the home cards", async () => {
    renderApp("/");
    const cards = screen.getByRole("heading", { name: t.home.pathTitle }).closest("section");
    fireEvent.click(within(cards as HTMLElement).getByRole("link", { name: /keahlian/i }));
    expect(
      await screen.findByRole("heading", { level: 1, name: t.skills.title }, { timeout: 3000 }),
    ).toBeInTheDocument();
  });

  it("switches language from the navbar", async () => {
    renderApp("/skills");
    fireEvent.click(screen.getByRole("button", { name: /toggle language/i }));
    expect(
      await screen.findByRole("heading", { level: 1, name: DICT.en.skills.title }),
    ).toBeInTheDocument();
  });

  it("opens the project modal from the projects page", async () => {
    renderApp("/projects");
    const first = DATA.projects[0];
    fireEvent.click(
      await screen.findByRole("button", {
        name: new RegExp(`${t.a11y.viewProject}: ${first.title}`),
      }),
    );
    expect(await screen.findByRole("dialog", { name: first.title })).toBeInTheDocument();
  });

  it("opens the contact modal from the navbar", async () => {
    renderApp("/");
    fireEvent.click(screen.getAllByRole("button", { name: t.nav.contact })[0]);
    expect(await screen.findByRole("dialog", { name: t.contactModal.title })).toBeInTheDocument();
  });
});
