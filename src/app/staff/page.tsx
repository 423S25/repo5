// this tells next.js to use client side rendering
"use client";

// makes sure this page updates dynamically
export const dynamic = "force-dynamic";

// import top navigation bar component
import { NavBar } from "../components/Navbar";

// import function to maybe use announcements (not used here though)
import { getAnnouncements } from "@/utils/getAnnouncements";

// import router for navigation
import { useRouter } from "next/navigation";

// we use state to store user input (search box)
import { useState, useEffect } from "react";

// this is the main staff page
export default function StaffPage() {
  // state to store what user types into search
  const [searchText, setSearchText] = useState("");

  // router helps us go to another page when they submit search
  const router = useRouter();

  return (
    <>
      {/* show the navigation bar on top */}
      <NavBar />

      {/* background container for the whole page */}
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
        {/* white box inside main page */}
        <div 
          style={{
            width: 980, 
            background: "white",
            top: 0,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >

          {/* welcome section */}
          <div className="text-center mt-10">
            <div
              style={{
                width: 980,
                background: "#A1A750",
                boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
                padding: 20,
                color: "white",
              }}
            >
              <h1 className="text-3xl font-bold">HRDC Staff Resources</h1>
              <p>Welcome to the HRDC Staff Portal. Use this page to access staff-related tools and resources.</p>
            </div>
          </div>

          {/* Search box inside green section */}
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
                {/* search form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // if they typed something, go to the search page
                    if (searchText.trim() !== "") {
                      router.push(`/search?query=${searchText}`);
                    }
                  }}
                  className="flex items-center"
                >
                  {/* user input field */}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  {/* button to submit search */}
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

          {/* Staff Actions section */}
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
              <h2 className="text-2xl font-bold mb-4">Staff Actions</h2>
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
                {/* just one action for now */}
                <ul className="list-disc ml-6">
                  <li>
                    Submit Timecards:{" "}
                    <a target="_blank" href="https://www.paychex.com/login">
                      Paychex Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HR Resources section */}
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
              <h2 className="text-2xl font-bold mb-4">HR Resources</h2>
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
                  {/* only handbook link for now */}
                  <li>
                    <a
                      href="/Employee_Handbook.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Employee Handbook & HR Policies
                    </a>
                  </li>
                  {/* hidden item, maybe to be added later */}
                  {/* <li>Payroll & Benefits Information (Link it here)</li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
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
              <h2 className="text-2xl font-bold mb-4">📞 Need Help?</h2>
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
                {/* contact info */}
                <p>If you need assistance, contact:</p>
                <ul className="list-disc ml-6">
                  <li>HR Department: hr@hrdc.org</li>
                  <li>IT Support: support@hrdc.org</li>
                </ul>
              </div>
            </div>
          </div>

        </div> {/* end white content box */}
      </div> {/* end full page wrapper */}
    </>
  );
}
