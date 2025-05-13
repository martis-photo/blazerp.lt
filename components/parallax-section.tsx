"use client"

import type { ReactNode } from "react"
import { useParallax } from "@/hooks/use-parallax"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
  direction = "up",
  reverse = false,
}: ParallaxSectionProps) {
  const { transform } = useParallax({ speed, direction, reverse })

  return (
    <div
      className={className}
      style={{
        transform,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
