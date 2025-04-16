"use client"; // Indicates this is a client-side rendered component

// Import necessary components and hooks
import { useState } from "react"; // React hook for managing state
import { NavBar } from "../components/Navbar"; // Navigation bar component

// Define the HelpPage component
export default function HelpPage() {
  
  // State to manage which FAQ is expanded
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // List of FAQs with questions and answers
  const faqs = [
    { question: "How do I log in?", answer: "Click the 'Login' button at the top of the page and enter your username and password. If you have trouble logging in, contact your supervisor." },
    { question: "Where can I find my timecards and documents?", answer: "Use the search bar to look for forms or browse the 'Staff' section for timecards, W-2 forms, and training documents." },
    { question: "How do I know when timecards are due?", answer: "Check the 'Home' page for announcements about due dates and upcoming deadlines." },
    { question: "How do I use the search bar?", answer: "Type keywords related to the document you need, and the system will suggest relevant forms from the HRDC Google Drive." },
    { question: "Who do I contact if I need help?", answer: "For technical issues, contact support at [support@hrdc.org](mailto:support@hrdc.org). For HR-related questions, speak with your supervisor." }
  ];

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on the search query
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          top: 0,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset", // Add an inset shadow
          paddingBottom: "100px", // Add space at the bottom
          }}
        >

      {/* Content container with padding */}
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          {/* Page title */}
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Help & Support</h1>
  
          {/* Intro Section */}
          <p className="text-gray-700 text-lg text-center mb-6">
            Welcome to the HRDC Intranet Help Center. This site is designed to make it easy for employees and volunteers to find important forms, announcements, and training materials.
          </p>
  
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery} // Bind input value to state
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            className="w-full p-2 border border-gray-300 rounded-lg mb-6"
          />
  
          {/* FAQs Section */}
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Render filtered FAQs */}
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4">
                  {/* FAQ question */}
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)} // Toggle FAQ visibility
                    className="w-full text-left font-semibold text-gray-700"
                  >
                    {faq.question} {openFAQ === index ? "▲" : "▼"} {/* Show expand/collapse icon */}
                  </button>
                  {/* FAQ answer (visible only if expanded) */}
                  {openFAQ === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                </div>
              ))
            ) : (
              // Message if no FAQs match the search query
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
  
          {/* Additional Support Section */}
          <h2 className="text-2xl font-semibold mt-6">Need More Help?</h2>
          <p className="text-gray-700 mt-2">
            If you need further assistance, contact the HR department at{" "}
            <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.  
            For urgent issues, please speak directly with your supervisor.
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}