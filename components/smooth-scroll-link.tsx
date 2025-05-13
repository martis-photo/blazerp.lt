"use client"

import type React from "react"
import type { ReactNode } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className = "" }: SmoothScrollLinkProps) {
  const { scrollToElement } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    scrollToElement(targetId)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
