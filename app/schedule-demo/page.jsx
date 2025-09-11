"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ScheduleDemoPage() {
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const availableDates = [
    "Dec 18, 2024",
    "Dec 19, 2024",
    "Dec 20, 2024",
    "Dec 23, 2024",
    "Dec 24, 2024",
    "Dec 26, 2024",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedDate && selectedTime && formData.name && formData.email) {
      setIsSubmitted(true)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-sky-200 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Demo Scheduled!</h2>
            <p className="text-slate-600 mb-6">
              Your demo is confirmed for {selectedDate} at {selectedTime}. We've sent a calendar invite to{" "}
              {formData.email}.
            </p>
            <div className="space-y-3">
              <Link href="/dashboard">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Try It Free Now</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
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
