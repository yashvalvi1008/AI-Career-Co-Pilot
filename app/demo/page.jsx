"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demoSteps = [
    {
      title: "Upload Your Resume",
      description: "Simply upload your existing resume or start from scratch",
      features: ["PDF, Word, or text format", "Instant parsing", "Data extraction"],
    },
    {
      title: "AI Analysis & Scoring",
      description: "Our AI analyzes your resume for ATS compatibility and impact",
      features: ["ATS optimization score", "Keyword analysis", "Industry benchmarking"],
    },
    {
      title: "Real-time Suggestions",
      description: "Get instant recommendations to improve your resume",
      features: ["Action verb suggestions", "Skill recommendations", "Format optimization"],
    },
    {
      title: "Professional Templates",
      description: "Choose from ATS-friendly templates designed for your industry",
      features: ["Industry-specific designs", "ATS-optimized layouts", "Mobile-responsive"],
    },
    {
      title: "Download & Apply",
      description: "Export your optimized resume and start applying with confidence",
      features: ["Multiple formats", "Version tracking", "Application tracking"],
    },
  ]

  const handlePlayDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval)
          setIsPlaying(false)
          return 0
        }
        return prev + 1
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              AI Career Co-Pilot
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
