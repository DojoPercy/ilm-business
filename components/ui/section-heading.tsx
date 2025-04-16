"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  align?: "left" | "center" | "right"
  animateOnScroll?: boolean
  lineColor?: string
  lineWidth?: string
  lineHeight?: string
}

export function SectionHeading({
  children,
  className = "",
  align = "left",
  animateOnScroll = true,
  lineColor = "bg-brand-red",
  lineWidth = "w-20",
  lineHeight = "h-0.5",
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animateOnScroll || !headingRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(headingRef.current)

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current)
    }
  }, [animateOnScroll])

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const lineAlignment = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  }

  return (
    <div
      ref={headingRef}
      className={cn(
        "section-heading-container",
        alignmentClasses[align],
        animateOnScroll ? "opacity-0 transition-all duration-700 -translate-y-4" : "",
        animateOnScroll && "is-visible:opacity-100 is-visible:translate-y-0",
        className,
      )}
    >
      <h2 className={cn("text-3xl font-bold mb-6")}>{children}</h2>
      <div className={cn(lineColor, lineHeight, lineWidth, lineAlignment[align], "transition-all duration-300")} />
    </div>
  )
}
