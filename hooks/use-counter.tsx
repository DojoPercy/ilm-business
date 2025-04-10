"use client"

import { useState, useEffect } from "react"

interface UseCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
}

export function useCounter({ end, start = 0, duration = 2000, delay = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number
    let animationFrame: number
    let currentCount = start
    const totalChange = end - start

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed > delay) {
        const progress = Math.min((elapsed - delay) / duration, 1)
        const easedProgress = easeOutQuad(progress)
        currentCount = start + Math.floor(easedProgress * totalChange)
        setCount(currentCount)
      }

      if (elapsed < duration + delay && currentCount < end) {
        animationFrame = requestAnimationFrame(countUp)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, start, duration, delay])

  return count
}

// Easing function for smoother animation
function easeOutQuad(x: number): number {
  return 1 - (1 - x) * (1 - x)
}
