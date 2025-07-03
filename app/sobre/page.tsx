import AboutSection from "@/components/about-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  )
}