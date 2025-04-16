// Animation utility functions
export const observeElements = () => {
  if (typeof window === "undefined") return

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  }

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        // Once the animation has played, we can stop observing the element
        if (!entry.target.classList.contains("keep-observing")) {
          observer.unobserve(entry.target)
        }
      } else {
        // For elements that need to animate again when out of view
        if (entry.target.classList.contains("keep-observing")) {
          entry.target.classList.remove("is-visible")
        }
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersect, observerOptions)

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element)
  })

  return observer
}

// Function for magnetic effect on elements
export const applyMagneticEffect = (element: HTMLElement, strength = 20) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate distance from center
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    // Only apply effect when mouse is within a certain range
    if (distance < rect.width) {
      // Calculate the effect strength based on distance
      const effectX = (distanceX / rect.width) * strength
      const effectY = (distanceY / rect.height) * strength

      element.style.transform = `translate(${effectX}px, ${effectY}px)`
    }
  }

  const handleMouseLeave = () => {
    element.style.transform = "translate(0, 0)"
  }

  element.addEventListener("mousemove", handleMouseMove)
  element.addEventListener("mouseleave", handleMouseLeave)

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove)
    element.removeEventListener("mouseleave", handleMouseLeave)
  }
}

// Function for 3D tilt effect on cards
export const applyTiltEffect = (element: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = (e.clientY - centerY) / 10
    const rotateY = -(e.clientX - centerX) / 10

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    element.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
  }

  element.addEventListener("mousemove", handleMouseMove)
  element.addEventListener("mouseleave", handleMouseLeave)

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove)
    element.removeEventListener("mouseleave", handleMouseLeave)
  }
}

// Parallax scroll effect
export const applyParallaxEffect = () => {
  if (typeof window === "undefined") return

  const handleScroll = () => {
    const scrollY = window.scrollY

    document.querySelectorAll(".parallax-slow, .parallax-fast").forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollY
      const elementHeight = (element as HTMLElement).offsetHeight
      const windowHeight = window.innerHeight

      // Only apply effect when element is in view
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const speed = element.classList.contains("parallax-slow") ? 0.1 : 0.2
        const yValue = (scrollY - elementTop) * speed
        ;(element as HTMLElement).style.setProperty("--parallax-y", `${yValue}px`)
      }
    })
  }

  window.addEventListener("scroll", handleScroll)

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}
