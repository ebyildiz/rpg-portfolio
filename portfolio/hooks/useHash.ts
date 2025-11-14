// app/components/ActiveHashIndicator.tsx
"use client"
import { useContext } from "react"
import {HashContext} from "@/app/home/HashProvider"

export function useHash() {
  const context = useContext(HashContext)
  if (!context)
    throw new Error("useHash must be used within a HashProvider")
  return context
}