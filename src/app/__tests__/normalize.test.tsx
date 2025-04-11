/**
 * Behaviour test: search is case‑ and space‑insensitive.
 */
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => new URLSearchParams("query="),
}));

import { render, screen, fireEvent } from "@testing-library/react";
import SearchPage from "../search/page";

test("search matches regardless of case and spaces", () => {
  render(<SearchPage />);

  const input = screen.getByPlaceholderText(/search/i);
  fireEvent.change(input, { target: { value: "   PAY   CHECK " } });

  // static data includes “Paychex Login”
  expect(screen.getAllByText(/paychex/i).length).toBeGreaterThan(0);
});
