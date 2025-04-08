import { Watermark } from "./ui/watermark"

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 relative min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #fce6b8 0%, #fccc8a 40%, #fca94d 70%, #f18b01 100%)"

      }}
          >
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-4xl h-full max-h-[80vh]">
          <Watermark />
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-[1]">
        <h2 className="mb-4 text-center text-4xl font-bold text-white relative after:content-[''] after:block after:w-24 after:h-1 after:bg-white after:mx-auto after:mt-4">
          Sobre Nós
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-white/40 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 border-b pb-3 border-gray-800">
              A Nossa História
            </h3>
            <div className="text-gray-800 space-y-4 text-sm md:text-base">
              <p>
                HELENA DA FONSECA, realizou os primeiros movimentos humanitários em 2007 com atividades e serviços
                humanitários.
              </p>

              <p>
                Desde então, criou a Escola da Ascensão onde ministrou, palestras, cursos e consultas de análises de
                ADN.
              </p>

              <p className="text-sm md:text-base">
                As consultas de ADN, são da sua autoria e visa analisar todos os registos contidos no ADN energético,
                como:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                <li>Memórias de vidas passadas</li>
                <li>Heranças genéticas e de antepassados</li>
                <li>Origens de fobias, traumas etc.</li>
              </ul>

              <p className="text-sm md:text-base">
                Todas estas memórias podem originar personalidades inconscientes, ou impercetíveis no ser humano,
                origina bloqueios ou padrões ao longo da vida. O seu percurso realizou-se em:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                <li>Portugal - Lisboa e Porto</li>
                <li>Brasil - Rio de Janeiro, São Paulo, Rio Grande do Sul, Santa Catarina</li>
                <li>Japão - Tóquio</li>
              </ul>

              <p className="text-sm md:text-base mt-4">
                A experiência mais dolorosa e que a marcou foi numa escola no Brasil, Rio grande do Sul. Crianças que
                viviam com a mãe praticando prostituição dentro de casa, pai toxicodependente, ou então preso por crimes
                graves, adolescentes grávidas com 13 anos.
              </p>

              <p className="text-sm md:text-base">
                Esta verdade, ainda se vive hoje em dia em muitos países, assim como em Portugal. Por isso a fez
                refletir e pensar em como poderia contribuir para um mundo melhor, no que lhe fosse possível.
              </p>

              <p className="text-sm md:text-base">
                Qual seria o futuro daquelas crianças? Desde então, esta experiência orientou-a e direcionou-a para as
                crianças abandonadas, órfãos, e idosos abandonadas pelas próprias famílias, assim como famílias
                carenciadas.
              </p>

              <p className="text-sm md:text-base">
                Com muita dificuldade e luta, nunca abandonou o sonho de ajudar quem mais precisa e hoje, tem a feliz
                satisfação de poder colocar em prática o seu desejo.
              </p>

              <p className="text-sm md:text-base font-medium">
                Além de Diplomata Civil, também comparticipa em 250 projetos humanitários internacionalmente.
              </p>
            </div>
          </div>

          <div className="bg-white/40 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 border-b pb-3 border-gray-800">
              Porquê o Nome Pérola Humana
            </h3>

            <div className="text-gray-800 space-y-4 text-sm md:text-base">
              <p>
                O arquétipo da pérola com a concha representa a proteção, preciosidade e crescimento interior. Esse
                arquétipo pode ser associado a diferentes áreas da vida, incluindo a personalidade, o desenvolvimento
                pessoal.
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Desenvolvimento Interior:</h4>
                  <p className="text-sm md:text-base pl-2 border-l-2 border-blue-200">
                    As pérolas formam-se a partir de uma pequena impureza que, com o tempo se transforma em algo
                    valioso. Esse processo pode ser visto como uma metáfora para o desenvolvimento interior, mostrando
                    que desafios e imperfeições podem ser transformados em algo precioso.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Resiliência:</h4>
                  <p className="text-sm md:text-base pl-2 border-l-2 border-blue-200">
                    A formação da pérola é um processo lento e resiliente, portanto esse arquétipo pode inspirar-nos a
                    termos paciência e persistência, mostrando que o crescimento e o desenvolvimento pessoal levam
                    tempo, mas resultados duradouros.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Autovalorização:</h4>
                  <p className="text-sm md:text-base pl-2 border-l-2 border-blue-200">
                    A pérola é algo raro e significativo, o que reforça o conceito de autovalorização e autoamor.
                    Aqueles que se identificam com esse arquétipo podem sentir a necessidade de considerar a sua própria
                    preciosidade e investir em si mesmos.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Cuidado e Nutrição:</h4>
                  <p className="text-sm md:text-base pl-2 border-l-2 border-blue-200">
                    A concha, além de proteger, também nutre as pérolas, fornece o ambiente necessário para o seu
                    desenvolvimento. Esse arquétipo pode refletir a importância de cuidar de si mesmo e dos outros,
                    criando um espaço propício para o crescimento pessoal e emocional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
