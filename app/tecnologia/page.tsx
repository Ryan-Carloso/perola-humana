import TechnologySection from "@/components/technology-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function TecnologiaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <TechnologySection />
      <Footer />
    </main>
  )
}