"use client"

import { useEffect, useRef, useState } from "react"

interface UseAnimationOnScrollProps {
  threshold?: number
  rootMargin?: string
}

export function useAnimationOnScroll({ threshold = 0.1, rootMargin = "0px" }: UseAnimationOnScrollProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
