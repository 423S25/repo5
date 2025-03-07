"use client";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Group 5
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center"> {/* Wrapped with items-center for alignment */}
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/staff" className="mx-2 hover:text-gray-300">
                        Staff
                    </Link>
                    <Link href="/help" className="mx-2 hover:text-gray-300">
                        Help
                    </Link>
                    <Link href="/links" className="mx-2 hover:text-gray-300">
                        Links
                    </Link>

                    {/* Search Bar - No Icon */}
                    <div className="ml-4 flex items-center bg-white px-2 py-1 rounded">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="text-black outline-none"
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                console.log(e.target.value);
                                console.log(searchText)
                            }}
                        />
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
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
                    <Link href="/" className="block py-2 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/staff" className="block py-2 hover:text-gray-300">
                        Staff
                    </Link>
                    <Link href="/help" className="block py-2 hover:text-gray-300">
                        Help
                    </Link>
                    <Link href="/links" className="block py-2 hover:text-gray-300">
                        Link
                    </Link>
                </div>
            )}
        </nav>
    );
};
