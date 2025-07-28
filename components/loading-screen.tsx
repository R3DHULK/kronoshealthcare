"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500) // Small delay before hiding
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-green-50 to-blue-50 flex items-center justify-center">
      {/* Medical animations floating around */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First Aid Kit */}
        <div className="absolute top-20 left-20 medical-float" style={{ animationDelay: "0s" }}>
          <div className="text-6xl opacity-30">🏥</div>
        </div>

        {/* Stethoscope */}
        <div className="absolute top-32 right-24 medical-float" style={{ animationDelay: "1s" }}>
          <div className="text-5xl opacity-25">🩺</div>
        </div>

        {/* Medicine Pills */}
        <div className="absolute bottom-40 left-16 medical-float" style={{ animationDelay: "2s" }}>
          <div className="text-5xl opacity-30">💊</div>
        </div>

        {/* Syringe */}
        <div className="absolute bottom-32 right-20 medical-float" style={{ animationDelay: "3s" }}>
          <div className="text-4xl opacity-25">💉</div>
        </div>

        {/* Medical Cross */}
        <div className="absolute top-1/2 left-10 medical-float" style={{ animationDelay: "4s" }}>
          <div className="text-5xl opacity-20">⚕️</div>
        </div>

        {/* Thermometer */}
        <div className="absolute top-1/3 right-10 medical-float" style={{ animationDelay: "5s" }}>
          <div className="text-4xl opacity-25">🌡️</div>
        </div>

        {/* Bandage */}
        <div className="absolute bottom-1/3 left-1/4 medical-float" style={{ animationDelay: "6s" }}>
          <div className="text-4xl opacity-20">🩹</div>
        </div>

        {/* Medical Bag */}
        <div className="absolute top-1/4 left-1/2 medical-float" style={{ animationDelay: "7s" }}>
          <div className="text-4xl opacity-25">👩‍⚕️</div>
        </div>

        {/* Heart */}
        <div className="absolute bottom-1/4 right-1/3 medical-float" style={{ animationDelay: "8s" }}>
          <div className="text-5xl opacity-30">❤️</div>
        </div>
      </div>

      {/* Main loading content */}
      <div className="text-center z-10">
        {/* Logo */}
        <div className="mb-8 pulse-animation">
          <Image src="/logo.png" alt="Kronos Health Care Foundation" width={120} height={120} className="mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Kronos Health Care Foundation</h1>
        <p className="text-lg text-gray-600 mb-8">Loading your healthcare experience...</p>

        {/* Loading bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">{progress}% Complete</p>
        </div>

        {/* Loading messages */}
        <div className="text-sm text-gray-600">
          {progress < 30 && "Preparing your healthcare dashboard..."}
          {progress >= 30 && progress < 60 && "Loading medical services..."}
          {progress >= 60 && progress < 90 && "Connecting to our specialists..."}
          {progress >= 90 && "Almost ready! Welcome to Kronos Health Care..."}
        </div>

        {/* Spinning medical cross */}
        <div className="mt-8">
          <div className="inline-block animate-spin text-3xl text-green-600">⚕️</div>
        </div>
      </div>

      {/* Pulse effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full opacity-5 animate-ping" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-ping"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}
