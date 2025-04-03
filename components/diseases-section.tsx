import { diseases } from "@/lib/Listdiseases"

export default function DiseasesSection() {
  return (
    <section id="doencas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Doenças Porquê?</h2>
        <div className="mb-8">
          <p className="mb-6 text-center text-gray-700">
            {/* Replace with actual content when received */}
            Texto principal polêmico sobre as causas das doenças e como podemos preveni-las através de uma abordagem
            holística da saúde.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.entries(diseases).map(([letter, diseaseList]) => (
            <div key={letter} className="rounded-lg bg-white p-4 shadow">
              <h3 className="mb-2 text-xl font-bold text-blue-600">{letter}</h3>
              <ul className="space-y-2">
                {diseaseList.map((disease, index) => (
                  <li key={index} className="text-gray-700">
                    <div className="font-medium">{disease.name}</div>
                    <div className="text-sm text-gray-600">{disease.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}