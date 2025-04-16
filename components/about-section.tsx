import { Watermark } from "./ui/watermark"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 relative min-h-screen overflow-hidden" style={{}}>
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-4xl h-full max-h-[40vh]">
          <Watermark />
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-[1]">
        <h2 className="mb-12 text-gray-800 text-center text-4xl font-bold relative after:content-[''] after:block after:w-24 after:h-1 after:bg-white after:mx-auto after:mt-4">
          Sobre Nós
        </h2> 

        {/* Vertical line down the center */}
        <div className="absolute left-1/2 top-[16rem] bottom-0 w-0.5 bg-amber-400 transform -translate-x-1/2 z-10 hidden md:block"></div>

        {/* A Nossa História - Title on left, content on right */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">A Nossa História</h3>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <div className="max-w-md space-y-4 text-gray-700 p-6 ">
              <p className="leading-relaxed">
                Helena da Fonseca iniciou os primeiros movimentos humanitários em 2007 com atividades e serviços dedicados ao bem-estar social.
              </p>
              <p className="leading-relaxed">
                Desde então, criou a Escola da Ascensão onde ministrou palestras, cursos e consultas de análises de ADN.
              </p>
              <div className="my-4 bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <p className="italic text-gray-700">
                  "A experiência mais marcante foi numa escola no Brasil, Rio Grande do Sul. Crianças que viviam em condições extremamente vulneráveis: mães praticando prostituição dentro de casa, pais toxicodependentes ou presos por crimes graves, adolescentes grávidas com apenas 13 anos."
                </p>
              </div>
              <p className="leading-relaxed">
                Esta realidade ainda persiste em muitos países, incluindo Portugal. Esta experiência fez Helena refletir sobre como poderia contribuir para um mundo melhor.
              </p>
              <p className="leading-relaxed">
                Desde então, seu trabalho direcionou-se para crianças abandonadas, órfãos, idosos abandonados pelas próprias famílias e famílias carenciadas.
              </p>
              <p className="leading-relaxed font-medium">
                Com muita determinação, nunca abandonou o sonho de ajudar quem mais precisa e hoje tem a feliz satisfação de poder colocar em prática o seu desejo.
              </p>
              <div className="mt-4 bg-gray-50 p-3 rounded-md flex items-center">
                <div className="w-2 h-12 bg-blue-400 mr-3"></div>
                <p className="text-gray-800">
                  Além de Diplomata Civil, Helena da Fonseca também comparticipa em 250 projetos humanitários internacionalmente.
                </p>
              </div>
            </div>
          </div>
        </div>




        {/* Porquê o Nome - Title on right, content on left */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 pl-8">
            <div className="max-w-md space-y-4 text-gray-700">
              <p>
                O arquétipo da pérola com a concha representa a proteção, preciosidade e crescimento interior. Esse
                arquétipo pode ser associado a diferentes áreas da vida, incluindo a personalidade, o desenvolvimento
                pessoal.
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Desenvolvimento Interior:</h4>
                  <p className="pl-2 border-l-2 border-blue-200 py-1">
                    As pérolas formam-se a partir de uma pequena impureza que, com o tempo se transforma em algo
                    valioso. Esse processo pode ser visto como uma metáfora para o desenvolvimento interior.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Resiliência:</h4>
                  <p className="pl-2 border-l-2 border-blue-200">
                    A formação da pérola é um processo lento e resiliente, portanto esse arquétipo pode inspirar-nos a
                    termos paciência e persistência.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Autovalorização:</h4>
                <p className="pl-2 border-l-2 border-blue-200">
                  A pérola é algo raro e significativo, o que reforça o conceito de autovalorização e autoamor. Aqueles
                  que se identificam com esse arquétipo podem sentir a necessidade de considerar a sua própria
                  preciosidade e investir em si mesmos.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Cuidado e Nutrição:</h4>
                <p className="pl-2 border-l-2 border-blue-200">
                  A concha, além de proteger, também nutre as pérolas, fornece o ambiente necessário para o seu
                  desenvolvimento. Esse arquétipo pode refletir a importância de cuidar de si mesmo e dos outros.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center md:justify-start pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Porquê o Nome Pérola Humana</h3>
              </div>
            </div>
          </div>
        </div>

                {/* A Nossa História - Title on left, content on right */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">O seu percurso</h3>
              </div>
            </div>
          </div>

          <div className="pl-8">
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
                    <span className="text-gray-600">Rio de Janeiro, São Paulo, Rio Grande do Sul, Santa Catarina</span>
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
          </div>
        </div>

              </div>
    </section>
  )
}
