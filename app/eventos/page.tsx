import EventsSection from "@/components/events-section"
import Navbar from "@/components/navbar"

export default function EventosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <EventsSection />
    </main>
  )
}