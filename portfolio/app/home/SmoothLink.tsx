'use client'
import Link from "next/link"
import { updateHash } from "@/helpers/updateHash"
import { HashContext } from "./HashProvider"
import { useContext } from "react"
import { link } from "fs"
export default function SmoothLink({
    href,
    children,
    linkHash,
}: {
    href: string
    children: React.ReactNode
    linkHash: string
}) {

    const { hash, setHash } = useContext(HashContext);

    const handleClick = (id: string) => {
        updateHash(id, setHash);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <button onClick={() => handleClick(linkHash)} className={'cursor-pointer max-h-max mt-[10] rounded-[20px] px-3 py-1 ' + (linkHash === hash ? " bg-[#FF91FA] text-[black]" : " hover:bg-[#40223f]")} >
            {children}
        </button>
    )
}
