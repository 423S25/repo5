"use client";
export const dynamic = "force-dynamic";

import { NavBar } from "../components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function StaffPage() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  
    return (
        <>
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
          top: 0,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
          paddingBottom: "100px",
          }}
        >
        
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

        {/* Employee Tasks */}
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


                <ul className="list-disc ml-6">
                    <li> Submit Timecards: <a target="_blank" href="https://www.paychex.com/login">Paychex Login</a></li>
              
                </ul>
            </div>
            </div>
            </div>

                {/* HR  */}
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
 {/* <li>Payroll & Benefits Information (Link it here)</li> */}
</ul>
  </div>
  </div>
  </div>


    {/* Contact Info */}

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

                
                <p>If you need assistance, contact:</p>
                <ul className="list-disc ml-6">
                    <li>HR Department: hr@hrdc.org</li>
                    <li>IT Support: support@hrdc.org</li>
                    
                </ul>
            </div>

            </div>
            </div>
            </div>
            </div>
        </>
    );
}
