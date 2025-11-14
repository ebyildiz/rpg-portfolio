'use client'
import CareerJourney from "@/app/home/CareerJourney"
import MyCharacter from "./MyCharacter"
import { useRef } from "react";
import Section from "./Section";
import Certificates from "./Certificates";
import Skills from "./Skills";
import usePixelHashScroll from "@/hooks/usePixelHashScroll";
import Link from "next/link";
import SmoothLink from "./SmoothLink";

export default function Home() {

    const mycharRef = useRef<HTMLElement | null>(null)
    const skillsRef = useRef<HTMLElement | null>(null)
    const careerRef = useRef<HTMLElement | null>(null)
    const certsRef = useRef<HTMLElement | null>(null)

    usePixelHashScroll([mycharRef, skillsRef, careerRef, certsRef]);

    return (
        <div className="flex flex-col justify-center align-center items-center gap-20">
            <Section id='mycharacter' refSection={mycharRef}>
            < div className="flex flex-col justify-center align-center items-center gap-[-50px]">
                <h1 className="text-[50px] mt-[10px]">ELIF&#39;S SOFTWARE ENGINEER JOURNEY</h1>
                <div className="flex flex-row items-center gap-[30px] mt-7 mb-3">
                <SmoothLink linkHash="career" styling="exp-button" whenHovered="hover:bg-[#FF91FA] hover:text-[black]">Experience</SmoothLink>
                <SmoothLink linkHash="project" styling="gradient-button" whenHovered=" hover:text-[black]">Projects</SmoothLink>
                </div>
                <MyCharacter />
            </div>
            </Section>
            <Section id='skills' refSection={skillsRef}>
                <Skills />
            </Section>
            <Section id='career' refSection={careerRef}>
                <CareerJourney />
            </Section>
            <Section id='certificates' refSection={certsRef}>
                <Certificates />
            </Section>
        </div>

    )
}