/**
 * Unit test: Search page renders and filters results.
 */
jest.mock("next/navigation", () => ({
    useRouter: () => ({ push: jest.fn() }),
    useSearchParams: () => new URLSearchParams("query="),
  }));
  
  import { render, screen, fireEvent } from "@testing-library/react";
  import SearchPage from "../search/page";
  
  test("renders search input and filters results", () => {
    render(<SearchPage />);
  
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  
    fireEvent.change(searchInput, { target: { value: "handbook" } });
  
    // multiple matches, so use *All*
    expect(screen.getAllByText(/handbook/i).length).toBeGreaterThan(0);
  });
  