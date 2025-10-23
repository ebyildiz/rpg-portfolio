"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Transition from '../Transition';

export default function CharacterLayout({ children }:
    Readonly<{
        children: React.ReactNode;
    }>) {
    const path = usePathname();
    return <>
        <header className='flex flex-row justify-center align-center gap-25 text-[35px] pt-20'>
            <Link className={"hover:text-[#FF91FA] hover:underline underline-offset-20 " + (path === "/mycharacter" ? "text-[#FF91FA] underline underline-offset-20" : "")} href="/mycharacter">My Character</Link>
            <Link className={"hover:text-[#FF91FA] hover:underline underline-offset-20 " + (path === "/career" ? "text-[#FF91FA] underline underline-offset-20" : "")} href="/career">Career Journey</Link>
            <Link className={"hover:text-[#FF91FA] hover:underline underline-offset-20 " + (path === "/certificates" ? "text-[#FF91FA] underline underline-offset-20" : "")} href="/certificates">Certificates</Link>
            <Link className={"hover:text-[#FF91FA] hover:underline underline-offset-20 " + (path === "/projects" ? "text-[#FF91FA] underline underline-offset-20" : "")} href="/projects">Project Journey</Link>
        </header>
        <Transition>
            {children}
        </Transition>

    </>
}