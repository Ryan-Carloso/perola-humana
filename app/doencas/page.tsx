import DiseasesSection from "@/components/diseases-section"
import Navbar from "@/components/navbar"

export default function DoencasPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <DiseasesSection />
    </main>
  )
}