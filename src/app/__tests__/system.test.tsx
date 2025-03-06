import { render, screen, fireEvent } from "@testing-library/react";
import HelpPage from "../help/page";

test("User can search and find FAQs", () => {
  render(<HelpPage />);
  
  // Find the search input
  const searchInput = screen.getByPlaceholderText("Search FAQs...");

  // User types "documents" in the search bar
  fireEvent.change(searchInput, { target: { value: "documents" } });

  // Expect the correct FAQ to be displayed
  expect(screen.getByRole("button", { name: /where can i find my timecards and documents\?/i })).toBeInTheDocument();
});
