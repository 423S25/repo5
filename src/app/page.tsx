import { NavBar } from "./components/Navbar";
import { getAnnouncements } from "./utils/getannouncements";
import { Announcement } from "./types/announcement";

export default async function HomePage() {
  const announcements = await getAnnouncements();

  return (
    <div>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
        </p>
       
        <div className="mt-6 p-4 rounded" style={{ backgroundColor: "#9FA45A" }}>
          <h2 className="text-xl font-semibold">Announcements</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-600 text-lg">No new announcements.</p>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{announcement.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-3">{announcement.content}</p>
                  <span className="text-sm text-gray-500 italic">
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
