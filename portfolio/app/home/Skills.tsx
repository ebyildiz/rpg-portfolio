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
                <Line/>
                <button className={`skillsButton ${selected === "frontend" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("frontend")}>frontend</button>
                <Line/>
                <button className={`skillsButton ${selected === "backend" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("backend")}>backend</button>
                <Line/>
                <button className={`skillsButton ${selected === "technologies" ? "bg-[#FFFFFF] text-[#000000]" : "bg-[#000000]"}`} onClick={() => setSelected("technologies")}>technologies</button>
                <Line/>
            </div>


            <div ref={ref} className={"relative rounded-[400px] w-[200px] h-[400px] bg-[#2b2b2a] md:w-[650px] lg:w-[650px]"}>
                {
                    selected === "frontend" ?
                        <>
                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[130px]" : "popup-invisible"}`} txt="html" pos="top-[50px] left-[90]" ><Image src={html} width={130} height={50} alt="html logo"/></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[130px]" : "popup-invisible"}`} txt="css" pos="top-[45px] left-[400] popup-element" ><Image src={css} width={130} height={50} alt="css logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[90px]" : "popup-invisible"}`} txt="javascript" pos="top-[230px] left-[90px] popup-element" ><Image src={javascript} width={90} height={50} alt="javascript logo" /></Logo>
                            
                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[100px]" : "popup-invisible"}`} txt="typescript" pos="top-[200px] left-[240px] popup-element" ><Image src={typescript} width={100} height={50} alt="typescript logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[120px]" : "popup-invisible"}`} txt="react" pos="top-[40px] left-[260] popup-element" ><Image src={react} width={120} height={150} alt="react logo" /></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[170px]" : "popup-invisible"}`} txt="tailwind css" pos="top-[280px] left-[180px] popup-element" ><Image src={tailwindLight} width={170} height={50} alt="tailwind logo"/></Logo>

                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[140px]" : "popup-invisible"}`} txt="node js" pos="top-[160px] left-[400px] popup-element" ><Image src={node} width={140} height={50} alt="node logo" /></Logo>
                            <Logo classN={`${inView ? "popup-visible w-[30px] md:w-[120px]" : "popup-invisible"}`} txt="next js" pos="top-[320px] left-[400px] popup-element" ><Image src={nextLight} width={120} height={50} alt="nextLight logo" /></Logo>

                        </>

                        : null

                }
            </div>

        </section>
    )
}