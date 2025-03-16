"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { NavBar } from "../components/Navbar"; 

const allData = [
    { title: "How do I log in?", content: "Click the 'Login' button at the top of the page and enter your username and password." },
    { title: "Where can I find my timecards and documents?", content: "Use the search bar to look for forms or browse the 'Staff' section for timecards, W-2 forms, and training documents." },
    { title: "How do I know when timecards are due?", content: "Check the 'Home' page for announcements about due dates and upcoming deadlines." },
    { title: "How do I use the search bar?", content: "Type keywords related to the document you need, and the system will suggest relevant forms from the HRDC Google Drive." },
    { title: "Who do I contact if I need help?", content: "For technical issues, contact support at support@hrdc.org. For HR-related questions, speak with your supervisor." },
    { title: "Timesheet Login", content: "Access your timecard at https://www.paychex.com/login" },
    { title: "New Hire Info", content: "Submit new hire information via this form." },
    { title: "Central Files Cover Sheet", content: "Submit your cover sheet here." },
    { title: "Announcements", content: "No new announcements." },
    { title: "Staff Page", content: "Currently under construction. More staff resources coming soon!" }
];

export default function SearchPage() {
    return (
        <>
            <NavBar />
            <div className="container mx-auto p-6">
                <Suspense fallback={<p className="text-gray-500">Loading search results...</p>}>
                    <SearchResults />
                </Suspense>
            </div>
        </>
    );
}


function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const [filteredResults, setFilteredResults] = useState<{ title: string; content: string }[]>([]);

    useEffect(() => {
        const results = allData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(results);
    }, [query]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Search Results for: &quot;{query}&quot;</h1>
            {filteredResults.length > 0 ? (
                <ul className="list-disc ml-6">
                    {filteredResults.map((item, index) => (
                        <li key={index} className="mt-2">
                            <strong>{item.title}:</strong> {item.content}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No results found.</p>
            )}
        </div>
    );
}
