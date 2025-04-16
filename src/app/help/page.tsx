<<<<<<< HEAD
"use client"; // Indicates this is a client-side rendered component

// Import necessary components and hooks
import { useState } from "react"; // React hook for managing state
import { NavBar } from "../components/Navbar"; // Navigation bar component

// Define the HelpPage component
export default function HelpPage() {
  
  // State to manage which FAQ is expanded
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // List of FAQs with questions and answers
=======
"use client"; // this makes sure the code runs on the user's browser (client side)

import { useState } from "react"; // react hook for keeping track of changes in the component
import { NavBar } from "../components/Navbar"; // brings in the top navigation bar

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


// this is the main help page component
export default function HelpPage() {

  // this sets up which FAQ is open (null means none is open)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // list of all frequently asked questions and answers
>>>>>>> 7145757c053c29517d2f6b6d74294032aad215d2
  const faqs = [
    {
      question: "How do I log in?",
      answer: "Click the 'Login' button at the top of the page and enter your username and password. If you have trouble logging in, contact your supervisor."
    },
    {
      question: "Where can I find my timecards and documents?",
      answer: "Use the search bar to look for forms or browse the 'Staff' section for timecards and training documents."
    },
    {
      question: "How do I know when timecards are due?",
      answer: "Check the 'Home' page for announcements about due dates and upcoming deadlines."
    },
    {
      question: "How do I use the search bar?",
      answer: "Type keywords related to the document you need, and the system will suggest relevant forms from the HRDC Google Drive."
    },
    {
      question: "Who do I contact if I need help?",
      answer: "For technical issues, contact support at [support@hrdc.org](mailto:support@hrdc.org). For HR-related questions, speak with your supervisor."
    },
    {
      question: "How do I post an announcement?",
      answer: "Only the admin account (admin@hrdc.com) can post announcements. After logging in, click 'Manage Announcements' in the navigation bar, fill out the form, and click 'Post Announcement.' It will appear on the homepage for all users."
    },
    {
      question: "How do I delete an announcement?",
      answer: "Admins can delete announcements by clicking the Delete button next to a posted item in the 'Manage Announcements' page. Deleted items are removed immediately from the homepage."
    }
  ];

<<<<<<< HEAD
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on the search query
=======
  // this is used for the search bar - tracks what the user types
  const [searchQuery, setSearchQuery] = useState("");

  // filters the list of faqs based on what the user typed
>>>>>>> 7145757c053c29517d2f6b6d74294032aad215d2
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
<<<<<<< HEAD
      {/* Render the navigation bar */}
      <NavBar /> 

      {/* Main container for the page */}
=======
      <NavBar />  {/* show the navigation bar at the top */}

      {/* big blue background box */}
>>>>>>> 7145757c053c29517d2f6b6d74294032aad215d2
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
<<<<<<< HEAD
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
=======
        {/* white content area in the middle of screen */}
        <div 
          style={{
            width: 980, 
            background: "white",
            top: 0,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >

          {/* title and intro text */}
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
              <h1 className={`${monsterratBold.className}`}>Help & Support</h1>
              <p className={`${monsterrat.className}`}>
                Welcome to the HRDC Intranet Help Center. This site is designed to make it easy for employees and volunteers to find important forms, announcements, and training materials.
              </p>
            </div>
          </div>

          {/* search bar where users can look for faq questions */}
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

          {/* list of faq questions and answers */}
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
              <h2 className={`${monsterratBold.className}`}>Frequently Asked Questions</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: 20,
                  padding: 20,
                  maxHeight: 400,
                  overflowY: "auto", // makes it scrollable if too long
                }}
              >
                <div className="space-y-4">
                  {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq, index) => (
                      <div key={index} className="border border-gray-300 rounded-lg p-4">
                        {/* clicking this opens and closes the answer */}
                        <button
                          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                          className={`${monsterrat.className}`}
                        >
                          {faq.question} {openFAQ === index ? "▲" : "▼"}
                        </button>
                        {openFAQ === index && <p className={`${monsterrat.className}`}>{faq.answer}</p>}
                      </div>
                    ))
                  ) : (
                    <p className={`${monsterratBold.className}`}>No results found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* contact info section at bottom */}
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
                  If you need further assistance, contact the HR department at{" "}
                  <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.  
                  For urgent issues, please speak directly with your supervisor.
                </p>
              </div>
            </div>
          </div>

        </div> {/* end of content container */}
      </div> {/* end of outer background */}
>>>>>>> 7145757c053c29517d2f6b6d74294032aad215d2
    </>
  );
}