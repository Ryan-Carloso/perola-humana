"use client"

import IntroductionSection from "./sub-components/introduction-section"
import DiseasesList from "./sub-components/diseases-list"

export default function DiseasesSection() {
  return (
    <section id="doencas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Doenças Porquê?</h2>
        <IntroductionSection />
        <DiseasesList />
      </div>
    </section>
  )
}

