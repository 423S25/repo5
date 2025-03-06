import { render, screen, fireEvent } from "@testing-library/react";
import HelpPage from "../help/page";

describe("HelpPage", () => {
  test("renders the help page title", () => {
    render(<HelpPage />);
    expect(screen.getByText("Help & Support")).toBeInTheDocument();
  });

  test("renders FAQ questions", () => {
    render(<HelpPage />);
    expect(screen.getByRole("button", { name: /how do i log in\?/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /where can i find my timecards and documents\?/i })).toBeInTheDocument();
  });

  test("allows users to search FAQs", () => {
    render(<HelpPage />);
    const searchInput = screen.getByPlaceholderText("Search FAQs...");
    
    fireEvent.change(searchInput, { target: { value: "log in" } });

    expect(screen.getByRole("button", { name: /how do i log in\?/i })).toBeInTheDocument();
  });
});
