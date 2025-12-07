'use client';
import React from 'react';
import { FaGithub } from "react-icons/fa"; //outlined
import { VscGithub } from "react-icons/vsc"; //filled
import { SlSocialGoogle } from "react-icons/sl"; //outlined
import { ImGoogle } from "react-icons/im"; //filled
import { PiLinkedinLogoLight } from "react-icons/pi"; //outlined
import { PiLinkedinLogoFill } from "react-icons/pi"; //filled
import Link from 'next/link';

export default function Footer() {
    const [githubHover, setGithubHover] = React.useState(false);
    const [gmailHover, setGmailHover] = React.useState(false);
    const [linkedinHover, setLinkedinHover] = React.useState(false);

    return (
        <footer className="flex flex-col place-items-center bg-[#40223f] text-white md:py-7">
            <div className="text-center">
                <p className="text-[20px]">
                    &copy; 2025. All rights reserved.
                </p>
                <p className="text-[20px]">
                    Designed and Built with 🩷 by Elif Yildiz
                </p>
            </div>
            <div className="flex flex-row place-items-center gap-6">
            <Link href="https://github.com/ebyildiz" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> setGithubHover(true)} onMouseLeave={() => setGithubHover(false)}>
                {githubHover ?  <FaGithub size={30} className="mt-4 cursor-pointer" /> :<VscGithub size={30} className="mt-4 cursor-pointer" />}
            </Link>
            <Link href="mailto:elifyildjz@gmail.com" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> setGmailHover(true)} onMouseLeave={() => setGmailHover(false)}>
                {gmailHover ? <ImGoogle size={30} className="mt-4 cursor-pointer" /> : <SlSocialGoogle size={30} className="mt-4 cursor-pointer" />}
            </Link>
            <Link href="https://linkedin.com/in/ebyildiz" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> setLinkedinHover(true)} onMouseLeave={() => setLinkedinHover(false)}>
                {linkedinHover ? <PiLinkedinLogoFill size={40} className="mt-4 cursor-pointer" /> : <PiLinkedinLogoLight size={40} className="mt-4 cursor-pointer" />}
            </Link>
            </div>
        </footer>
    );
};