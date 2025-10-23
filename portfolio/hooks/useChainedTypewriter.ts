"use client";
import { useEffect, useRef, useState } from "react";

function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useChainedTypewriter(
  messages: string[],
  speed = 80,
  pauseBetween = 500,
  onLoopDone: () => void
) {
  const [output, setOutput] = useState<string[]>([""]);
  const messageIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect( () => {
    let isCancelled = false;

    const type = async () => {
      if (isCancelled) return;
      const currentMessage = messages[messageIndex.current];
      if (!currentMessage) return;

      if (charIndex.current < currentMessage.length) {
        const nextChar = currentMessage.charAt(charIndex.current);
        setOutput((prev) => {
          const copy = [...prev];
          copy[messageIndex.current] =
            (copy[messageIndex.current] || "") + nextChar;
          return copy;
        });

        charIndex.current++;
        
        timeoutRef.current = setTimeout(type, speed);
      } else {
        if (messageIndex.current=== messages.length-1){
          await delay(400);
          onLoopDone();
        }
        if (messageIndex.current < messages.length - 1) {
          timeoutRef.current = setTimeout(() => {
            messageIndex.current++;
            charIndex.current = 0;
            setOutput((prev) => [...prev, ""]); 
            type(); 
          }, pauseBetween);
        }
      }
    };

    type();

    return () => {
      isCancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return output;
}