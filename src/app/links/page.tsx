"use client"; // Indicates this is a client-side rendered component
export const dynamic = "force-dynamic"; // Forces dynamic rendering for this page

// Import necessary components and hooks
import { NavBar } from "../components/Navbar"; // Navigation bar component
import { useRouter } from "next/navigation"; // Router hook for navigation
import { useState } from "react"; // React hook for state management

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
  const router = useRouter(); // Router instance for navigation

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
          background: "#003E52", // Background color for the page
          display: "flex",
          justifyContent: "center", // Center content horizontally
          paddingTop: "100px", // Add space at the top
        }}
      >
        {/* Inner container for the content */}
        <div
          style={{
            width: 980, // Fixed width for the content box
            background: "white", // White background for the content box
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset", // Add an inset shadow
            paddingBottom: "100px", // Add space at the bottom
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
              Welcome to the Important Links Page. Here you&apos;ll find links to websites you need to access often.
            </p>
            </div>

            {/* Search Section */}
            <div className="flex justify-center mt-10">
              <div
                style={{
                  width: 800, // Width of the search box
                  background: "#147278", // Background color for the search box
                  borderRadius: 20, // Rounded corners
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)", // Add a shadow
                  padding: 20, // Padding inside the box
                  color: "white", // Text color
                }}
              >
                <h2 className={`${monsterratBold.className}`}>What can we help you find today?</h2>
                <div
                  style={{
                    background: "white", // Background color for the input container
                    color: "black", // Text color
                    borderRadius: 20, // Rounded corners
                    padding: 20, // Padding inside the container
                  }}
                >
                  {/* Search form */}
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                      value={searchText} // Bind input value to state
                      onChange={(e) => setSearchText(e.target.value)} // Update state on input change
                    />
                    <button
                      type="submit"
                      className="ml-2 bg-[#147278] text-white {`${monsterratBold.className}`} px-4 py-2 rounded"
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
                  width: 800, // Width of the links container
                  background: "#147278", // Background color for the links container
                  borderRadius: 20, // Rounded corners
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)", // Add a shadow
                  padding: 20, // Padding inside the container
                  color: "white", // Text color
                }}
              >
                <h2 className={`${monsterratBold.className}`}>Important Links</h2>
                <div
                  style={{
                    background: "white", // Background color for the links list
                    color: "black", // Text color
                    borderRadius: 20, // Rounded corners
                    padding: 20, // Padding inside the list
                    maxHeight: 400, // Maximum height for the list
                    overflowY: "auto", // Enable vertical scrolling if content overflows
                  }}
                >
                  {/* List of important links */}
                  <ul className="list-disc ml-6">
                    <li className={`${monsterrat.className}`}>
                      <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.paychex.com/login"
                        className="text-blue-500 underline"
                      >
                        Timesheet Login
                      </a>
                    </li>
                    <li className={`${monsterrat.className}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfN0Ju3jDKo3sLZPYz9IE93lLBKIG_SGxC7qsbcyCnT9_fR2w/viewform?usp=sf_link"
                        className="text-blue-500 underline"
                      >
                        New Hire Information Request
                      </a>
                    </li>
                    <li className={`${monsterrat.className}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfeVazdx3wStnG6HA6lqEG3qqR8Y4gf5YA6e5hI--JWG2yrNg/viewform?usp=sf_link"
                        className="text-blue-500 underline"
                      >
                        Central Files Cover Sheet Submission Form
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Need More Help Section */}
            <div className="flex justify-center mt-10">
              <div
                style={{
                  width: 800, // Width of the help container
                  background: "#147278", // Background color for the help container
                  borderRadius: 20, // Rounded corners
                  boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)", // Add a shadow
                  padding: 20, // Padding inside the container
                  color: "white", // Text color
                }}
              >
                <h2 className="text-2xl font-bold mb-4">{`${monsterratBold.className}`}>Need More Help?</h2>
                <div
                  style={{
                    background: "white", // Background color for the help text
                    color: "black", // Text color
                    borderRadius: 20, // Rounded corners
                    padding: 20, // Padding inside the text container
                    maxHeight: 400, // Maximum height for the text container
                    overflowY: "auto", // Enable vertical scrolling if content overflows
                  }}
                >
                  {/* Help text */}
                  <h2 className={`${monsterratBold.className}`}>Need More Help?</h2>
                  <p className={`${monsterrat.className}`}>Ask your supervisor for help accessing a link you need.</p>
                  <p className = {`${monsterrat.className}`}>
                    Contact the HR department at{" "}
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
