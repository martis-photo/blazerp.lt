"use client"

import { useParallax } from "@/hooks/use-parallax"
import Image from "next/image"

interface ParallaxBackgroundProps {
  src: string
  alt: string
  className?: string
  speed?: number
  overlayClassName?: string
}

export function ParallaxBackground({
  src,
  alt,
  className = "",
  speed = 0.15,
  overlayClassName = "",
}: ParallaxBackgroundProps) {
  const { transform } = useParallax({ speed })

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        style={{
          transform,
          willChange: "transform",
          height: "calc(100% + 200px)",
          marginTop: "-100px",
        }}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
      </div>
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  )
}
