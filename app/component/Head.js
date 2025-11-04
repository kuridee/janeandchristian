"use client";

import Link from "next/link";
export default function Header(){
    return(
        <header>

            <div>
                <Link href="/">Home</Link>
                <Link href={"/about"}>About</Link>

            </div>

        </header>

    );
}