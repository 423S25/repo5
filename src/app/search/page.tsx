// search/page.tsx - Search Results Page

"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { NavBar } from "../components/Navbar";

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

/**
 * Static array of help topics and links that the user can search.
 */
const allData = [
  { title: "How do I log in?", content: "Click the 'Login' button at the top of the page and enter your username and password." },
  { title: "Where can I find my timecards and documents?", content: "Use the search bar to look for forms or browse the 'Staff' section for timecards." },
  { title: "How do I know when timecards are due?", content: "Check the 'Home' page for announcements about due dates and upcoming deadlines." },
  { title: "How do I use the search bar?", content: "Type keywords related to the document you need, and the system will suggest relevant forms from the HRDC Google Drive." },
  { title: "Who do I contact if I need help?", content: "For technical issues, contact support at support@hrdc.org. For HR-related questions, speak with your supervisor." },
  { title: "Timesheet Login", content: "Access your timecard at https://www.paychex.com/login" },
  { title: "Announcements", content: "Log in as admin to post or delete Announcements." },
  { title: "Employee Handbook", content: "You can download the Employee Handbook & HR Policies from the Staff Resources page" }
];

/**
 * Normalize a string by lowercasing and removing whitespace.
 * Used to improve search matching quality.
 */
const normalize = (str: string): string =>
  str.toLowerCase().replace(/\s+/g, "");

/**
 * Main search page with navigation and suspense wrapper for results.
 */
export default function SearchPage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <Suspense fallback={<p className={`${monsterrat.className}`}>Loading search results...</p>}>
          <SearchResults />
        </Suspense>
      </div>
    </>
  );
}

/**
 * Fetches query string and filters data based on search text.
 * The search is case- and whitespace-insensitive.
 */
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [filteredResults, setFilteredResults] = useState<{ title: string; content: string }[]>([]);

  useEffect(() => {
    const normalizedQuery = normalize(query);
    const results = allData.filter((item) =>
      normalize(item.title).includes(normalizedQuery) ||
      normalize(item.content).includes(normalizedQuery)
    );
    setFilteredResults(results);
  }, [query]);

  return (
    <div>
    
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
      <div 
        style={{
          width: 980, 
          height: "100%",
          background: "white",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
          paddingBottom: "100px",
          }}
        >

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
        <h2 className={`${monsterratBold.className}`}>HRDC Search</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: 20,
                  padding: 20,
                }}
              >

      <h1 className={`${monsterrat.className}`}>Search Results for: &quot;{query}&quot;</h1>


      {filteredResults.length > 0 ? (
        <ul className="list-disc ml-6">
          {filteredResults.map((item, index) => (
            <li key={index} className={`${monsterrat.className}`}>
              <strong>{item.title}:</strong> {item.content}
            </li>
          ))}
        </ul>
      ) : (
        <p className={`${monsterratBold.className}`}>No results found.</p>
      )}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}
