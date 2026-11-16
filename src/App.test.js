import { render, screen } from "@testing-library/react";
import HomePage from "./pages/Home";
import InProgressCard from "./components/InProgressCard";

beforeAll(() => {
    window.matchMedia =
        window.matchMedia ||
        (() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));
    window.scrollTo = () => {};
});

test("renders the main sections", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1, name: /jané booysen/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /things i’ve made/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "German: 3 out of 6 stars" })).toBeInTheDocument();
});

test("progress is calculated from the steps", () => {
    render(
        <InProgressCard
            project={{
                title: "Test",
                steps: [
                    { label: "a", status: "done" },
                    { label: "b", status: "done" },
                    { label: "c", status: "now" },
                    { label: "d", status: "next" },
                ],
            }}
        />
    );
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "2");
    expect(bar).toHaveAttribute("aria-valuemax", "4");
    expect(bar.firstChild).toHaveStyle({ width: "50%" });
});
