"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardTiltProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  headerClassName?: string
  footerClassName?: string
  tiltStrength?: number
  glareEnabled?: boolean
  glareMaxOpacity?: number
  glareColor?: string
  gyroscope?: boolean
}

export function CardTilt({
  children,
  className = "",
  contentClassName = "",
  headerClassName = "",
  footerClassName = "",
  tiltStrength = 10,
  glareEnabled = true,
  glareMaxOpacity = 0.3,
  glareColor = "rgba(255, 255, 255, 0.4)",
  gyroscope = false,
}: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const inner = innerRef.current
    const glare = glareRef.current
    if (!card || !inner) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect()

      // Calculate mouse position relative to card
      const x = e.clientX - left
      const y = e.clientY - top

      // Calculate rotation
      const rotateX = ((y - height / 2) / height) * tiltStrength * -1
      const rotateY = ((x - width / 2) / width) * tiltStrength

      // Apply transform to card
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      // For inner content, apply a slight z-transform for depth
      if (inner) {
        inner.style.transform = `translateZ(20px)`
      }

      // Apply glare effect if enabled
      if (glareEnabled && glare) {
        // Calculate glare position
        const glareX = (x / width) * 100
        const glareY = (y / height) * 100

        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, rgba(255,255,255,0) 80%)`
        glare.style.opacity = `${Math.min(((x / width) ** 2 + (y / height) ** 2) * glareMaxOpacity, glareMaxOpacity)}`
      }
    }

    const handleMouseLeave = () => {
      // Reset card transform
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`

      // Reset inner transform
      if (inner) {
        inner.style.transform = `translateZ(0px)`
      }

      // Reset glare
      if (glareEnabled && glare) {
        glare.style.opacity = "0"
      }
    }

    // Handle device orientation if gyroscope is enabled
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!gyroscope || !e.beta || !e.gamma) return

      // Limit tilt to a smaller range for mobile devices
      const rotateX = ((e.beta - 45) / 45) * (tiltStrength / 2)
      const rotateY = (e.gamma / 45) * (tiltStrength / 2)

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      if (inner) {
        inner.style.transform = `translateZ(10px)`
      }
    }

    // Add event listeners
    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    if (gyroscope) {
      window.addEventListener("deviceorientation", handleDeviceOrientation)
    }

    // Cleanup
    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
      if (gyroscope) {
        window.removeEventListener("deviceorientation", handleDeviceOrientation)
      }
    }
  }, [tiltStrength, glareEnabled, glareMaxOpacity, glareColor, gyroscope])

  return (
    <Card ref={cardRef} className={cn("tilt-effect relative transition-all duration-200 transform-gpu", className)}>
      {glareEnabled && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none z-10 opacity-0 transition-opacity duration-200"
        />
      )}
      <div ref={innerRef} className="relative z-20 transition-transform duration-200">
        {typeof children === "function"
          ? children({ CardHeader, CardContent, CardFooter, headerClassName, contentClassName, footerClassName })
          : children}
      </div>
    </Card>
  )
}
