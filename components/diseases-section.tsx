"use client"

import IntroductionSection from "./sub-components/introduction-section"
import DiseasesList from "./sub-components/diseases-list"
import { Watermark } from "./ui/watermark"

export default function DiseasesSection() {
  return (
    <section id="doencas" className="relative py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="fixed inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-4xl h-full max-h-[30vh]">
          <Watermark />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Doenças Porquê?</h2>
        <IntroductionSection />
        <DiseasesList />
      </div>
    </section>
  )
}

