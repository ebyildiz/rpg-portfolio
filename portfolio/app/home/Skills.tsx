'use client'
import Image from "next/image"
import html from "@/images/logos/html.png"
import css from "@/images/logos/css.png"
import javascript from "@/images/logos/javascript.png"
import typescript from "@/images/logos/typescript.png"
import react from "@/images/logos/react.png"
import tailwindLight from "@/images/logos/tailwindLight.png"
import node from "@/images/logos/node.png"
import nextLight from "@/images/logos/nextLight.png"
import cpp from "@/images/logos/cpp.png"
import java from "@/images/logos/java.png"
import python from "@/images/logos/python.png"
import firebase from "@/images/logos/firebase.png"
import azure from "@/images/logos/azure.png"
import expo from "@/images/logos/expo.png"
import git from "@/images/logos/git.png"
import prisma from "@/images/logos/prisma.png"
import powerbi from "@/images/logos/powerbi.png"
import { useState } from "react"
import Logo from "./Logo"
import { useInView } from "react-intersection-observer";
import Line from "./Line"

export default function Skills() {
    const [selected, setSelected] = useState<string>("frontend")

    const { ref, inView } = useInView({
        threshold: 0.4,     // Trigger when 40% of the element is visible
        triggerOnce: false,  // Only animate the first time it appears
    });

    return (
        <section className="min-w-screen p-[40px] flex flex-col place-items-center ">
            <h1 className="text-[40px] underline underline-offset-10 mb-[10]">Skills</h1>
            <div className="flex flex-row place-items-center gap-[50] h-[130px]">
                <Line />
                <button className={`skillsButton px-5 md:px-10 ${selected === "frontend" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("frontend")}>frontend</button>
                <Line />
                <button className={`skillsButton px-5 md:px-10 ${selected === "backend" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("backend")}>backend</button>
                <Line />
                <button className={`skillsButton px-5 md:px-10 ${selected === "technologies" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("technologies")}>technologies</button>
                <Line />
            </div>


            <div ref={ref} className="relative rounded-[400px] w-[400px] h-[400px] p-10 bg-[#878383] md:w-[650px] lg:w-[650px] shadow-[0_50px_200px_rgba(0,0,0,0.9),_inset_0_0_200px_rgba(0,0,0,0.95)]" key={selected}>
                {
                    selected === "frontend" ?
                        <>
                            <Logo classN={`${inView ? "popup-visible w-[100px] md:w-[130px]" : "popup-invisible"}`} txt="html" pos="top-[60px] left-[80] popup-element" ><Image src={html} width={130} height={50} alt="html logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[100px] md:w-[130px]" : "popup-invisible"}`} txt="css" pos="top-[40px] left-[200] md:top-[60px] md:left-[420] popup-element" ><Image src={css} width={130} height={50} alt="css logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[70px] md:w-[90px]" : "popup-invisible"}`} txt="javascript" pos="top-[170px] left-[50px] md:top-[220px] md:left-[90px] popup-element" ><Image src={javascript} width={90} height={50} alt="javascript logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[100px] md:w-[120px]" : "popup-invisible"}`} txt="typescript" pos="top-[160px] left-[150px] md:top-[200px] md:left-[245px] popup-element" ><Image src={typescript} width={120} height={100} alt="typescript logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[100px] md:w-[120px]" : "popup-invisible"}`} txt="react" pos="top-[150px] left-[270] md:top-[40px] md:left-[260] popup-element" ><Image src={react} width={120} height={150} alt="react logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[200px] md:w-[250px]" : "popup-invisible"}`} txt="tailwind css" pos="top-[220px] left-[100px] md:top-[280px] md:left-[230px] popup-element" ><Image src={tailwindLight} width={170} height={50} alt="tailwind logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[100px] md:w-[120px]" : "popup-invisible"}`} txt="next js" pos="top-[325px] left-[140px] md:top-[250px] md:left-[435px] popup-element" ><Image src={nextLight} width={120} height={50} alt="nextLight logo" /></Logo>

                        </>

                        :
                        (
                            selected === "technologies" ?
                                <>
                                <Logo classN={`${inView ? "popup-visible w-[70px] md:w-[90px]" : "popup-invisible"}`} txt="firebase" pos="top-[50px] left-[100px] md:top-[40px] md:left-[280px] popup-element" ><Image src={firebase} width={130} height={50} alt="firebase logo" /></Logo>
                                <Logo classN={`${inView ? "popup-visible w-[70px] md:w-[90px]" : "popup-invisible"}`} txt="azure" pos="top-[180px] left-[40px] md:top-[80px] md:left-[110px] popup-element" ><Image src={azure} width={150} height={50} alt="azure logo" /></Logo>
                                <Logo classN={`${inView ? "popup-visible w-[70px] md:w-[90px]" : "popup-invisible"}`} txt="expo" pos="top-[275px] left-[150px] md:top-[245px] md:left-[125px] popup-element" ><Image src={expo} width={130} height={50} alt="expo logo" /></Logo>
                                <Logo classN={`${inView ? "popup-visible w-[80px] md:w-[100px]" : "popup-invisible"}`} txt="git" pos="top-[160px] left-[150px] md:top-[195px] md:left-[270px] popup-element" ><Image src={git} width={120} height={50} alt="git logo" /></Logo>
                                <Logo classN={`${inView ? "popup-visible w-[70px] md:w-[90px]" : "popup-invisible"}`} txt="prisma" pos="top-[60px] left-[230px] md:top-[80px] md:left-[435px] popup-element" ><Image src={prisma} width={130} height={50} alt="prisma logo" /></Logo>
                                <Logo classN={`${inView ? "popup-visible w-[60px] md:w-[70px]" : "popup-invisible"}`} txt="power bi" pos="top-[180px] left-[285px] md:top-[250px] md:left-[440px] popup-element" ><Image src={powerbi} width={150} height={50} alt="powerbi logo" /></Logo>
                                </>
                                :
                                <>
                                    <Logo classN={`${inView ? "popup-visible w-[120px] md:w-[140px]" : "popup-invisible"}`} txt="node js" pos="top-[160px] left-[220px] md:top-[160px] md:left-[420px] popup-element" ><Image src={node} width={140} height={50} alt="node logo" /></Logo>
                                    <Logo classN={`${inView ? "popup-visible w-[95px] md:w-[125px]" : "popup-invisible"}`} txt="cpp" pos="top-[260px] left-[130px] md:top-[50px] md:left-[280px] popup-element" ><Image src={cpp} width={130} height={50} alt="cpp logo" /></Logo>
                                    <Logo classN={`${inView ? "popup-visible w-[75px] md:w-[95px]" : "popup-invisible"}`} txt="java" pos="top-[100px] left-[60px] md:top-[80px] md:left-[90px] popup-element" ><Image src={java} width={130} height={50} alt="java logo" /></Logo>
                                    <Logo classN={`${inView ? "popup-visible w-[80px] md:w-[105px]" : "popup-invisible"}`} txt="python" pos="top-[70px] left-[190px] md:top-[240px] md:left-[230px] popup-element" ><Image src={python} width={130} height={50} alt="python logo" /></Logo>
                                </>

                        )


                }
            </div>

        </section>
    )
}