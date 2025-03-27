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

  }, [])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video 
        ref={videoRef} 
        className="absolute h-full w-full object-cover" 
        autoPlay 
        loop 
        playsInline
        controls // Adding controls so users can manually adjust volume
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
    </section>
  )
}

