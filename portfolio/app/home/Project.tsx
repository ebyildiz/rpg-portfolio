import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { nanoid } from 'nanoid';

export default function Project({image, name, description, githublink, livelink="nolink", imagePos, skills}: {image:StaticImageData, imagePos:"left"|"right", name: string, description: string, githublink:string, livelink?: string, skills: string[]}) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })

    const slideVariants: Variants = {
        hidden: {
          opacity: 0,
          x: imagePos === "left" ? -100 : 100,
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

    function Skill({name}: {name: string}) {
        return (
            <span className="bg-[#3b3b3b] hover:scale-110 text-white text-[15px] rounded-md px-3 py-1 mr-2 mb-2 inline-block">{name}</span>
        )
    }

    const skillsList = skills.map((skill) => <Skill key={nanoid()} name={skill} />);

    return (
        <motion.section
      ref={ref}
      variants={slideVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row md:flex-row md:justify-center md:items-center gap-5 md:gap-10">
            {imagePos === "left" && <Image className="mb-5 border-2 border-black rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 md:w-[400px]" src={image} alt={name} width={600} height={400} />}

        <div className="border-2 border-black rounded-lg p-5 w-full md:w-[600px] hover:shadow-lg transition-transform duration-300">

            <h2 className="text-[25px] font-bold mb-3">{name}</h2>
            <p className="mb-4">{description}</p>
            <div className="mb-4">
                {skillsList}
            </div>
            <Link href={githublink}  target="_blank" rel="noopener noreferrer" className="text-[#ff85ef] text-[25px] underline hover:scale-110 cursor-pointer bg-white rounded-md md:px-7 md:py-1 hover:bg-[#40223f]">GitHub</Link>
            {
                livelink !== "nolink" &&
                <>
                    {" | "}
                    <Link href={livelink} target="_blank" rel="noopener noreferrer" className="bg-[#ff85ef] text-white text-[25px] underline hover:scale-110 cursor-pointer rounded-md md:px-7 md:py-1 hover:bg-[#40223f]">Live Link</Link>
                </>
            }
            
        </div>

        {imagePos === "right" && <Image className="mt-5 border-2 border-black rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 md:w-[400px]" src={image} alt={name} width={600} height={400} />}
        </motion.section>
    )

}