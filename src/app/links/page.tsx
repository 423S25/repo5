"use client"; // tells Next.js this page uses client-side rendering

export const dynamic = "force-dynamic"; // makes sure the page always renders fresh

// importing components and hooks we need
import { NavBar } from "../components/Navbar"; // top nav menu
import { getAnnouncements } from "@/utils/getAnnouncements"; // I think not used here - I think it stayed here by accident
import { useRouter } from "next/navigation"; // helps with redirecting/searching
import { useState, useEffect } from "react"; // React hooks

// main function that shows the Links page
export default function LinksPage() {
  const [searchText, setSearchText] = useState(""); // state for what user types in search box
  const router = useRouter(); // so we can redirect to the search page when they search

  return (
    <>
      <NavBar /> {/*  same across pages */}

      {/* outer wrapper for background and centering */}
      <div 
       style={{
          width: "100%",
          minHeight: "100vh", // makes sure it fills full screen
          background: "#003E52", // dark teal bg
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        {/* inner white box that holds all content */}
        <div 
          style={{
            width: 980, 
            background: "white",
            top: 0,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >
          {/* header section with page title and intro */}
          <div className="text-center mt-10">
            <div
              style={{
                width: 980,
                background: "#A1A750", // green header bg
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                padding: 20,
                color: "white",
              }}
            >
              <h1 className="text-3xl font-bold mb-4">Important Links</h1>
              <p>Welcome to the Important Links Page. Here you'll find links to websites you need to access often.</p>
            </div>
          </div>
       
          {/* search bar section */}
          <div className="flex justify-center mt-10">
            <div
              style={{
                width: 800,
                background: "#147278", // darker green bg for box
                borderRadius: 20,
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                padding: 20,
                color: "white",
              }}
            >
              <h2 className="text-2xl font-bold mb-4">What can we help you find today?</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: 20,
                  padding: 20,
                }}
              >
                {/* form handles the search input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // stops the page from refreshing
                    if (searchText.trim() !== "") {
                      router.push(`/search?query=${searchText}`); // send to search page with query
                    }
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} // update search text when typed
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-[#147278] text-white px-4 py-2 rounded"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* actual list of important links */}
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
              <h2 className="text-2xl font-bold mb-4">Important Links</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: 20,
                  padding: 20,
                  maxHeight: 400,
                  overflowY: "auto", // scroll if too long
                }}
              >
                <ul className="list-disc ml-6">
                  <li className="mt-2">
                    <a target="_blank" href="https://www.paychex.com/login">Timesheet Login</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfN0Ju3jDKo3sLZPYz9IE93lLBKIG_SGxC7qsbcyCnT9_fR2w/viewform?usp=sf_link">
                      New Hire Information Request
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfeVazdx3wStnG6HA6lqEG3qqR8Y4gf5YA6e5hI--JWG2yrNg/viewform?usp=sf_link">
                      Central Files Cover Sheet Submission Form
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* final support section */}
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
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
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
                <p>Ask your supervisor for help accessing a link you need.</p>
                <p>
                  Contact the HR department at{" "}
                  <a href="mailto:support@hrdc.org" className="text-blue-500">
                    support@hrdc.org
                  </a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
