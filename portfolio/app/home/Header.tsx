"use client";
import SmoothLink from "./SmoothLink";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "100px";
    sentinel.style.height = "1px";
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
      sentinel.remove();
    };
  }, []);

  return (
    <div className="hidden md:block ">
      <header
        ref={headerRef}
        className="
          fixed top-15 left-1/2 -translate-x-1/2
          header-base
          mx-auto
          flex flex-row items-center justify-center
          rounded-[20px]
          w-full
          max-w-[900px]
          lg:max-w-[1200px]
          xl:max-w-[1400px]
          gap-6 lg:gap-10 xl:gap-14
          text-[18px] lg:text-[22px] xl:text-[25px]
          h-[56px] lg:h-[64px] xl:h-[72px]
          z-50
          bg-[#0a0a0a]/80 backdrop-blur-md
        "
      >
        <SmoothLink linkHash="mycharacter">My Character</SmoothLink>
        <SmoothLink linkHash="skills">Skills</SmoothLink>
        <SmoothLink linkHash="career">Experience</SmoothLink>
        <SmoothLink linkHash="certificates">Certificates</SmoothLink>
        <SmoothLink linkHash="projects">Project Journey</SmoothLink>
        <SmoothLink linkHash="contactme">Contact Me</SmoothLink>
      </header>
    </div>
  );
}
