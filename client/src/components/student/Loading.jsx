"use client"
import React from 'react'
import { useState, useEffect } from "react"

export default function Loading() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">

        {/* Loading spinner */}
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-logocolor1 mb-6"></div>
        <p className="text-sm text-gray-400">{loadingProgress}% complete</p>
      </div>
    </div>
  )
}
