'use client'
import CareerJourney from "@/app/home/CareerJourney"
import MyCharacter from "./MyCharacter"
import { useRef } from "react";
import Section from "./Section";
import Certificates from "./Certificates";
import Skills from "./Skills";
import usePixelHashScroll from "@/hooks/usePixelHashScroll";
import Link from "next/link";

export default function Home() {

    const mycharRef = useRef<HTMLElement | null>(null)
    const skillsRef = useRef<HTMLElement | null>(null)
    const careerRef = useRef<HTMLElement | null>(null)
    const certsRef = useRef<HTMLElement | null>(null)

    usePixelHashScroll([mycharRef, skillsRef, careerRef, certsRef]);

    return (
        <div className="flex flex-col justify-center align-center items-center">
            <h1 className="text-[50px] mt-[50px] mb-[-30px]">ELIF&#39;S SOFTWARE ENGINEER JOURNEY</h1>
            <Section id='mycharacter' refSection={mycharRef}>
                <MyCharacter />
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