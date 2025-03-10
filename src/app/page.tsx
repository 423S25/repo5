import { NavBar } from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">HRDC Intranet</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the HRDC Intranet. You can use the navigation above to find important links, resources, and help.
        </p>
        <div className="mt-6 bg-gray-100 p-4 rounded">
         <h2 className="text-xl font-semibold"> Announcements</h2>
          <p className="text-gray-600">No new announcements.</p>
        </div>
      </div>
    </div>
  );
}
