/**
 * Integration test: non‑admin redirect
 */
jest.mock("firebase/auth", () => ({
    onAuthStateChanged: jest.fn(),
    getAuth: jest.fn(),
  }));
  
  const push = jest.fn();
  jest.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));
  
  import { render } from "@testing-library/react";
  import AnnouncementsPage from "../announcements/page";
  import { onAuthStateChanged } from "firebase/auth";
  
  (onAuthStateChanged as jest.Mock).mockImplementation((_a, cb) => {
    cb({ email: "user@foo.com" });
    return () => {};
  });
  
  test("redirects non‑admin to /login", () => {
    render(<AnnouncementsPage />);
    expect(push).toHaveBeenCalledWith("/login");
  });
  