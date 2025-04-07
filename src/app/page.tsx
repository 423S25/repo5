export const dynamic = "force-dynamic";

import { NavBar } from "./components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";

export default async function HomePage() {
  const announcements = await getAnnouncements();

  return (
      <div>
      <NavBar />

      {/* Welcome Section */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the HRDC Intranet. You can use the navigation above to find
          important links, resources, and help.
        </p>
      </div>

      {/*Seach bar Section */}
      <div className="flex justify-center mt-10">
        <div
            style={{
              width: 800,
              background: "#147278",
              borderRadius: 20,
              boxShadow: "0px 3px 4px 6px rgba(0, 0, 0, 0.2)",
              padding: 20,
              maxHeight: 400,
              color: "white",
            }}
          >
        <h2 className="text-2xl font-bold mb-4">What can we help you find today?</h2>

        <div style={{
          width: '100%', 
          height: '100%', 
          background: 'white', 
          borderRadius: 50
          }} 
        >

      </div>
      </div>
      </div>


      {/* Announcements Box Styled as "What's New" */}
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
                    <p className="text-sm text-gray-500 mt-1">
                      Posted by {a.author}
                    </p>
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
              maxHeight: 800, // Increased height for better visibility
              overflowY: "auto",
            }}
          >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=750&wkst=1&ctz=America%2FDenver&showPrint=0&src=MTk5MHJ5YW5wQGdtYWlsLmNvbQ&color=%23039BE5"
      style={{ border: "1px solid #777" }}
            width="750"
            height="750"
      className="rounded shadow-lg"
          ></iframe>
          </div>
      </div>
      </div>



      </div>
  );
}

