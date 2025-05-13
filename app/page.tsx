"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Shield,
  Map,
  Car,
  Briefcase,
  BadgeCheck,
  ChevronRight,
  DiscIcon as Discord,
  ArrowRight,
  Flame,
} from "lucide-react"
import { ServerStatus } from "@/components/server-status"
import { PlayerList } from "@/components/player-list"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/50">
        <div className="center-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <MobileMenu scrollToSection={scrollToSection} />
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-red-500 flame-animation" />
              <span className="font-bold text-xl">BlazedRP</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-to-join")}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              How to Join
            </button>
            <button
              onClick={() => scrollToSection("rules")}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Rules
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("players")}
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Players
            </button>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="https://discord.gg/hHYd7dpxCb"
              className="hidden sm:flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-red-700 hover:bg-red-900/50 hover:text-red-300 button-animation"
              >
                <Discord className="mr-2 h-4 w-4" />
                Join Discord
              </Button>
            </Link>
            <Button
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 button-animation text-sm sm:text-base px-3 sm:px-4"
              onClick={() => window.open("https://cfx.re/join/g5434x", "_blank")}
            >
              <span className="sm:hidden">Connect</span>
              <span className="hidden sm:inline">Connect Now</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/23.jpg?key=z50eq" alt="City at night" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20" />
        </div>

        <div className="center-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <ServerStatus className="mb-4 mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-glow">
              Experience Next-Level Roleplay
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Immerse yourself in our meticulously crafted world with custom jobs, properties, and a thriving economy.
              Your story begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 button-animation"
                onClick={() => window.open("https://cfx.re/join/g5434x", "_blank")}
              >
                Connect to Server <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-700 hover:bg-red-900/50 hover:text-red-300 button-animation"
                onClick={() => window.open("https://www.youtube.com/watch?v=P0FvWeOs7Q0", "_blank")}
              >
                Watch Trailer
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            <Card className="bg-black/50 border-red-900/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-red-400" />
                <h3 className="font-bold">1200+ Players</h3>
                <p className="text-sm text-gray-100">Active Community</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-red-900/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-red-400" />
                <h3 className="font-bold">30+ Jobs</h3>
                <p className="text-sm text-gray-100">Custom Careers</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-red-900/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Car className="h-8 w-8 mx-auto mb-2 text-red-400" />
                <h3 className="font-bold">500+ Vehicles</h3>
                <p className="text-sm text-gray-100">Custom Models</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-red-900/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Map className="h-8 w-8 mx-auto mb-2 text-red-400" />
                <h3 className="font-bold">Huge Map</h3>
                <p className="text-sm text-gray-100">Custom Locations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section id="players" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="center-container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 mx-auto">
              Server Status
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Current Players</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See who's currently online and join them in the city. Our server is active 24/7 with players from around
              the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <PlayerList className="order-2 md:order-1" />

            <Card className="bg-black/50 border-red-900/50 backdrop-blur-sm h-full order-1 md:order-2">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-6 text-glow">Server Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Active Community</h4>
                      <p className="text-gray-300">
                        Join a thriving community of roleplayers who are dedicated to creating immersive experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Dedicated Staff</h4>
                      <p className="text-gray-300">
                        Our staff team is online around the clock to ensure a fair and enjoyable experience for
                        everyone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center flex-shrink-0">
                      <Map className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Custom Map</h4>
                      <p className="text-gray-300">
                        Explore our extensively modified map with unique locations, interiors, and hidden spots.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 button-animation"
                    onClick={() => window.open("https://cfx.re/join/g5434x", "_blank")}
                  >
                    Connect to Server Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="center-container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 mx-auto">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Why Choose Our Server?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've crafted a unique roleplay experience with attention to detail and immersive gameplay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4 float-animation">
                  <BadgeCheck className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Economy</h3>
                <p className="text-white">
                  Our balanced economy system ensures fair gameplay with multiple ways to earn and spend your
                  hard-earned cash.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-red-400 car-hover-effect" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Vehicles</h3>
                <p className="text-white">
                  Explore our city with exclusive custom vehicles, each with unique handling and performance
                  characteristics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4 float-animation">
                  <Briefcase className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Jobs</h3>
                <p className="text-white">
                  From law enforcement to criminal organizations, medical services to mechanics - find your perfect
                  role.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4 float-animation">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Active Staff</h3>
                <p className="text-white">
                  Our dedicated team ensures a fair and enjoyable experience for all players with 24/7 support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4 float-animation">
                  <Map className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Locations</h3>
                <p className="text-white">
                  Discover unique buildings, interiors, and hidden spots throughout our extensively modified map.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-900/50 hover:border-red-700 transition-colors hover:bg-gray-900/70">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-red-900/50 flex items-center justify-center mb-4 float-animation">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Events</h3>
                <p className="text-white">
                  Regular events, races, and competitions with exclusive rewards and unforgettable experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-to-join" className="py-20 bg-black">
        <div className="center-container">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700">Getting Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">How to Join Our Server</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 scale-animation">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Install FiveM</h3>
                    <p className="text-gray-200">Download and install the FiveM client from the official website.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 scale-animation">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Join Our Discord</h3>
                    <p className="text-gray-200">Connect with our community and complete the verification process.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 scale-animation">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Connect to Server</h3>
                    <p className="text-gray-200">Use our direct connect link or find us in the FiveM server browser.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 scale-animation">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Create Your Character</h3>
                    <p className="text-gray-200">Design your unique character and begin your roleplay journey.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 button-animation"
                  onClick={() => window.open("https://discord.gg/hHYd7dpxCb", "_blank")}
                >
                  <Discord className="mr-2 h-4 w-4" />
                  Join Our Discord
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image src="/1.webp" alt="Server gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="center-container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 mx-auto">
              Server Rules
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Play Fair, Respect Others</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our rules are designed to ensure everyone has an enjoyable and immersive roleplay experience.
            </p>
          </div>

          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general">General Rules</TabsTrigger>
              <TabsTrigger value="roleplay">Roleplay Rules</TabsTrigger>
              <TabsTrigger value="combat">Combat Rules</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="bg-gray-900/30 p-6 rounded-lg border border-red-900/50">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Respect All Players</h3>
                    <p className="text-gray-200 text-sm">
                      Treat everyone with respect. Harassment, discrimination, or toxicity will not be tolerated.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Cheating or Exploiting</h3>
                    <p className="text-gray-200 text-sm">
                      Using mods, hacks, or exploiting bugs will result in an immediate ban.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Listen to Staff</h3>
                    <p className="text-gray-200 text-sm">
                      Staff decisions are final. If you have an issue, open a ticket in Discord.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Advertising</h3>
                    <p className="text-gray-200 text-sm">Advertising other servers or services is prohibited.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="roleplay" className="bg-gray-900/30 p-6 rounded-lg border border-red-900/50">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Stay In Character</h3>
                    <p className="text-gray-200 text-sm">
                      Maintain roleplay at all times in-game. Use /ooc for out-of-character communication.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Value Your Life</h3>
                    <p className="text-gray-200 text-sm">
                      Act as you would in real life when faced with dangerous situations.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Powergaming</h3>
                    <p className="text-gray-200 text-sm">
                      Don't force scenarios on others or perform impossible actions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Metagaming</h3>
                    <p className="text-gray-200 text-sm">Don't use information your character wouldn't know in-game.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="combat" className="bg-gray-900/30 p-6 rounded-lg border border-red-900/50">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Random Deathmatch (RDM)</h3>
                    <p className="text-gray-200 text-sm">
                      Don't kill players without valid roleplay reason and interaction.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">No Vehicle Deathmatch (VDM)</h3>
                    <p className="text-gray-200 text-sm">Don't use vehicles as weapons without roleplay context.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Combat Logging</h3>
                    <p className="text-gray-200 text-sm">Disconnecting to avoid roleplay situations is prohibited.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Robbery Cooldowns</h3>
                    <p className="text-gray-200 text-sm">
                      Respect the cooldown periods between robberies and criminal activities.
                    </p>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="center-container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 mx-auto">Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Server Highlights</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Take a look at some of the amazing moments captured on our server.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/13.jpg?key=c6fj4"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Police Chase Downtown</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/17.webp?key=uv1fg"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Car Meet</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/5.png?key=a6lsx"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Hospital Emergency</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/19.avif?key=8yr5k"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Bank Heist</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/20.jpg?key=j2t3k"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Night Club Event</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/7.jpg?key=29mvc"
                alt="Server screenshot"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">Off-Road Adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section id="discord" className="py-20 bg-gradient-to-b from-black to-red-950/30">
        <div className="center-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-red-900/50 text-red-300 hover:bg-red-900 border-red-700 mx-auto">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Join Our Discord Community</h2>
            <p className="text-gray-100 mb-8">
              Connect with other players, stay updated on server news, and get support from our staff team.
            </p>

            <Card className="bg-gray-900/50 border-red-900/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Why Join Our Discord?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Get notified about server events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Apply for whitelisted jobs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Report issues and get support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Connect with other players</span>
                      </li>
                    </ul>

                    <Button
                      className="mt-6 bg-red-600 hover:bg-red-500 text-white w-full sm:w-auto button-animation"
                      onClick={() => window.open("https://discord.gg/hHYd7dpxCb", "_blank")}
                    >
                      <Discord className="mr-2 h-4 w-4" />
                      Join Our Discord
                    </Button>
                  </div>

                  <div className="relative h-[200px] md:h-auto">
                    <Image src="/21.jpg?key=cuzoa" alt="Discord community" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/30 to-black">
        <div className="center-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-glow">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Join hundreds of players already experiencing our immersive roleplay world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 button-animation"
                onClick={() => window.open("https://cfx.re/join/g5434x", "_blank")}
              >
                Connect to Server <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-700 hover:bg-red-900/50 hover:text-red-300 button-animation"
                onClick={() => window.open("https://discord.gg/hHYd7dpxCb", "_blank")}
              >
                <Discord className="mr-2 h-4 w-4" />
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-red-900/50">
        <div className="center-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-red-500 flame-animation" />
                <span className="font-bold text-xl">BlazedRP</span>
              </Link>
              <p className="text-gray-200 mb-4 max-w-md">
                Experience next-level roleplay in our meticulously crafted world with custom jobs, properties, and a
                thriving economy.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://discord.gg/hHYd7dpxCb"
                  className="text-gray-400 hover:text-red-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@blazerp.lt"
                  className="text-gray-400 hover:text-red-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@Blazerp.LT-tv"
                  className="text-gray-400 hover:text-red-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-red-400">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("how-to-join")} className="text-gray-400 hover:text-red-400">
                    How to Join
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("rules")} className="text-gray-400 hover:text-red-400">
                    Rules
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("gallery")} className="text-gray-400 hover:text-red-400">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("players")} className="text-gray-400 hover:text-red-400">
                    Players
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("discord")} className="text-gray-400 hover:text-red-400">
                    Discord
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Server Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-200">
                  <span className="font-medium">Status:</span> Online
                </li>
                <li className="text-gray-200">
                  <span className="font-medium">Discord:</span> discord.gg/hHYd7dpxCb
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} BlazedRP. All rights reserved. Not affiliated with Rockstar Games.</p>
            <p>Made by <a href="https://shafat21.dragondesignstudio.com/">Shafat Alam</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
