"use client";
import SmoothLink from "./SmoothLink";
import { useEffect, useRef, useState } from "react";
import { useHash } from "@/hooks/useHash";

export default function Header() {

    const headerRef = useRef<HTMLElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Create the sentinel dynamically
      const sentinel = document.createElement("div");
      sentinel.style.position = "absolute";
      sentinel.style.top = "100px"; 
      sentinel.style.height = "1px"; // required for IntersectionObserver
      document.body.prepend(sentinel);
      sentinelRef.current = sentinel;
  
      const headerEl = headerRef.current;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio < 1) {
            headerEl?.classList.add("is-sticky");
          } else {
            headerEl?.classList.remove("is-sticky");
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [0, 1],
        }
      );
  
      observer.observe(sentinel);
  
      return () => {
        observer.disconnect();
        sentinel.remove(); // cleanup sentinel
      };
    }, []);

    return (
        <div className="hidden lg:block">

        <header ref={headerRef}
            className={`sticky top-10 header-base mx-auto flex flex-row justify-center items-center
      rounded-[20px] w-[1000px] z-50 gap-17 text-[25px]
      bg-[#0a0a0a]/80 backdrop-blur-md h-[70px]`}
        >
            <SmoothLink linkHash="mycharacter">My Character</SmoothLink>
            <SmoothLink linkHash="skills">Skills</SmoothLink>
            <SmoothLink linkHash="career">Career Journey</SmoothLink>
            <SmoothLink linkHash="certificates">Certificates</SmoothLink>
            <SmoothLink linkHash="project">Project Journey</SmoothLink>
        </header>
        </div>
    );
}


