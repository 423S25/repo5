import { NavBar } from "../components/Navbar";

export default function HelpPage() {
  return (
    <>
      <NavBar /> {/* Navbar stays full width */}
      <div className="container mx-auto p-6"> 
        <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
        <p>Welcome to the Help Page. Here you'll find answers to common questions and guidance on using the site.</p>
       
        <h2 className="text-2xl font-semibold mt-6">FAQs</h2>
        <ul className="list-disc ml-6">
          <li>How do I log in?</li>
          <li>Where can I find my documents?</li>
          <li>Who do I contact for support?</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Need More Help?</h2>
        <p>Contact the HR department at <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.</p>
      </div>
    </>
  );
}
