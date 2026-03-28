"use client"
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
const Navigation = () => {
    const router =useRouter();
    return (
        <>
            <div className="logo">
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MY_APP</Link>
            </div>
            <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/about">About</Link>
                <button onClick={()=>router.push("/articles")}>articles</button>
                <button onClick={()=>router.push("/news")}>News</button>
            </nav>
        </>
    )
}

export default Navigation