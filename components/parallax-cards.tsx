"use client"

import type React from "react"
import { type ReactNode, useRef, useState } from "react"

interface ParallaxCardProps {
  children: ReactNode
  className?: string
  depth?: number
}

export function ParallaxCard({ children, className = "", depth = 20 }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) / centerX
    const moveY = (y - centerY) / centerY

    setPosition({ x: moveX * depth, y: moveY * depth })
  }

  return (
    <div
      ref={cardRef}
      className={`parallax-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setPosition({ x: 0, y: 0 })
      }}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${-position.y}deg) rotateY(${position.x}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
        transition: isHovering ? "none" : "all 0.5s ease",
      }}
    >
      {children}
    </div>
  )
}
