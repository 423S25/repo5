"use client"
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
    const [searchText, setSearchText] = useState("");

    return(
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href ="" className="text-2xl font-bold">
                    Group 5
                </a>
                <div className="hidden md:flex">
                    <Link href ="/" className="mx-2 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href ="/staff" className="mx-2 hover:text-gray-300">
                        Staff
                    </Link>
                    <Link href ="/resources" className="mx-2 hover:text-gray-300">
                        Resources
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center ml-4">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-2 py-1 text-black rounded" 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                </div>
                
                <div className="md:hidden flex items-center">
                    <button onClick={() => {
                        //setIsOpen(!isOpen);
                    }}></button> 
                </div>
            </div>
        </nav>
    );
}
