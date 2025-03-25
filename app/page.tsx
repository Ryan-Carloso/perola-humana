import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import DiseasesSection from "@/components/diseases-section"
import TechnologySection from "@/components/technology-section"
import SelfKnowledgeSection from "@/components/self-knowledge-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <DiseasesSection />
      <TechnologySection />
      <SelfKnowledgeSection />
      <ContactSection />
    </main>
  )
}

