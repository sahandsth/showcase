'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg sm:text-xl font-bold tracking-wide"
                >
                    Sahand
                </Link>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#about" className="hover:text-white transition">About</a>
                </nav>

                {/* Resume */}
                <a
                    href="/cv/SahandSetoudeh-CV.pdf"
                    target="_blank"
                    className="text-xs sm:text-sm px-3 sm:px-4 py-2 border border-zinc-700 rounded-lg hover:bg-white hover:text-black transition"
                >
                    CV
                </a>

            </div>
        </header>
    );
}