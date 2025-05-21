"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "slide-up" | "zoom-in" | "none"
  delay?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 30 : 0,
      x: animation === "slide-in-left" ? -30 : animation === "slide-in-right" ? 30 : 0,
      scale: animation === "zoom-in" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing function for smoother animation
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={animation === "none" ? "visible" : "hidden"}
      animate={inView || animation === "none" ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
