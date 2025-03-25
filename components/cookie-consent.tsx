"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setIsVisible(false)
  }

  const handleCustomize = () => {
    // In a real implementation, this would open cookie preferences
    console.log("Open cookie preferences")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-md md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="max-w-3xl">
            <h3 className="mb-2 text-lg font-medium text-gray-900">We value your privacy</h3>
            <p className="text-sm text-gray-600">
              We use cookies to improve your browsing experience, serve ads or personalized content and analyze our
              traffic. By clicking "Accept All" you agree to the use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCustomize}
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600"
            >
              Customize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Reject All
            </Button>
            <Button size="sm" onClick={handleAccept} className="bg-yellow-500 text-white hover:bg-yellow-600">
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

