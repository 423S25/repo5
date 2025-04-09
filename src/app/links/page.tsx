import { NavBar } from "../components/Navbar";

export default function LinksPage() {
  return (
    <>
      <NavBar /> {/* Navbar stays full width */}
     
      <div className="container mx-auto p-6"> 
        <h1 className="text-3xl font-bold mb-4">Important Links</h1>
        <p>Welcome to the Important Links Page. Here you&apos;ll find links to websites you need to access often.</p>
       
        <h2 className="text-2xl font-semibold mt-6">Important Links</h2>
        <ul className="list-disc ml-6">
            <li className="mt-2">
              <a target="_blank" rel="noopener noreferrer" href="https://www.paychex.com/login" className="text-blue-500 underline">Timesheet Login</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfN0Ju3jDKo3sLZPYz9IE93lLBKIG_SGxC7qsbcyCnT9_fR2w/viewform?usp=sf_link" className="text-blue-500 underline">New Hire Information Request</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfeVazdx3wStnG6HA6lqEG3qqR8Y4gf5YA6e5hI--JWG2yrNg/viewform?usp=sf_link" className="text-blue-500 underline">Central Files Cover Sheet Submission Form</a>
            </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Need More Help?</h2>
        <p>Ask your supervisor for help accessing a link you need.</p>
        <p>Contact the HR department at <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.</p>
      </div>
    </>
  );
}