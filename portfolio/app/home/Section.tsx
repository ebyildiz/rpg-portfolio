'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Section({
    id,
    refSection,
    children,
}: {
    id: string,
    refSection: React.RefObject<HTMLElement | null>,
    children: ReactNode
}) {

    return (
        <section
            id={id}
            ref={refSection}
            className="fade-element flex items-center justify-center scroll-mt-[120px]"
        >
            {children}
        </section>
    )
}
