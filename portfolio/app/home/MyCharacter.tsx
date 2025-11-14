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
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center px-20">
            <div className="flex flex-row gap-0">
                <button className="cursor-pointer mr-[-70px]" onClick={turnLeft}>
                    <Image src={turnL} alt="turn left image" width={128} height={128} />
                </button>
                <Image src={images[imageIdx]} alt="character image" width={400} height={400} />
                <button className="cursor-pointer ml-[-80px]" onClick={turnRight}>
                    <Image src={turnR} alt="turn right image" width={128} height={128} />
                </button>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[40px] underline underline-offset-10 mb-[10]">About Me</h1>
                <p className="text-[20px]">This is Elif Yildiz and she has recently graduated from UCSD with a degree in Math and Computer Science. The past couple of months, she has been learning front end development through Scrimba and making various projects that help her learn and grow even more. She has just finished her latest project MyCuteChat, and she is currently learning Rust (questioning her life choices). She enjoys web development and is always willing to learn new things! In her free time, Elif climbs, plays games, and plays the bass. </p>
            </div>
        </section>
        </>
    )
}