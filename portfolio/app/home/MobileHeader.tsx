"use client";

import { useState } from "react";
import SmoothLink from "./SmoothLink";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          z-50
          bg-[#0a0a0a]/80 backdrop-blur-md
          rounded-full
          px-5 py-3
          flex items-center justify-between
          w-[90%] max-w-[360px]
        "
      >
        <div className="w-6 h-6" />

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[5px]"
          aria-label="Open menu"
        >
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-down menu */}
      <div
        className={`
          fixed top-20 left-1/2 -translate-x-1/2
          z-50
          w-[90%] max-w-[360px]
          bg-[#0a0a0a]/90 backdrop-blur-md
          rounded-2xl
          px-6 py-6
          flex flex-col gap-4
          transition-all duration-300 ease-out
          ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        {[
          ["mycharacter", "My Character"],
          ["skills", "Skills"],
          ["career", "Experience"],
          ["certificates", "Certificates"],
          ["projects", "Project Journey"],
          ["contactme", "Contact Me"],
        ].map(([hash, label]) => (
          <div
            key={hash}
            onClick={() => setOpen(false)}
            className="text-left"
          >
            <SmoothLink linkHash={hash}>
              <span className="text-white text-[18px]">
                {label}
              </span>
            </SmoothLink>
          </div>
        ))}
      </div>
    </div>
  );
}
