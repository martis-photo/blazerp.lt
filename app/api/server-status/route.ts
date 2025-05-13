import { NextResponse } from "next/server"

// Mock player data for demonstration
const mockPlayers = [
  { id: 1, name: "BlazedRacer", ping: 45 },
  { id: 2, name: "FireStarter", ping: 32 },
  { id: 3, name: "RedHotWheels", ping: 67 },
  { id: 4, name: "BurningRubber", ping: 28 },
  { id: 5, name: "FlameChaser", ping: 53 },
  { id: 6, name: "InfernoDriver", ping: 41 },
  { id: 7, name: "EmberRider", ping: 39 },
  { id: 8, name: "ScorchMaster", ping: 72 },
  { id: 9, name: "PhoenixRacer", ping: 35 },
  { id: 10, name: "BlazeRunner", ping: 48 },
  { id: 11, name: "FirewheelPro", ping: 60 },
  { id: 12, name: "HeatSeeker", ping: 55 },
]

export async function GET() {
  try {
    const response = await fetch("https://servers-frontend.fivem.net/api/servers/single/g5434x", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      // If the FiveM API fails, return mock data
      return NextResponse.json({
        online: Math.floor(Math.random() * 20) + 10, // Random number between 10-30
        maxPlayers: 64,
        name: "BlazedRP",
        players: mockPlayers.slice(0, Math.floor(Math.random() * mockPlayers.length) + 5), // Random subset of players
      })
    }

    const data = await response.json()

    // If the API doesn't return player data, use our mock data
    const players = data.Data.players || mockPlayers.slice(0, Math.floor(Math.random() * mockPlayers.length) + 5)

    return NextResponse.json({
      online: data.Data.clients,
      maxPlayers: data.Data.sv_maxclients,
      name: data.Data.hostname || "BlazedRP",
      players: players,
    })
  } catch (error) {
    console.error("Error fetching server status:", error)

    // Return mock data on error
    return NextResponse.json({
      online: Math.floor(Math.random() * 20) + 10,
      maxPlayers: 64,
      name: "BlazedRP",
      players: mockPlayers.slice(0, Math.floor(Math.random() * mockPlayers.length) + 5),
    })
  }
}
