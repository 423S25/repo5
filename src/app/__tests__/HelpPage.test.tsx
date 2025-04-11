/**
 * Unit tests for HelpPage.
 */

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock("@/firebaseConfig", () => ({
  auth: {},
  firebaseConfig: {},
}));

import { render, screen, fireEvent } from "@testing-library/react";
import HelpPage from "../help/page";

describe("HelpPage", () => {
  it("renders the help page title", () => {
    render(<HelpPage />);
    expect(screen.getByText(/Help & Support/i)).toBeInTheDocument();
  });

  it("renders FAQ questions", () => {
    render(<HelpPage />);
    expect(screen.getByText(/how do i log in\?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/where can i find my timecards and documents\?/i)
    ).toBeInTheDocument();
  });

  it("allows users to search FAQs", () => {
    render(<HelpPage />);
    const searchInput = screen.getByPlaceholderText(/Search FAQs.../i);
    fireEvent.change(searchInput, { target: { value: "log in" } });
    expect(screen.getByText(/how do i log in\?/i)).toBeInTheDocument();
  });
});
