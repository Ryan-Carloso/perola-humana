import EventsSection from "@/components/events-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function EventosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <EventsSection />
      <Footer />
    </main>
  )
}