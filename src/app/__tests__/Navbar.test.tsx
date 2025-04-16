/**
 * Unit test: Navbar admin‑link visibility
 */
jest.mock("firebase/auth", () => ({
    onAuthStateChanged: jest.fn(),
    getAuth: jest.fn(),
  }));
  
  jest.mock("next/navigation", () => ({
    useRouter: () => ({ push: jest.fn() }),
  }));
  
  import { render, screen } from "@testing-library/react";
  import { NavBar } from "../components/Navbar";
  import { onAuthStateChanged } from "firebase/auth";
  
  function setUser(email?: string) {
    (onAuthStateChanged as jest.Mock).mockImplementation((_a, cb) => {
      cb(email ? { email } : null);
      return () => {};
    });
  }
  
  afterEach(() => {
    jest.resetAllMocks();
  });
  
  test("admin sees Manage Announcements", () => {
    setUser("admin@hrdc.com");
    render(<NavBar />);
    expect(screen.getByText(/Manage Announcements/i)).toBeInTheDocument();
  });
  
  test("non‑admin does NOT see Manage Announcements", () => {
    setUser("user@foo.com");
    render(<NavBar />);
    expect(screen.queryByText(/Manage Announcements/i)).toBeNull();
  });
  