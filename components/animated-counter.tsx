"use client"

import { useRef, useEffect, useState } from "react"
import { useCounter } from "@/hooks/use-counter"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const count = useCounter({ end, start: 0, duration, delay: 300 })

  useEffect(() => {
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
  }, [])

  return (
    <div ref={counterRef} className={className}>
      {isVisible ? (
        <>
          {prefix}
          {count}
          {suffix}
        </>
      ) : (
        <>
          {prefix}0{suffix}
        </>
      )}
    </div>
  )
}
