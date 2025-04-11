/**
 * Simple user‑flow test: HelpPage search bar filters results.
 */

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

import { render, screen, fireEvent } from "@testing-library/react";
import HelpPage from "../help/page";

test("User can search and find FAQs", () => {
  render(<HelpPage />);

  const searchInput = screen.getByPlaceholderText(/Search FAQs.../i);
  fireEvent.change(searchInput, { target: { value: "documents" } });

  expect(
    screen.getByText(/where can i find my timecards and documents\?/i)
  ).toBeInTheDocument();
});
