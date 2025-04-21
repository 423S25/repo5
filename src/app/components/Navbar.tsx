"use client"; // tells Next.js this runs on the client side (browser)

import Link from "next/link"; // for internal navigation without full reloads
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // lets us navigate in code
import { auth } from "@/firebaseConfig"; // Firebase auth setup
import { onAuthStateChanged, signOut } from "firebase/auth"; // for login/logout handling

import { Montserrat } from 'next/font/google';

const monsterrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

const monsterratBold = Montserrat({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});


// this is the main navigation bar that shows up on every page
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // controls mobile dropdown
  const [searchText, setSearchText] = useState(""); // search bar input
  const [user, setUser] = useState<any>(null); // holds the logged-in user info
  const router = useRouter();

  // runs when component loads → checks if someone is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("PRODUCTION NAVBAR: User is now:", currentUser?.email); 
      setUser(currentUser); // update local user state
    });
    return () => unsubscribe(); // clean up when unmounting
  }, []);
  
  // handles logout → clears auth and redirects to homepage
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/"); // go back to homepage
  };

  return (
    <nav className="navbar text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">

        {/* HRDC logo and title */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="HRDC Logo" className="h-10 w-auto mr-3" />
          <span className="text-2xl font-bold">HRDC Intranet</span>
        </Link>

        {/* Desktop menu (visible on medium+ screens) */}
        <div className="hidden md:flex items-center">
          {/* regular links */}
          <Link href="/" className="mx-2 font-montserrat hover:text-gray-300">Home</Link>
          <Link href="/staff" className="mx-2 hover:text-gray-300">Staff</Link>
          <Link href="/help" className="mx-2 hover:text-gray-300">Help</Link>
          <Link href="/links" className="mx-2 hover:text-gray-300">Links</Link>

          {/* only show admin tools to admin user */}
          {user?.email === "admin@hrdc.com" && (
            <Link href="/announcements" className="mx-2 underline text-yellow-300">
              Manage Announcements
            </Link>
          )}

          {/* search form (desktop) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchText.trim() !== "") {
                router.push(`/search?query=${searchText}`);
              }
            }}
            className="ml-4 flex items-center bg-white px-2 py-1 rounded"
          >
            <input
              type="text"
              placeholder="Search..."
              className="text-black outline-none px-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="ml-2 text-gray-700">🔍</button>
          </form>

          {/* shows Login if user not logged in, Logout if they are */}
          {user ? (
            <button aria-label= "Logout" 
              onClick={handleLogout}
              className="ml-4 bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="ml-4 bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Button to open/close mobile menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* toggles between hamburger icon and X icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
          {/* same links as desktop version */}
          <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link href="/staff" className="block py-2 hover:text-gray-300">Staff</Link>
          <Link href="/help" className="block py-2 hover:text-gray-300">Help</Link>
          <Link href="/links" className="block py-2 hover:text-gray-300">Links</Link>

          {/* admin-only menu item */}
          {user?.email === "admin@hrdc.com" && (
            <Link href="/announcements" className="block py-2 text-yellow-300">
              Manage Announcements
            </Link>
          )}

          {/* search bar (mobile version) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchText.trim() !== "") {
                router.push(`/search?query=${searchText}`);
              }
            }}
            className="mt-4 flex items-center bg-white px-2 py-1 rounded"
          >
            <input
              type="text"
              placeholder="Search..."
              className="text-black outline-none px-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="ml-2 text-gray-700">🔍</button>
          </form>

          {/* login/logout button (mobile) */}
          {user ? (
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="mt-4 bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
