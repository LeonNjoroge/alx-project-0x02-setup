import Link from "next/link";
import React from "react";

const Header: React.FC = () =>{
    return (
        <header>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </header>
    );
}

export default Header;
