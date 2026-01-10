"use client";

import Image from "next/image";
import front from "@/images/front.png";
import right from "@/images/right.png";
import left from "@/images/left.png";
import back from "@/images/back.png";
import turnR from "@/images/turnRight.png";
import turnL from "@/images/turnLeft.png";
import { useState } from "react";

export default function MyCharacter() {
  const [imageIdx, setImageIdx] = useState(0);

  const images = [front, right, back, left];

  function turnLeft() {
    setImageIdx((prev) => (prev === 0 ? 3 : prev - 1));
  }

  function turnRight() {
    setImageIdx((prev) => (prev === 3 ? 0 : prev + 1));
  }

  return (
    <section
      className="
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-20
        place-items-center
        px-5 sm:px-10 md:px-20
        pt-8 md:pt-[50px]
      "
    >
      {/* Character + Controls */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-3 sm:gap-5">
          <button onClick={turnLeft} className="cursor-pointer">
            <Image
              src={turnL}
              alt="turn left"
              width={70}
              height={60}
              className="
                object-contain
                w-[48px] h-[44px]
                sm:w-[60px] sm:h-[55px]
              "
            />
          </button>

          <Image
            src={images[imageIdx]}
            alt="character"
            width={150}
            height={200}
            className="
              object-contain
              w-[160px] h-[200px]
              sm:w-[190px] sm:h-[230px]
              md:w-[220px] md:h-[260px]
            "
          />

          <button onClick={turnRight} className="cursor-pointer">
            <Image
              src={turnR}
              alt="turn right"
              width={70}
              height={60}
              className="
                object-contain
                w-[48px] h-[44px]
                sm:w-[60px] sm:h-[55px]
              "
            />
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center lg:items-start">
        <h1
          className="
            text-center lg:text-left
            text-[24px] sm:text-[30px] md:text-[40px]
            underline underline-offset-8
            mb-4 sm:mb-6
          "
        >
          About Me
        </h1>

        <p
          className="
            text-center lg:text-left
            text-[16px] sm:text-[18px] md:text-[20px]
            leading-relaxed
            max-w-[34rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-[48rem]
            px-2 sm:px-0
          "
        >
          This is Elif Yildiz and she has recently graduated from UCSD with a
          degree in Math and Computer Science. Since she graduated, she has been
          improving her software engineering skills through Scrimba and making
          various projects that help her learn and grow even more. She finished
          her latest project MyCuteChat in September, and she is currently
          working on finishing up the mobile app for TilkieTalkie. She enjoys
          web/mobile development and is always willing to learn new things! In
          her free time, Elif rock climbs, plays games on her PS5, and plays the
          bass.
        </p>
      </div>
    </section>
  );
}
