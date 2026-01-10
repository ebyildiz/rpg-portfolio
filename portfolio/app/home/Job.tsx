"use client";

import Image, { StaticImageData } from "next/image";
import LongLine from "./LongLine";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function Job({
  picture,
  company,
  position,
  description,
  DateBegin,
  DateEnd,
  linePos,
}: {
  picture: StaticImageData;
  company: string;
  position: string;
  description: string;
  DateBegin: string;
  DateEnd: string;
  linePos: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const slideVariants: Variants = {
    hidden: {
      opacity: 0,
      x: linePos === "left" ? -80 : 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.6, 0.25, 0.6],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={slideVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="
        flex flex-col
        lg:flex-row
        items-center
        w-full
        gap-6 lg:gap-0
      "
    >
      {/* Left line (desktop only) */}
      {linePos === "left" && (
        <div className="hidden lg:block">
          <LongLine />
        </div>
      )}

      {/* Company card */}
      <div
        className="
          flex flex-col items-center
          bg-[#ded9d9]
          rounded-lg
          p-4 sm:p-6
          w-full max-w-[280px]
        "
      >
        <Image
          src={picture}
          alt={company}
          width={90}
          height={90}
          className="rounded-md mb-3"
        />
        <h3 className="text-black text-[16px] sm:text-[18px] text-center">
          {company}
        </h3>
      </div>

      {/* Job details */}
      <div
        className="
          flex flex-col items-center
          bg-gray-900
          rounded-lg
          p-5
          w-full
          max-w-[500px]
          text-center
        "
      >
        <h2 className="text-[20px] sm:text-[24px] font-semibold">
          {position}
        </h2>
        <p className="text-[14px] sm:text-[15px] mb-3">
          {DateBegin} – {DateEnd}
        </p>
        <p className="text-[15px] sm:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right line (desktop only) */}
      {linePos === "right" && (
        <div className="hidden lg:block">
          <LongLine />
        </div>
      )}
    </motion.section>
  );
}
