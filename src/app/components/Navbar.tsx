"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; //  Iimport router for navigation - search

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");  
    const router = useRouter(); // Enables page redirection - search

    //  Handles search and redirects to /search?query=yourtext
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();  
        if (searchText.trim() !== "") {
            router.push(`/search?query=${searchText}`);  
        }
    };

    return (
       // <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <nav className="navbar text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">

            <div className="container mx-auto flex justify-between items-center">
              
               <Link href="/" className="flex items-center">
                 <img src="/logo.png" alt="HRDC Logo" className="h-10 w-auto mr-3" />
                 <span className="text-2xl font-bold">HRDC Intranet</span>
                </Link>




                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <Link href="/" className="mx-2 hover:text-gray-300">Home</Link>
                    <Link href="/staff" className="mx-2 hover:text-gray-300">Staff</Link>
                    <Link href="/help" className="mx-2 hover:text-gray-300">Help</Link>
                    <Link href="/links" className="mx-2 hover:text-gray-300">Links</Link>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="ml-4 flex items-center bg-white px-2 py-1 rounded">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="text-black outline-none px-2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button type="submit" className="ml-2 text-gray-700">🔍</button>  
                    </form>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    {/* SVG Menu icon */}
                    <svg className="w-6 h-6 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
                    <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
                    <Link href="/staff" className="block py-2 hover:text-gray-300">Staff</Link>
                    <Link href="/help" className="block py-2 hover:text-gray-300">Help</Link>
                    <Link href="/links" className="block py-2 hover:text-gray-300">Links</Link>

                    {/*  Search Form in Mobile Menu */}
                    <form onSubmit={handleSearch} className="mt-4 flex items-center bg-white px-2 py-1 rounded">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="text-black outline-none px-2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button type="submit" className="ml-2 text-gray-700">🔍</button>  
                    </form>
                </div>
            )}
        </nav>
    );
};
