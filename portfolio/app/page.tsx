"use client";
import useChainedTypeWriter from "@/hooks/useChainedTypewriter";
import {jersey10} from "@/app/ui/font"
import Image from "next/image";
import front from "@/images/front.png"
import jump from "@/images/jump.png"
import { useEffect, useState } from "react";
import Link from "next/link"


export default function Home() {

  const [done, setDone] = useState(false)
  const [imgIndex, setImgIndex] = useState(1)
  const images = [front, jump]

  useEffect(()=>{
    const interval = setInterval(()=>setImgIndex(prev=>prev===0? 1:0), 1000)
    return () => clearInterval(interval)
  }, [])

  const first = "Hi! my name is Elif."
  const second = "Help me become a frontend developer :)"

  const typed = useChainedTypeWriter([first, second], 80, 500, ()=>{setDone(true)})

  return (

    <div className="flex flex-col place-items-center h-full p-30">
      {imgIndex === 0 ? 
        <Image src={images[imgIndex]} className="object-contain w-[118px] h-[280px] image-render-pixel" alt="front image of my character" width={80} height={161}/>
        :
        <Image src={images[imgIndex]} className="object-contain w-[150px] h-[280px] image-render-pixel" alt="front image of my character" width={118} height={197}/>
      }
      {typed.map((line, i) => (
        <h1 className={jersey10.className + " text-[30px] text-center md:text-[50px]"} key={i}>{line}</h1>
      ))}
      {done && <Link href="/home"><button className={jersey10.className + " pixel-btn"} >Start Journey</button></Link>}
    </div>
  );
}
