export default function SelfKnowledgeSection() {
  return (
    <section id="autoconhecimento" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Autoconhecimento</h2>

        <p className="mb-12 text-center text-xl font-semibold">
          "O UNIVERSO SÓ TE DÁ AQUILO QUE PENSAS, SENTES E DIZES SER DIGNO DE RECEBER"
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-center">Dicas</h3>
            <ul className="space-y-2">
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  Pratique a meditação diariamente para acalmar a mente e conectar-se com seu eu interior.
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  Mantenha um diário de gratidão, anotando três coisas pelas quais você é grato todos os dias.
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  Cuide do seu corpo com alimentação saudável, exercícios e descanso adequado.
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">Pratique o perdão - tanto para os outros quanto para si mesmo.</p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">Estabeleça limites saudáveis em seus relacionamentos.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-center">Reflexões</h3>
            <ul className="space-y-2">
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">"Conhece-te a ti mesmo e conhecerás o universo e os deuses." - Sócrates</p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  "Você não é uma gota no oceano. Você é o oceano inteiro em uma gota." - Rumi
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  "A maior jornada que você fará na vida é a jornada interior." - Aristóteles
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  "Sua tarefa não é buscar o amor, mas apenas procurar e encontrar todas as barreiras dentro de si que
                  você construiu contra ele." - Rumi
                </p>
              </li>
              <li className="rounded-lg bg-white p-4 shadow">
                <p className="text-gray-700">
                  "Aquele que olha para fora, sonha; aquele que olha para dentro, desperta." - Carl Jung
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

