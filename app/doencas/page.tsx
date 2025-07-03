import DiseasesSection from "@/components/diseases-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function DoencasPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <DiseasesSection />
      <Footer />  
    </main>
  )
}