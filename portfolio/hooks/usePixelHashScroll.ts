"use client";

import { useEffect } from "react";
import { useHash } from "@/hooks/useHash";

export default function usePixelHashScroll(sectionRefs: (React.RefObject<HTMLElement|null>)[]) {
  const { hash, setHash } = useHash();

  useEffect(() => {
    const HEADER_HEIGHT = 120;

    const handleScroll = () => {
      let closestId = hash;
      let closestDistance = Infinity;

      sectionRefs.forEach((ref) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const distance = Math.abs(rect.top - HEADER_HEIGHT);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = ref.current.id;
        }
      });

      // Only update if needed to avoid unnecessary renders
      if (closestId !== hash) {
        history.replaceState(null, "", `#${closestId}`);
        setHash(closestId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once at load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, hash, setHash]);
}
