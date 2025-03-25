"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }

    // Auto-play audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Set volume to 30%
      audioRef.current.play().catch((error) => {
        console.error("Audio autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video ref={videoRef} className="absolute h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Audio (hidden) */}
      <audio ref={audioRef} loop className="hidden">
        <source src="/audio-background.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> 

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
    </section>
  )
}

