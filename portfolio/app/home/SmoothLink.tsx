'use client'
import { updateHash } from "@/helpers/updateHash"
import { HashContext } from "./HashProvider"
import { useContext } from "react"
export default function SmoothLink({
    children,
    linkHash,
    styling = 'cursor-pointer max-h-max mt-[10] rounded-[20px] px-3 py-1',
    whenHovered = "hover:bg-[#40223f]",
    whenActive = "bg-[#FF91FA] text-[black]",
    onClick = undefined
}: {
    children: React.ReactNode
    linkHash: string
    styling?: string
    whenHovered?:string
    whenActive?:string
    onClick?: () => void | undefined
}) {

    const { hash, setHash } = useContext(HashContext);

    const handleClick = (id: string) => {
        updateHash(id, setHash);

        if (onClick) {
            onClick();
        }

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <button onClick={() => handleClick(linkHash)} className={`${styling} ${(linkHash === hash ? whenActive : whenHovered)}`} >
            {children}
        </button>
    )
}
