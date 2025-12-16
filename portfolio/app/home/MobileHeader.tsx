"use client";
import { useState } from "react";
import SmoothLink from "./SmoothLink";

export default function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="md:hidden">
            <header
                className={`fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md h-[70px] flex items-center px-4`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-white text-2xl focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </header>

            {isMenuOpen && (
                <nav
                    className={`fixed top-[70px] left-0 w-full bg-[#0a0a0a] text-white flex flex-col items-center gap-4 py-4 z-40`}
                >
                    <SmoothLink linkHash="mycharacter" onClick={toggleMenu}>
                        My Character
                    </SmoothLink>
                    <SmoothLink linkHash="skills" onClick={toggleMenu}>
                        Skills
                    </SmoothLink>
                    <SmoothLink linkHash="career" onClick={toggleMenu}>
                        Experience
                    </SmoothLink>
                    <SmoothLink linkHash="certificates" onClick={toggleMenu}>
                        Certificates
                    </SmoothLink>
                    <SmoothLink linkHash="projects" onClick={toggleMenu}>
                        Project Journey
                    </SmoothLink>
                    <SmoothLink linkHash="contactme" onClick={toggleMenu}>
                        Contact Me
                    </SmoothLink>
                </nav>
            )}
        </div>
    );
}