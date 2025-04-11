/**
 * System‑level test: Home page lists announcements fetched from Firestore.
 *
 * NOTE: we mock firebase/firestore BEFORE importing HomePage so the page
 * picks up our stubbed functions.
 */
jest.mock("firebase/firestore", () => {
    const actual = jest.requireActual("firebase/firestore");
    return {
      ...actual,
      getDocs: jest.fn(),
      query: jest.fn(),
      collection: jest.fn(),
      orderBy: jest.fn(),
    };
  });
  
  import { render, screen, waitFor } from "@testing-library/react";
  import HomePage from "../page";
  import * as fsMock from "firebase/firestore";
  
  (fsMock.getDocs as jest.Mock).mockResolvedValue({
    docs: [
      {
        id: "1",
        data: () => ({
          title: "System Test",
          content: "It works",
          author: "admin",
          timestamp: { seconds: 1 },
        }),
      },
    ],
  } as any);
  
  jest.mock("next/navigation", () => ({
    useRouter: () => ({ push: jest.fn() }),
  }));
  
  test("Home page lists announcements (system test)", async () => {
    render(<HomePage />);
    await waitFor(() =>
      expect(screen.getByText(/System Test/i)).toBeInTheDocument()
    );
  });
  