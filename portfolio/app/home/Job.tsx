"use client"
import Image, { StaticImageData } from "next/image"
import LongLine from "./LongLine"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

export default function Job({
  picture,
  company,
  position,
  description,
  DateBegin,
  DateEnd,
  linePos
}: {
  picture: StaticImageData,
  company: string,
  position: string,
  description: string,
  DateBegin: string,
  DateEnd: string,
  linePos: "left" | "right"
}) {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const slideVariants: Variants = {
    hidden: {
      opacity: 0,
      x: linePos === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.6, 0.25, 0.6], // cubic-bezier
      },
    },
  }
  

  return (
    <motion.section
      ref={ref}
      variants={slideVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row place-items-center mb-10 px-5 md:px-20"
    >
      {linePos === "left" && <LongLine />}

      <div className="flex flex-col place-items-center bg-[#ded9d9] rounded-[10px] p-2 md:p-10">
        <Image className="mx-5 md:mx-15 md:mb-5 rounded-md"
               src={picture}
               alt={company}
               width={100}
               height={100}
        />
        <h1 className="text-black md:text-[20px] text-center">{company}</h1>
      </div>

      <div className="flex flex-col place-items-center bg-gray-900 md:p-5 rounded-r-md">
        <div className="flex flex-col place-items-center mb-3">
          <h2 className="text-center">{position}</h2>
          <p>{DateBegin} - {DateEnd}</p>
        </div>
        <p className="text-center md:w-80 md:text-[15px]">{description}</p>
      </div>

      {linePos === "right" && <LongLine />}
    </motion.section>
  )
}
