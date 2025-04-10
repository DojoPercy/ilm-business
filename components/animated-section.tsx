"use client"

import type React from "react"

import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useAnimationOnScroll({ threshold })

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-up":
        return "animate-slide-up"
      case "slide-in-left":
        return "animate-slide-in-left"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "zoom-in":
        return "animate-zoom-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div ref={ref} className={cn(className, getAnimationClass())} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
