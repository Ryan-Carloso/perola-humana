import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  )
} 