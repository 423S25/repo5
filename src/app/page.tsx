export const dynamic = "force-dynamic";

import { NavBar } from "./components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";

export default async function HomePage() {
  const announcements = await getAnnouncements();

  return (
    <div>
      <NavBar />
      
      <div className="text-center mt-10">
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: 800, height: 200, left: 0, top: 0, position: 'absolute', background: '#147278', boxShadow: '0px 3px 4px 6px rgba(0, 0, 0, 0.20)', borderRadius: 20}} />
      <div style={{width: 720, height: 58, left: 35, top: 100, position: 'absolute', background: 'white', borderRadius: 50}} />
      <div style={{width: 40, height: 0, left: 101, top: 109, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '2px #A1A750 solid', outlineOffset: '-1px'}}></div>
      <div style={{width: 40, height: 40, left: 51, top: 109, position: 'absolute'}}>
      <div style={{width: 30, height: 30, left: 5, top: 5, position: 'absolute', background: '#003E52'}} />
      </div>

      <div style={{width: 730, height: 60, left: 35, top: 23, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>What can we help you find today?</div>
      </div>
      <p></p>
      
        {/* <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
        </p> */}

        {/* Announcements Section */}
        <div className="mt-6 p-4 rounded" style={{ backgroundColor: "#9FA45A" }}>
          <h2 className="text-xl font-semibold">Announcements</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-600">No new announcements.</p>
          ) : (
            <ul className="text-left mt-4">
              {announcements.map((a: any) => (
                <li key={a.id} className="mb-4 border-b pb-2">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p>{a.content}</p>
                  <p className="text-sm text-gray-500 mt-1">Posted by {a.author}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Fixed calendar section */}
        <div className="calendar mt-8">
         {/* <h4 className="text-lg font-semibold">HRDC Calendar</h4> */}

          <iframe
            src="https://calendar.google.com/calendar/embed?height=750&wkst=1&ctz=America%2FDenver&showPrint=0&src=MTk5MHJ5YW5wQGdtYWlsLmNvbQ&color=%23039BE5"
            style={{ border: "solid 1px #777" }}
            width="750"
            height="750"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

