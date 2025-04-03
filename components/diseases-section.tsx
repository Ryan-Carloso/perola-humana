import { diseases } from "@/lib/Listdiseases"

export default function DiseasesSection() {
  return (
    <section id="doencas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Doenças Porquê?</h2>

        {/* Seção de Remédios Alternativos */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="mb-6 text-gray-700 space-y-4">
            <div className="bg-green-50 p-6 rounded-lg mb-8 shadow-md">
              <h3 className="text-xl font-bold text-center mb-4 text-green-700">
                ACONSELHO REMÉDIOS QUE NÃO ENCONTRA NA FARMÁCIA
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "JEJUM",
                  "AMAR",
                  "GRATIDÃO",
                  "COMIDA DE VERDADE",
                  "COMER NA HORA CERTA",
                  "PENSAMENTO POSITIVO",
                  "PERDOAR",
                  "RIR",
                  "DANÇAR",
                  "APANHAR SOL (com consciência)",
                  "MEDITAÇÃO",
                  "EXERCÍCIO FISICO"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="font-bold mr-2">{item},</span> É UM REMÉDIO
                  </li>
                ))}
              </ul>
              <p className="text-center mt-4 font-bold text-green-700">CONSUMIR COM FREQUENCIA!</p>
            </div>

            {/* Seção de Texto */}
            <h3 className="text-xl font-bold mb-2">INTRODUÇÃO À SAÚDE</h3>
            <p>O acesso ao inconsciente exige compreensão e perspicácia. [...]</p>
            {/* (mantém o conteúdo do jeito que está nos seus parágrafos aqui) */}

            {/* Seção de Perdão */}
            <div className="bg-blue-50 p-6 rounded-lg my-6 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-700">PERDÃO O QUE É?</h3>
              <p className="mb-4">Perdoar verdadeiramente é uma questão de inteligência! [...]</p>
            </div>
          </div>
        </div>

        {/* Lista de Doenças Alternada */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-3xl font-bold mb-10 text-center text-yellow-600">Lista de Doenças</h3>

          {Object.entries(diseases)
            .filter(([_, list]) => list.length > 0)
            .map(([letter, diseaseList], index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={letter} className="mb-12 flex justify-center">
                  <div className={`flex w-full max-w-4xl items-start gap-4 ${isEven ? "" : "flex-row-reverse"}`}>
                    {/* Círculo da letra */}
                    <div className="relative">
                      <div className="bg-yellow-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        {letter}
                      </div>
                    </div>

                    {/* Card de Doenças */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-yellow-100">
                      <ul className="space-y-4 divide-y divide-yellow-100">
                        {diseaseList.map((disease, idx) => (
                          <li key={idx} className={`${idx > 0 ? "pt-4" : ""} text-gray-700`}>
                            <div className="font-medium text-lg text-yellow-700">{disease.name}</div>
                            <div className="text-gray-600 mt-1">{disease.description}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
