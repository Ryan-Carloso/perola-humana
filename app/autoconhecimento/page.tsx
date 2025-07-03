import SelfKnowledgeSection from "@/components/self-knowledge-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/Footer"

export default function AutoconhecimentoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <SelfKnowledgeSection />
      <Footer />
    </main>
  )
}