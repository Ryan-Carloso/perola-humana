import AboutSection from "@/components/about-section"
import Navbar from "@/components/navbar"

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <AboutSection />
    </main>
  )
}