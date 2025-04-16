"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimalPlaces?: number
  startOnView?: boolean
}

export function AnimatedCounter({
  end,
  duration = 2500,
  prefix = "",
  suffix = "",
  className = "",
  decimalPlaces = 0,
  startOnView = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(!startOnView)
  const counterRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const formatNumber = (num: number) => {
    return num.toFixed(decimalPlaces)
  }

  // Animation function to count up to the target number
  const animateCounter = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const elapsed = timestamp - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)

    // Easing function to make the animation more natural
    const easeOutQuad = (t: number) => t * (2 - t)
    const easedProgress = easeOutQuad(progress)

    const currentCount = Math.min(easedProgress * end, end)
    setCount(currentCount)

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animateCounter)
    } else {
      setCount(end)
    }
  }

  useEffect(() => {
    if (isVisible && animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(animateCounter)
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible, end])

  useEffect(() => {
    if (!startOnView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [startOnView])

  return (
    <div ref={counterRef} className={`${className}`}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  )
}
