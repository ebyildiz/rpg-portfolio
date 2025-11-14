"use client";
import { createContext, useState, useEffect } from "react";

export const HashContext = createContext({
  hash: "",
  setHash: (value: string) => {},
});

export function HashProvider({ children }:{children: React.ReactNode}) {
  const [hash, setHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash.replace("#", "") || "mycharacter";
    }
    return "mycharacter"; // fallback during SSR
  });

  // Sync with back/forward navigation
  useEffect(() => {
    const onHashChange = () =>
      setHash(window.location.hash.replace("#", ""));

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <HashContext.Provider value={{ hash, setHash }}>
      {children}
    </HashContext.Provider>
  );
}
