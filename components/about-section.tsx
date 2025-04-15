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
        <div className="absolute left-1/2 top-[8rem] bottom-0 w-0.5 bg-amber-400 transform -translate-x-1/2 z-10"></div>

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
            <div className="max-w-md space-y-4 text-gray-700">
              <p>
                HELENA DA FONSECA, realizou os primeiros movimentos humanitários em 2007 com atividades e serviços
                humanitários.
              </p>
              <p>
                Desde então, criou a Escola da Ascensão onde ministrou, palestras, cursos e consultas de análises de
                ADN.
              </p>
              <p>
              Consulta de ADN- Na pagina  O QUE FAZEMOS
Visa analisar todos os registos contidos no ADN energético, como:
•⁠  ⁠Memórias de vidas passadas
•⁠  ⁠Heranças genéticas e de antepassados
•⁠  ⁠Origens de fobias, traumas etc.
Todas estas memórias originam personalidades inconscientes e/ou impercetíveis no ser humano originando bloqueios, padrões, dores e perdas. 
Com esta análise, torna-se mais fácil saber qual o caminho a seguir, a forma de cura. Tomando consciência, há uma aceitação, aceitando, a cura acontece. Apenas a tomada de consciência /mudança de interna pode realizar os tais “milagres”.  E estes milagres não são de ordem religiosa, são apenas a mudança da nossa consciência que atua para uma nova realidade.
              </p>
            </div>
          </div>
        </div>

        {/* Percurso - Title on right, content on left */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 pl-8">
            <div className="max-w-md space-y-4 text-gray-700">
              <p>
                Todas estas memórias podem originar personalidades inconscientes, ou impercetíveis no ser humano,
                origina bloqueios ou padrões ao longo da vida. O seu percurso realizou-se em:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Portugal - Lisboa e Porto</li>
                <li>Brasil - Rio de Janeiro, São Paulo, Rio Grande do Sul, Santa Catarina</li>
                <li>Japão - Tóquio</li>
              </ul>
              <p className="mt-4">
                A experiência mais dolorosa e que a marcou foi numa escola no Brasil, Rio grande do Sul. Crianças que
                viviam com a mãe praticando prostituição dentro de casa, pai toxicodependente, ou então preso por crimes
                graves, adolescentes grávidas com 13 anos.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center md:justify-start pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Percurso</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Missão - Title on left, content on right */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Missão</h3>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <div className="max-w-md space-y-4 text-gray-700">
              <p>
                Esta verdade, ainda se vive hoje em dia em muitos países, assim como em Portugal. Por isso a fez
                refletir e pensar em como poderia contribuir para um mundo melhor, no que lhe fosse possível.
              </p>
              <p>
                Qual seria o futuro daquelas crianças? Desde então, esta experiência orientou-a e direcionou-a para as
                crianças abandonadas, órfãos, e idosos abandonadas pelas próprias famílias, assim como famílias
                carenciadas.
              </p>
              <p>
                Com muita dificuldade e luta, nunca abandonou o sonho de ajudar quem mais precisa e hoje, tem a feliz
                satisfação de poder colocar em prática o seu desejo.
              </p>
              <p className="font-medium">
                Além de Diplomata Civil, também comparticipa em 250 projetos humanitários internacionalmente.
              </p>
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
                  <p className="pl-2 border-l-2 border-blue-200">
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

        {/* Valores - Title on left, content on right */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Valores</h3>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <div className="max-w-md space-y-4 text-gray-700">
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
        </div>
      </div>
    </section>
  )
}
