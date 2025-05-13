"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  scrollToSection: (id: string) => void
}

export function MobileMenu({ scrollToSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleNavigation = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black/95 border-red-900/50 text-white p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-red-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-red-900/50 flex items-center justify-center">
                <span className="text-red-400 font-bold">B</span>
              </div>
              <span className="font-bold text-xl">BlazedRP</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex-1 overflow-auto py-6 px-4">
            <ul className="space-y-6">
              <li>
                <button
                  onClick={() => handleNavigation("features")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("how-to-join")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  How to Join
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("rules")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("gallery")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("players")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  Players
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("discord")}
                  className="text-lg font-medium hover:text-red-400 transition-colors w-full text-left"
                >
                  Discord
                </button>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t border-red-900/50 space-y-4">
            <Link
              href="https://discord.gg/hHYd7dpxCb"
              className="flex items-center justify-center gap-2 w-full p-3 rounded-md bg-red-900/30 hover:bg-red-900/50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Discord className="h-5 w-5" />
              <span>Join Discord</span>
            </Link>
            <Link
              href="https://cfx.re/join/g5434x"
              className="flex items-center justify-center gap-2 w-full p-3 rounded-md bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <span>Connect Now</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
