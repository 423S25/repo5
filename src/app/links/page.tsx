"use client"; // Indicates this is a client-side rendered component
export const dynamic = "force-dynamic"; // Forces dynamic rendering for this page

// Import necessary components and hooks
import { NavBar } from "../components/Navbar"; // Navigation bar component
import { useRouter } from "next/navigation"; // Router hook for navigation
import { useState, useEffect } from "react"; // React hook for state management
import { getLinks } from "@/utils/getLinks"; // Function to fetch links from Firebase

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

// Define the LinksPage component
export default function LinksPage() {
  const [searchText, setSearchText] = useState(""); // State to store the search input
  const [links, setLinks] = useState([]); // State to store links from Firebase
  const router = useRouter(); // Router instance for navigation

  // Fetch links on load
  useEffect(() => {
    getLinks().then(setLinks).catch(console.error);
  }, []);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (searchText.trim() !== "") {
      router.push(`/search?query=${searchText}`); // Navigate to the search results page
    }
  };

  return (
    <>
      {/* Render the navigation bar */}
      <NavBar />

      {/* Main container for the page */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#003E52",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        {/* Inner container for the content */}
        <div
          style={{
            width: 980,
            background: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >
          {/* Content container */}
          <div className="text-center mt-10">
            {/* Page title */}
            <div
              style={{
                width: 980,
                background: "#A1A750",
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                padding: 20,
                color: "white",
              }}
            >
              <h1 className={`${monsterratBold.className}`}>Important Links</h1>
              <p className={`${monsterrat.className}`}>
                Welcome to the Important Links Page. Here you'll find links to websites you need to access often.
              </p>
            </div>

            {/* Search Section */}
            <div className="flex justify-center mt-10">
              <div
                style={{
                  width: 800,
                  background: "#147278",
                  borderRadius: 20,
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                  padding: 20,
                  color: "white",
                }}
              >
                <h2 className={`${monsterratBold.className}`}>What can we help you find today?</h2>
                <div
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: 20,
                    padding: 20,
                  }}
                >
                  {/* Search form */}
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                      type="submit"
                      className={`ml-2 bg-[#147278] text-white px-4 py-2 rounded ${monsterratBold.className}`}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Important Links Section */}
            <div className="flex justify-center mt-10">
              <div
                style={{
                  width: 800,
                  background: "#147278",
                  borderRadius: 20,
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                  padding: 20,
                  color: "white",
                }}
              >
                <h2 className={`${monsterratBold.className}`}>Important Links</h2>
                <div
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: 20,
                    padding: 20,
                    maxHeight: 400,
                    overflowY: "auto",
                  }}
                >
                  {links.length === 0 ? (
                    <p className={`${monsterrat.className}`}>No links available.</p>
                  ) : (
                    <ul className="list-disc ml-6 text-left">
                      {links.map((link) => (
                        <li key={link.id} className={`${monsterrat.className}`}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Need More Help Section */}
            <div className="flex justify-center mt-10">
              <div
                style={{
                  width: 800,
                  background: "#147278",
                  borderRadius: 20,
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                  padding: 20,
                  color: "white",
                }}
              >
                <h2 className={`${monsterratBold.className}`}>Need More Help?</h2>
                <div
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: 20,
                    padding: 20,
                    maxHeight: 400,
                    overflowY: "auto",
                  }}
                >
                  <p className={`${monsterrat.className}`}>
                    Ask your supervisor for help accessing a link you need.
                  </p>
                  <p className={`${monsterrat.className}`}>
                    Contact the HR department at {" "}
                    <a href="mailto:support@hrdc.org" className="text-blue-500">
                      support@hrdc.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}