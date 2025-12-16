"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

import advancedReact from "@/images/certificates/advancedreact.png"
import react from "@/images/certificates/react.png"
import nodejs from "@/images/certificates/nodejs.png"
import typescript from "@/images/certificates/typescript.png"
import difference from "@/images/certificates/difference.png"

export default function Certificates() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: false,
    })

    const IMAGES = [
        advancedReact,
        react,
        nodejs,
        typescript,
        difference
    ]

    return (
        <section className="flex flex-col place-items-center gap-10 px-10 md:pt-[100px] md:px-20 pb-20">
            <h1 className="text-[40px] underline underline-offset-10 mb-[30px]">Certificates</h1>

            <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 place-items-center">
                {IMAGES.map((img, i) => (
                    <Image
                        key={i}
                        src={img}
                        alt="certificate"
                        width={300}
                        height={200}
                        onClick={() => setSelectedImage(img.src)}
                        className={`${inView ? "popup-visible " : "popup-invisible"}
                                    cursor-zoom-in rounded-md transition-all`}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <Image
                        src={selectedImage}
                        alt="certificate enlarged"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl cursor-zoom-out"
                    />
                </div>
            )}
        </section>
    )
}
