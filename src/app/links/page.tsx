"use client";
export const dynamic = "force-dynamic";

import { NavBar } from "../components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LinksPage() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  return (
    <>
      <NavBar /> {/* Navbar stays full width */}

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
          top: 0,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
          paddingBottom: "100px",
          }}
        >
        
      <div className="container mx-auto p-6"> 
        <h1 className="text-3xl font-bold mb-4 text-center">Important Links</h1>
        <p>Welcome to the Important Links Page. Here you&apos;ll find links to websites you need to access often.</p>
       
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


         {/* Important Links Listed */}
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
              overflowY: "auto",
            }}
          >
        <ul className="list-disc ml-6">
            <li className="mt-2">
              <a target="_blank" rel="noopener noreferrer" href="https://www.paychex.com/login" className="text-blue-500 underline">Timesheet Login</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfN0Ju3jDKo3sLZPYz9IE93lLBKIG_SGxC7qsbcyCnT9_fR2w/viewform?usp=sf_link" className="text-blue-500 underline">New Hire Information Request</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfeVazdx3wStnG6HA6lqEG3qqR8Y4gf5YA6e5hI--JWG2yrNg/viewform?usp=sf_link" className="text-blue-500 underline">Central Files Cover Sheet Submission Form</a>
            </li>
        </ul>

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
        <p>Contact the HR department at <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}