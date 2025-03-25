export default function DiseasesSection() {
  // Alphabetical list of diseases
  const diseases = {
    A: ["Alzheimer", "Artrite", "Asma"],
    B: ["Bronquite", "Bulimia"],
    C: ["Câncer", "Catarata", "Colesterol"],
    D: ["Depressão", "Diabetes", "Distrofia"],
    E: ["Eczema", "Epilepsia"],
    F: ["Fibromialgia", "Fadiga crônica"],
    G: ["Gastrite", "Glaucoma"],
    H: ["Hepatite", "Hipertensão", "HIV"],
    I: ["Insônia", "Insuficiência cardíaca"],
    J: ["Joanete"],
    K: ["Klinefelter (síndrome)"],
    L: ["Lúpus", "Leucemia"],
    M: ["Meningite", "Miopia"],
    N: ["Nefrite", "Neuralgia"],
    O: ["Osteoporose", "Otite"],
    P: ["Parkinson", "Pneumonia"],
    Q: ["Queimaduras"],
    R: ["Reumatismo", "Rinite"],
    S: ["Sinusite", "Síndrome do pânico"],
    T: ["Tendinite", "Tuberculose"],
    U: ["Úlcera"],
    V: ["Varíola", "Vitiligo"],
  }

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
              <ul className="space-y-1">
                {diseaseList.map((disease, index) => (
                  <li key={index} className="text-gray-700">
                    {disease}
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

