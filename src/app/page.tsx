"use client"; // tells Next.js this runs in the browser, not on the server
export const dynamic = "force-dynamic"; // makes sure data loads fresh each time (not cached)

import { NavBar } from "./components/Navbar"; // top navigation bar
import { getAnnouncements } from "@/utils/getAnnouncements"; // fetches announcements from Firebase
import { useRouter } from "next/navigation"; // lets us redirect programmatically
import { useState, useEffect } from "react"; // react hooks

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

// this is the homepage component
export default function HomePageWrapper() {
  // this sets up state for search input
  const [searchText, setSearchText] = useState("");

  // this lets us redirect user to another page
  const router = useRouter();

  // this holds announcement data from Firebase
  const [announcements, setAnnouncements] = useState<any[]>([]);

  // runs only once when page loads, grabs announcements from Firebase
  useEffect(() => {
    getAnnouncements().then(setAnnouncements);
  }, []);

  return (
    <div>
      <NavBar /> {/* top nav bar at the top of every page */}

      {/* main container layout - centers everything */}
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
        {/* white content box inside */}
        <div 
          style={{
            width: 980, 
            height: "100%",
            background: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
            paddingBottom: "100px",
          }}
        >

          {/* welcome message at the top */}
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
              <h2 className={`${monsterratBold.className}`} style={{ color: "black" }}>HRDC Intranet</h2>
    <p className={`${monsterrat.className}`} style={{ color: "black" }}>
      Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
    </p>
            </div>
          </div>

          {/* search section */}
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
                {/* form to handle search */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // stop default form behavior
                    if (searchText.trim() !== "") {
                      router.push(`/search?query=${searchText}`); // go to search results page
                    }
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} // update state when typing
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

          {/* big buttons section in the middle */}
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
              {/* makes 3 big buttons: Help, Staff Resources, Important Links */}
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
                    fontFamily: "Montserrat",
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

          {/* announcements section */}
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
              <h2 className={`${monsterratBold.className}`}>WHAT'S NEW</h2>
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
                <h3 className={`${monsterratBold.className}`}>Announcements</h3>
                {/* if no announcements show fallback message */}
                {announcements.length === 0 ? (
                  <p className={`${monsterrat.className}`}>No new announcements.</p>
                ) : (
                  <ul>
                    {/* show list of announcements from firebase and date  posted */}
                    {announcements.map((a: any) => (
                      <li key={a.id} className={`${monsterrat.className}`}>
                        <h4 className={`${monsterratBold.className}`}>{a.title}</h4>
                        <p>{a.content}</p>
                        <p className={`${monsterrat.className}`}>
                             Posted by {a.author} on{" "}
                              {a.timestamp?.seconds
                              ? new Date(a.timestamp.seconds * 1000).toLocaleString()
                                 : "unknown time"}
                            </p>

                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* calendar at bottom of page */}
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
              <h2 className={`${monsterratBold.className}`}>CALENDAR</h2>
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
                {/* calendar is from google using iframe */}
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=750&wkst=1&ctz=America%2FDenver&showPrint=0&src=MTk5MHJ5YW5wQGdtYWlsLmNvbQ&src=Y183NDg5NDk4OTQ2ZWVmMjExYTE1ZjdjNWI4ZWU0MzVkNDBmZWZiMmI0MDA4ZGM1OThjMTUxODZkYjYwNjkyMjk1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%234285F4" 
            
                  style={{ border: "1px solid #777" }}
                  width="750"
                  height="750"
                  className={`${monsterratBold.className}`}
                  title="HRDC Calendar"
                ></iframe>
              </div>
            </div>
          </div>

        </div> {/* end of white content box */}
      </div> {/* end of background box */}
    </div>
  );
}
