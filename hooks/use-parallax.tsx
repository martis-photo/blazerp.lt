"use client"

import { useState, useEffect } from "react"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function useParallax({ speed = 0.2, direction = "up", reverse = false }: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setOffset(scrollPosition)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getTransform = () => {
    const value = offset * speed * (reverse ? -1 : 1)

    switch (direction) {
      case "up":
        return `translate3d(0, ${-value}px, 0)`
      case "down":
        return `translate3d(0, ${value}px, 0)`
      case "left":
        return `translate3d(${-value}px, 0, 0)`
      case "right":
        return `translate3d(${value}px, 0, 0)`
      default:
        return `translate3d(0, ${-value}px, 0)`
    }
  }

  return { transform: getTransform(), offset }
}
