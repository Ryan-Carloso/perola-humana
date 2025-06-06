"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/navbar"


export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showAudioPrompt, setShowAudioPrompt] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    // Auto-play video when component mounts (video will still be muted)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
    
    // Always show audio prompt when page loads
    setShowAudioPrompt(true)
  }, [])

  // Function to handle enabling audio
  const handleEnableAudio = () => {
    setShowAudioPrompt(false)
    setAudioEnabled(true)
    
    // Play audio after user interaction
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.play().catch(error => {
        console.error("Could not play video with sound:", error)
      })
    }
  }

  const handleDeclineAudio = () => {
    setShowAudioPrompt(false)
    // Keep video muted if declined
  }

  return (
    
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <Navbar />
      {/* Video background */}
      <video 
        ref={videoRef} 
        className="absolute h-full w-full object-cover" 
        autoPlay 
        muted={!audioEnabled}
        loop 
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Pérola Humana</h1>
          <p className="mb-8 text-xl md:text-2xl">
            "O mundo seria melhor se todos entendessem isto:
            <br />
            Se puder ajudar os outros ajude, se não puder, ao menos não lhes faça mal"
          </p>
          <p className="text-lg italic">- Dalai Lama</p>
        </div>
      </div>

      {/* Audio Permission Popup */}
      {showAudioPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="mx-4 max-w-2xl rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Ativar Áudio</h2>
            <p className="mb-8 text-lg text-gray-700">
              Este site contém áudio de fundo. Deseja ativar o áudio?
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                onClick={handleDeclineAudio}
                className="w-full rounded-lg bg-gray-300 px-6 py-3 text-lg font-medium text-gray-800 transition hover:bg-gray-400 sm:w-auto"
              >
                Não, obrigado
              </button>
              <button
                onClick={handleEnableAudio}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-700 sm:w-auto"
              >
                Sim, ativar áudio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

