// Import the NavBar component
import { NavBar } from "../components/Navbar";

// Define the StaffPage component
export default function StaffPage() {
    return (
        <>
            {/* Render the navigation bar */}
            <NavBar />

            {/* Main container for the staff page */}
            <div 
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    background: "#003E52", // Background color for the page
                    display: "flex",
                    justifyContent: "center", // Center content horizontally
                    paddingTop: "100px", // Add space at the top
                }}
            >
                {/* Inner container for the content */}
                <div 
                    style={{
                        width: 980, // Fixed width for the content box
                        background: "white", // White background for the content box
                        top: 0,
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset", // Add an inset shadow
                        paddingBottom: "100px", // Add space at the bottom
                    }}
                >
                    {/* Content container with padding */}
                    <div className="container mx-auto p-6">
                        {/* Page title */}
                        <h1 className="text-3xl font-bold">HRDC Staff Resources</h1>
                        <p>Welcome to the HRDC Staff Portal. Use this page to access staff-related tools and resources.</p>

                        {/* Section: Employee Tasks */}
                        <h2 className="text-2xl font-semibold mt-6">Staff Actions</h2>
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

                        {/* Section: HR Resources */}
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
                            {/* Placeholder for future links */}
                            {/* <li>Payroll & Benefits Information (Link it here)</li> */}
                        </ul>

                        {/* Section: Contact Information */}
                        <h2 className="text-2xl font-semibold mt-6">📞 Need Help?</h2>
                        <p>If you need assistance, contact:</p>
                        <ul className="list-disc ml-6">
                            <li>HR Department: hr@hrdc.org</li>
                            <li>IT Support: support@hrdc.org</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}