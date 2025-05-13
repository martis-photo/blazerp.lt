"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

interface ServerStatusProps {
  className?: string
}

interface ServerData {
  online: number
  maxPlayers: number
  name: string
  players: any[]
}

export function ServerStatus({ className }: ServerStatusProps) {
  const [serverData, setServerData] = useState<ServerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/server-status")

        if (!response.ok) {
          throw new Error("Failed to fetch server data")
        }

        const data = await response.json()
        setServerData(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching server status:", err)
        setError("Could not connect to server")
      } finally {
        setLoading(false)
      }
    }

    fetchServerStatus()

    // Refresh every 2 minutes
    const interval = setInterval(fetchServerStatus, 2 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Badge className={`bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 animate-pulse ${className}`}>
        <Clock className="mr-1 h-3 w-3" /> Connecting to server...
      </Badge>
    )
  }

  if (error || !serverData) {
    return (
      <Badge className={`bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 ${className}`}>
        <Users className="mr-1 h-3 w-3" /> Server status unavailable
      </Badge>
    )
  }

  return (
    <Badge className={`bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 ${className}`}>
      <Users className="mr-1 h-3 w-3" /> Online: {serverData.online}/{serverData.maxPlayers} Players
    </Badge>
  )
}
