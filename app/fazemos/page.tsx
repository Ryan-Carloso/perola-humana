import WhatWeDoSection from "@/components/what-we-do-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function FazemosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <WhatWeDoSection />
      <Footer />
    </main>
  )
}