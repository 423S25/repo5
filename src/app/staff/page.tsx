import { NavBar } from "../components/Navbar";

export default function StaffPage() {
    return (
        <>
            <NavBar />
        
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold">HRDC Staff Resources</h1>
                <p>Welcome to the HRDC Staff Portal. Use this page to access staff-related tools and resources.</p>

                {/* Employee Tasks */}
                <h2 className="text-2xl font-semibold mt-6"> Staff Actions</h2>
                <ul className="list-disc ml-6">
                    <li>
                        Submit Timecards:{" "}
                        <a
                            target="_blank"
                            href="https://www.paychex.com/login"
                            className="text-blue-600 underline"
                        >
                            Paychex Login
                        </a>
                    </li>
              
                </ul>

                {/* HR  */}
            <h2 className="text-2xl font-semibold mt-6">HR Resources</h2>
            <ul className="list-disc ml-6">
              <li>
                <a
                        href="/Employee_Handbook.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                >
                        Employee Handbook & HR Policies
    </a>
  </li>
 {/* <li>Payroll & Benefits Information (Link it here)</li> */}
</ul>


                {/* Contact Info */}
                <h2 className="text-2xl font-semibold mt-6">📞 Need Help?</h2>
                <p>If you need assistance, contact:</p>
                <ul className="list-disc ml-6">
                    <li>HR Department: hr@hrdc.org</li>
                    <li>IT Support: support@hrdc.org</li>
                    
                </ul>
            </div>
        </>
    );
}
