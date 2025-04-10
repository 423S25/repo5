"use client";

import { useState } from "react";
import { NavBar } from "../components/Navbar";

export default function HelpPage() {
  
  // Expandable FAQs
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "How do I log in?", answer: "Click the 'Login' button at the top of the page and enter your username and password. If you have trouble logging in, contact your supervisor." },
    { question: "Where can I find my timecards and documents?", answer: "Use the search bar to look for forms or browse the 'Staff' section for timecards, W-2 forms, and training documents." },
    { question: "How do I know when timecards are due?", answer: "Check the 'Home' page for announcements about due dates and upcoming deadlines." },
    { question: "How do I use the search bar?", answer: "Type keywords related to the document you need, and the system will suggest relevant forms from the HRDC Google Drive." },
    { question: "Who do I contact if I need help?", answer: "For technical issues, contact support at [support@hrdc.org](mailto:support@hrdc.org). For HR-related questions, speak with your supervisor." }
  ];

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* <div className="container mx-auto p-6">
        <div className="bg-white shadow-md p-6 rounded-lg"> */}
        
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
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Help & Support</h1>
  
          {/* Intro Section */}
          <p className="text-gray-700 text-lg text-center mb-6">
            Welcome to the HRDC Intranet Help Center. This site is designed to make it easy for employees and volunteers to find important forms, announcements, and training materials.
          </p>
  
          </div>
          </div>

          {/* Search Bar */}

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
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-6"
          />

          </div>
          </div>
          </div>
  
           {/* FAQs Section */}
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
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
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
          
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left font-semibold text-gray-700"
                  >
                    {faq.question} {openFAQ === index ? "▲" : "▼"}
                  </button>
                  {openFAQ === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
          </div>
          </div>
          </div>
  
          {/* Additional Support */}
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
          <p className="text-gray-700 mt-2">
            If you need further assistance, contact the HR department at{" "}
            <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.  
            For urgent issues, please speak directly with your supervisor.
          </p>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
