"use client"
import Link from "../../../node_modules/next/link";
import {useState} from "react";

export const NavBar = () => {
//const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between
        md:items-center">
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
                    <Link href ="/help" className="mx-2 hover:text-gray-300">
                        Help
                    </Link>
                
                </div>
                
                <div className="md:hidden flex items-center">
                    <button onClick={()=>{
                        //setIsOpen(!isOpen);
                    }}></button> 
                
                </div>
            
                
            </div>
        </nav>
    )
}