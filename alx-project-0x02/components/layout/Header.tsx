import Link from "next/link";
import React from "react";

const Header: React.FC = () =>{
    return (
        <header className="flex gap-2 ">
            <Link href="/home" className="text-blue-400 hover:text-blue-700">Home</Link>
            <Link href="/posts" className="text-blue-400 hover:text-blue-700" >Posts</Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-700">About</Link>
        </header>
    );
}

export default Header;
