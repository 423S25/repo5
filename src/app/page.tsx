"use client";
export const dynamic = "force-dynamic";

import { NavBar } from "./components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePageWrapper() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    getAnnouncements().then(setAnnouncements);
  }, []);

  return (
      <div>
      <NavBar />

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
            background: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >
          {/* Top bar
          <div
            style={{
              width: "100%",
        height: 100, 
              background: "#147278",
            }}
          /> */}

      {/* Welcome Section */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
              Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
        </p>
      </div>

          {/* Search Prompt Section */}
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
        <h2 className="text-2xl font-bold mb-4">What can we help you find today?</h2>
              <div
                style={{
          background: "white",
          color: "black",
          borderRadius: 20,
          padding: 20,
                }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchText.trim() !== "") {
                      router.push(`/search?query=${searchText}`);
                    }
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
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

          {/* Central Button Section */}
      <div className="flex justify-center mt-10">
      <div 
        style={{
          width: 800, 
          height: 450,  
                background: "#A1A750",
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.20)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              {[
                { label: "Help", href: "/help" },
                { label: "Staff Resources", href: "/staff" },
                { label: "Important Links", href: "/links" },
              ].map((link, index) => (
                <div
                  key={index}
        style={{
          width: 700, 
          height: 100, 
                    background: "#147278",
                    boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.30)",
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.25rem",
                    color: "white",
                  }}
                >
                  <a href={link.href} target="_blank">
                    {link.label}
                  </a>
      </div>
              ))}
      </div>
      </div>

          {/* What's New / Announcements */}
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
          <h2 className="text-2xl font-bold mb-4">WHAT'S NEW</h2>
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
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
        {announcements.length === 0 ? (
            <p className="text-gray-600">No new announcements.</p>
          ) : (
              <ul>
              {announcements.map((a: any) => (
                <li key={a.id} className="mb-4 border-b pb-2">
                    <h4 className="text-lg font-semibold">{a.title}</h4>
                  <p>{a.content}</p>
                        <p className="text-sm text-gray-500 mt-1">Posted by {a.author}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
      </div>

    {/* Calendar Section */}
    <div className="calendar mt-12 flex flex-col items-center">
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
      <h2 className="text-2xl font-bold mb-4">CALENDAR</h2>
          <div
            style={{
              background: "white",
              color: "black",
              borderRadius: 20,
              padding: 20,
                  maxHeight: 800,
              overflowY: "auto",
            }}
          >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=750&wkst=1&ctz=America%2FDenver&showPrint=0&src=MTk5MHJ5YW5wQGdtYWlsLmNvbQ&color=%23039BE5"
      style={{ border: "1px solid #777" }}
            width="750"
            height="750"
      className="rounded shadow-lg"
                  title="HRDC Calendar"
          ></iframe>
          </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}
