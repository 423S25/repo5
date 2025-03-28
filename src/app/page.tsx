export const dynamic = "force-dynamic";

import { NavBar } from "./components/Navbar";
import { getAnnouncements } from "@/utils/getAnnouncements";


export default async function HomePage() {
  const announcements = await getAnnouncements();

  return (
    <div>
      <NavBar />
      <head><title>HRDC Staff Intranet</title></head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
        </p>

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
      </div>
    </div>
  );
}

