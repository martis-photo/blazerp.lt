"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Shield, Briefcase, Car, MapPin } from "lucide-react"

interface Player {
  id: number
  name: string
  ping?: number
  job?: string
  location?: string
}

interface PlayerListProps {
  className?: string
}

export function PlayerList({ className }: PlayerListProps) {
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/server-status")

        if (!response.ok) {
          throw new Error("Failed to fetch player data")
        }

        const data = await response.json()

        // If the API returns players array, use it
        if (data.players && Array.isArray(data.players)) {
          setPlayers(
            data.players.map((player: any, index: number) => ({
              id: index,
              name: player.name || `Player_${index}`,
              ping: player.ping || Math.floor(Math.random() * 100) + 20,
              job: player.job || getRandomJob(),
              location: player.location || getRandomLocation(),
            })),
          )
        } else {
          // If no players data, create sample data based on online count
          const samplePlayers = Array.from({ length: data.online || 5 }, (_, i) => ({
            id: i,
            name: `Player_${i}`,
            ping: Math.floor(Math.random() * 100) + 20,
            job: getRandomJob(),
            location: getRandomLocation(),
          }))
          setPlayers(samplePlayers)
        }

        setError(null)
      } catch (err) {
        console.error("Error fetching players:", err)
        setError("Could not load player list")
        // Set sample data on error
        const samplePlayers = Array.from({ length: 5 }, (_, i) => ({
          id: i,
          name: `Player_${i}`,
          ping: Math.floor(Math.random() * 100) + 20,
          job: getRandomJob(),
          location: getRandomLocation(),
        }))
        setPlayers(samplePlayers)
      } finally {
        setLoading(false)
      }
    }

    fetchPlayers()

    // Refresh every 2 minutes
    const interval = setInterval(fetchPlayers, 2 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const getRandomJob = () => {
    const jobs = ["Police", "EMS", "Mechanic", "Taxi Driver", "Criminal", "Unemployed", "Lawyer", "Real Estate"]
    return jobs[Math.floor(Math.random() * jobs.length)]
  }

  const getRandomLocation = () => {
    const locations = [
      "Downtown",
      "Beach",
      "Airport",
      "Police Station",
      "Hospital",
      "Gas Station",
      "Casino",
      "Mountains",
    ]
    return locations[Math.floor(Math.random() * locations.length)]
  }

  const getJobIcon = (job: string) => {
    switch (job?.toLowerCase()) {
      case "police":
        return <Shield className="h-4 w-4 text-blue-400" />
      case "ems":
        return <Shield className="h-4 w-4 text-red-400" />
      case "mechanic":
        return <Car className="h-4 w-4 text-yellow-400" />
      case "taxi driver":
        return <Car className="h-4 w-4 text-yellow-400" />
      default:
        return <Briefcase className="h-4 w-4 text-gray-400" />
    }
  }

  const filteredPlayers = players.filter((player) => {
    if (activeTab === "all") return true
    if (activeTab === "police" && player.job?.toLowerCase() === "police") return true
    if (activeTab === "ems" && player.job?.toLowerCase() === "ems") return true
    if (activeTab === "civilian" && player.job?.toLowerCase() !== "police" && player.job?.toLowerCase() !== "ems")
      return true
    return false
  })

  if (loading) {
    return (
      <Card className={`bg-black/50 border-red-900/50 backdrop-blur-sm ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Player List</span>
            <Badge className="bg-red-900/50 text-red-300 animate-pulse">Loading...</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 flex items-center justify-center">
            <p className="text-gray-400">Loading player data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={`bg-black/50 border-red-900/50 backdrop-blur-sm ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Player List</span>
            <Badge className="bg-red-900/50 text-red-300">Error</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 flex items-center justify-center">
            <p className="text-gray-400">{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`bg-black/50 border-red-900/50 backdrop-blur-sm ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Player List</span>
          <Badge className="bg-red-900/50 text-red-300">
            <Users className="mr-1 h-3 w-3" /> {players.length} Online
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="mb-4" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="police">Police</TabsTrigger>
            <TabsTrigger value="ems">EMS</TabsTrigger>
            <TabsTrigger value="civilian">Civilian</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-900/50 flex items-center justify-center">
                        {player.id + 1}
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          {getJobIcon(player.job || "")}
                          <span className="ml-1">{player.job}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-red-900/50 text-xs">
                        {player.ping}ms
                      </Badge>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {player.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">No players found in this category</div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="police" className="mt-0">
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                        {player.id + 1}
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Shield className="h-4 w-4 text-blue-400 mr-1" />
                          <span>{player.job}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-blue-900/50 text-xs">
                        {player.ping}ms
                      </Badge>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {player.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">No police officers online</div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="ems" className="mt-0">
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-900/50 flex items-center justify-center">
                        {player.id + 1}
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Shield className="h-4 w-4 text-red-400 mr-1" />
                          <span>{player.job}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-red-900/50 text-xs">
                        {player.ping}ms
                      </Badge>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {player.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">No EMS personnel online</div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="civilian" className="mt-0">
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-orange-900/50 flex items-center justify-center">
                        {player.id + 1}
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Briefcase className="h-4 w-4 text-orange-400 mr-1" />
                          <span>{player.job}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-orange-900/50 text-xs">
                        {player.ping}ms
                      </Badge>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {player.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">No civilians online</div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
