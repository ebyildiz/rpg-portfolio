"use client"

import Image from "next/image"
import front from "@/images/front.png"
import right from "@/images/right.png"
import left from "@/images/left.png"
import back from "@/images/back.png"
import turnR from "@/images/turnRight.png"
import turnL from "@/images/turnLeft.png"
import { useState } from "react"

export default function MyCharacter() {
    const [imageIdx, setImageIdx] = useState(0)

    const images = [front, right, back, left]

    function turnLeft() {
        setImageIdx((prev) => {
            if (prev === 0) {
                return 3;
            }
            else if (prev === 1) {
                return 0;
            }
            else if (prev === 2) {
                return 1;
            }
            return 2;
        })

    }

    function turnRight() {
        setImageIdx((prev) => {
            if (prev === 0) {
                return 1;
            }
            else if (prev === 1) {
                return 2;
            }
            else if (prev === 2) {
                return 3;
            }
            return 0;
        })
    }

    return (
        <>
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center px-10 md:px-20 md:pt-[50px]">
            <div className="flex flex-row place-center gap-8 p-8 md:gap-15 md:p-15">
                <button className="cursor-pointer " onClick={turnLeft}>
                    <Image className="object-contain w-[100px] h-[80px] md:w-[70px]" src={turnL} alt="turn left image" width={70} height={60} />
                </button>
                <Image className="object-contain w-[200px] h-[200px] md:w-[160px] md:h-[300px]" src={images[imageIdx]} alt="character image" width={150} height={200} />
                <button className="cursor-pointer" onClick={turnRight}>
                    <Image className="object-contain w-[100px] h-[80px] md:w-[70px]" src={turnR} alt="turn right image" width={70} height={60} />
                </button>
            </div>
            <div className="flex flex-col">
                <h1 className="text-center text-[30px] md:text-[40px] underline underline-offset-10 mb-[10]">About Me</h1>
                <p className="text-center text-[20px]  p-5 md:w-[750px]">This is Elif Yildiz and she has recently graduated from UCSD with a degree in Math and Computer Science. Since she graduated, she has been improving her software engineering skills through Scrimba and making various projects that help her learn and grow even more. She finished her latest project MyCuteChat in September, and she is currently working on finishing up the mobile app for TilkieTalkie . She enjoys web/mobile development and is always willing to learn new things! In her free time, Elif rock climbs, plays games on her PS5, and plays the bass. </p>
            </div>
        </section>
        </>
    )
}