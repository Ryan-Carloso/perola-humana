import { Watermark } from "./ui/watermark"

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 relative min-h-screen overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-4xl h-full max-h-[40vh]">
          <Watermark />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-[1]">
        {/* Section title */}
        <h2 className="text-gray-800 text-center text-4xl font-bold relative after:content-[''] after:block after:w-24 after:h-1 after:bg-white after:mx-auto after:mt-4">
          Sobre Nós
        </h2>

        {/* Vertical guideline */}
        <div className="absolute left-1/2 top-[5rem] bottom-0 w-0.5 bg-amber-400 transform -translate-x-1/2 z-10 hidden md:block"></div>

        {/* A Nossa História */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left title */}
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  A Nossa História
                </h3>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="pl-8">
            <div className="max-w-md space-y-4 text-gray-700 p-6">
              <p className="leading-relaxed">
                Helena da Fonseca tem dedicado a sua vida à defesa dos mais
                vulneráveis. Desde 2007, o seu percurso tem sido marcado por
                ações concretas de solidariedade e por uma vocação de serviço à
                humanidade.
              </p>
              <p className="leading-relaxed">
                Determinada em aprofundar o seu compromisso, fundou, em 2007, a
                Escola de Ascensão onde passou a ministrar palestras, cursos e
                consultas de análise de ADN com o objetivo de promover o
                autoconhecimento e o desenvolvimento pessoal. A sua atuação
                estendeu-se em diversos países e regiões:
              </p>

              {/* Países */}
              <div className="max-w-md space-y-4 text-gray-700 bg-blue-50 p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-10 bg-blue-400 mr-3 rounded-full"></div>
                    <div>
                      <span className="font-medium block">Portugal</span>
                      <span className="text-gray-600">Lisboa e Porto</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-10 bg-blue-400 mr-3 rounded-full"></div>
                    <div>
                      <span className="font-medium block">Brasil</span>
                      <span className="text-gray-600">
                        Rio de Janeiro, São Paulo, Rio Grande do Sul e
                        Santa Catarina
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-10 bg-blue-400 mr-3 rounded-full"></div>
                    <div>
                      <span className="font-medium block">Japão</span>
                      <span className="text-gray-600">Tóquio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Citação */}
              <div>
                <p className="text-gray-700">
                  “Crianças que viviam em condições extremamente vulneráveis:
                  mães a praticar prostituição dentro de casa, pais
                  toxicodependentes ou presos por crimes graves e adolescentes
                  grávidas com apenas 13 anos.”
                </p>
              </div>

              <p className="leading-relaxed">
                Infelizmente, realidades semelhantes continuam a existir em
                muitos países, incluindo Portugal. Desde então, Helena orientou
                o seu trabalho para crianças abandonadas, órfãs, idosos
                negligenciados pelas suas próprias famílias e famílias
                carenciadas.
              </p>
              <p className="leading-relaxed">
                Com uma determinação firme, nunca abandonou o sonho de ajudar
                quem mais precisa. Hoje, sente a realização de poder colocar em
                prática essa missão.
              </p>

              {/* Destaque */}
              <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-center">
                <div className="w-2 h-12 bg-blue-400 mr-3"></div>
                <p className="text-gray-800">
                  Além de diplomata civil, Helena da Fonseca colabora em 250
                  projetos humanitários a nível internacional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Porquê o Nome */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left content */}
          <div className="order-2 md:order-1 pl-8">
            <div className="max-w-md space-y-4 text-gray-700">
              <p>
                O arquétipo da pérola com a concha representa proteção,
                preciosidade e crescimento interior, podendo ser associado a
                várias dimensões da vida pessoal.
              </p>

              {/* Desenvolvimento Interior */}
              <div className="space-y-3 mt-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Desenvolvimento Interior:
                  </h4>
                  <p className="pl-2 border-l-2 border-blue-200 py-1">
                    As pérolas formam-se a partir de uma pequena impureza que,
                    com o tempo, se transforma em algo valioso — uma metáfora
                    para o processo de autodescoberta.
                  </p>
                </div>

                {/* Resiliência */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Resiliência:
                  </h4>
                  <p className="pl-2 border-l-2 border-blue-200">
                    A formação da pérola é um processo lento e resiliente,
                    inspirando-nos a cultivar paciência e persistência.
                  </p>
                </div>

                {/* Autovalorização */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Autovalorização:
                  </h4>
                  <p className="pl-2 border-l-2 border-blue-200">
                    Sendo algo raro e significativo, a pérola reforça a ideia de
                    autovalorização e autoamor — recordar a nossa própria
                    preciosidade.
                  </p>
                </div>

                {/* Cuidado e Nutrição */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Cuidado e Nutrição:
                  </h4>
                  <p className="pl-2 border-l-2 border-blue-200">
                    A concha, além de proteger, também nutre as pérolas,
                    fornecendo o ambiente para o seu desenvolvimento. Este
                    arquétipo remete para a importância de cuidar de si mesmo e
                    dos outros.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right title */}
          <div className="order-1 md:order-2 flex items-center justify-center md:justify-start pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Porquê o Nome Pérola Humana
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
