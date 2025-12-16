import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { nanoid } from 'nanoid';

function Links({ md, livelink, githublink }: { md: boolean, livelink: string | "nolink", githublink: string }) {
  return (
    <div className={`flex flex-col md:flex-row place-items-center gap-2 ${md ? "hidden md:block" : "block md:hidden"}`}>
      <Link href={githublink} target="_blank" rel="noopener noreferrer" className="text-[#ff85ef] text-[25px] underline hover:scale-110 cursor-pointer bg-white rounded-md  px-3 py-1 md:px-7 hover:bg-[#40223f]">GitHub</Link>
      {
        livelink !== "nolink" &&
        <>
          {" | "}
          <Link href={livelink} target="_blank" rel="noopener noreferrer" className="bg-[#ff85ef] text-white text-[25px] underline hover:scale-110 cursor-pointer rounded-md px-3 py-1 md:px-7 hover:bg-[#40223f]">Live Link</Link>
        </>
      }
    </div>
  )
}

function ImagebyPos({ image, name, md }: { image: StaticImageData, name: string, md:boolean }) {
  return ( <Image className={`object-contain mt-5 border-2 border-black rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[250px] ${md? "hidden md:block" : "md:hidden"} `} src={image} alt={name} width={600} height={400} />)
}



export default function Project({ image, name, description, githublink, livelink = "nolink", imagePos, skills }: { image: StaticImageData, imagePos: "left" | "right", name: string, description: string, githublink: string, livelink?: string, skills: string[] }) {

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

  function Skill({ name }: { name: string }) {
    return (
      <span className="bg-[#3b3b3b] hover:scale-110 text-white text-[19px] rounded-md px-3 py-1 mr-2 mb-2 inline-block">{name}</span>
    )
  }



  const skillsList = skills.map((skill) => <Skill key={nanoid()} name={skill} />);

  return (
    <motion.section
      ref={ref}
      variants={slideVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col ${imagePos == "left" ? "place-items-start" : "place-items-end"} md:flex-row  gap-5 md:gap-10`}>


      <div className="flex flex-row place-items-center gap-5 ">
        {
          imagePos == "right" && <Links md={false} githublink={githublink} livelink={livelink} />
        }
        
        {imagePos === "left" && <ImagebyPos image={image} name={name} md={true} />}

        {<ImagebyPos image={image} name={name} md={false}/>}

        {
          imagePos == "left" && <Links md={false} githublink={githublink} livelink={livelink} />
        }

      </div>

      <div className={`flex flex-col ${imagePos == "left" ? "place-items-start" : "place-items-end"} border-2 border-black rounded-lg p-5 hover:shadow-lg transition-transform duration-300`}>

        <h2 className="text-[25px] font-bold mb-3">{name}</h2>
        <p className={`mb-4 text-[20px] w-[300px] md:w-[500px] ${imagePos=="right"? "text-right" : "text-left"}`}>{description}</p>
        <div className="mb-4">
          {skillsList}
        </div>
        <div>

        </div>

        <Links md={true} githublink={githublink} livelink={livelink} />

      </div>

      <div className="flex flex-row place-items-center">
      {imagePos === "right" && <ImagebyPos image={image} name={name} md={true}/>}
        </div>
    </motion.section>
  )

}