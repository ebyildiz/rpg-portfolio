import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { nanoid } from "nanoid";

function Skill({ name }: { name: string }) {
  return (
    <span
      className="
        bg-[#3b3b3b] text-white text-[16px]
        rounded-md px-3 py-1 mr-2 mb-2 inline-block
        hover:scale-110 transition-transform
      "
    >
      {name}
    </span>
  );
}

function Links({
  githublink,
  livelink,
}: {
  githublink: string;
  livelink: string | "nolink";
}) {
  return (
    <div className="flex gap-3 justify-center lg:justify-start mt-2">
      <Link
        href={githublink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-[#ff85ef] text-[18px] underline
          bg-white rounded-md px-4 py-2
          hover:scale-110 hover:bg-[#40223f] transition
        "
      >
        GitHub
      </Link>

      {livelink !== "nolink" && (
        <Link
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-[#ff85ef] text-white text-[18px] underline
            rounded-md px-4 py-2
            hover:scale-110 hover:bg-[#40223f] transition
          "
        >
          Live
        </Link>
      )}
    </div>
  );
}

export default function Project({
  image,
  name,
  description,
  githublink,
  livelink = "nolink",
  imagePos,
  skills,
}: {
  image: StaticImageData;
  imagePos: "left" | "right";
  name: string;
  description: string;
  githublink: string;
  livelink?: string;
  skills: string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const slideVariants: Variants = {
    hidden: {
      opacity: 0,
      x: imagePos === "left" ? -80 : 80,
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
      className={`
        flex flex-col items-center gap-8
        lg:flex-row ${imagePos === "right" ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        className="
          w-full max-w-xs
          rounded-lg border-2 border-black
          hover:scale-105 hover:shadow-lg transition-transform
        "
        priority={false}
      />

      {/* Content */}
      <div
        className="
          flex flex-col gap-4
          border-2 border-black rounded-lg p-5
          w-full max-w-prose
          text-center lg:text-left
          hover:shadow-lg transition
        "
      >
        <h2 className="text-[24px] font-bold">{name}</h2>

        <p className="text-[18px]">
          {description}
        </p>

        <div>
          {skills.map((skill) => (
            <Skill key={nanoid()} name={skill} />
          ))}
        </div>

        <Links githublink={githublink} livelink={livelink} />
      </div>
    </motion.section>
  );
}
