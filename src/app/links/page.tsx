import { NavBar } from "../components/Navbar";

export default function LinksPage() {
  return (
    <>
      <NavBar /> {/* Navbar stays full width */}
      <div className="container mx-auto p-6"> 
        <h1 className="text-3xl font-bold mb-4">Important Links</h1>
        
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
<div style={{width: 800, height: 200, left: 0, top: 0, position: 'absolute', background: '#147278', boxShadow: '0px 3px 4px 6px rgba(0, 0, 0, 0.20)', borderRadius: 20}} />
<div style={{width: 720, height: 58, left: 35, top: 100, position: 'absolute', background: 'white', borderRadius: 50}} />
<div style={{width: 40, height: 0, left: 101, top: 109, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '2px #A1A750 solid', outlineOffset: '-1px'}}></div>
<div style={{width: 40, height: 40, left: 51, top: 109, position: 'absolute'}}>
<div style={{width: 30, height: 30, left: 5, top: 5, position: 'absolute', background: '#003E52'}} />
</div>
        <p>Welcome to the Important Links Page. Here you'll find links to websites you need to access often.</p>
   
<div style={{width: 730, height: 60, left: 35, top: 23, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>What can we help you find today?</div>
</div>
        <h2 className="text-2xl font-semibold mt-6">Important Links</h2>
        <ul className="list-disc ml-6">
            <li className="mt-2">
                <a target="_blank" href="https://www.paychex.com/login">Timesheet Login</a>
                </li>
                <li>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfN0Ju3jDKo3sLZPYz9IE93lLBKIG_SGxC7qsbcyCnT9_fR2w/viewform?usp=sf_link">New Hire Information Request</a>
                </li>
                <li>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfeVazdx3wStnG6HA6lqEG3qqR8Y4gf5YA6e5hI--JWG2yrNg/viewform?usp=sf_link">Central Files Cover Sheet Submission Form</a>
            </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Need More Help?</h2>
        <p>Ask your supervisor for help accessing a link you need.</p>
        <p>Contact the HR department at <a href="mailto:support@hrdc.org" className="text-blue-500">support@hrdc.org</a>.</p>
      </div>
    </>
  );
}