import { Heart, Users, Activity, Shield } from "lucide-react"
import { Watermark } from "./ui/watermark"


export default function WhatWeDoAlternating() {
  return (
    <section id="fazemos" className="bg-gradient-to-b from-white to-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center py-16">
          <h2 className="text-4xl font-bold text-primary mb-4">O Que Fazemos</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Vertical line starting after the heading */}
        <div className="absolute left-1/2 top-[16rem] bottom-0 w-0.5 bg-amber-400 transform -translate-x-1/2 z-10 hidden md:block"></div>

        {/* Objetivos - Título à esquerda, texto à direita */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mr-4">Objetivos</h3>
                <div className="rounded-full bg-primary/15 p-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-8 rounded-xl p-8 shadow-lg border border-gray-100 transition-all ">
            <div className="max-w-s space-y-4 text-gray-700">
              <p className="leading-relaxed">
                O nosso objetivo é despertar a consciência humana a todos os níveis. Sensibilizar e apelar para a
                atenção dos mais "INCONSCIENTES" e acima de tudo, doar amor e dedicação aos mais necessitados. (Crianças
                e idosos).
              </p>
              <p className="leading-relaxed">
                Amor, alegria, carinho, são gratuitos e é tão reconfortante saber se que podemos contribuir para mais
                sorrisos. Apadrinhar crianças o ano todo e não só em natais, poder doar um pouco do nosso tempo de
                alguma forma, visitar, surpreender e dizer, "Eu gosto muito de ti, ou, Eu te amo muito" é a maior
                riqueza que alguém "esquecido" ou carenciado pode ouvir, seja criança ou idoso.
              </p>
            </div>
          </div>
        </div>

        {/* DNA consulta - Título à direita, texto à esquerda */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8  ">
          <div className="order-2 md:order-1 pl-8 rounded-xl p-8 shadow-lg border border-gray-100 transition-all ">
            <div className="max-w-md space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Visa analisar todos os registos contidos no ADN energético, como:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Memórias de vidas passadas</li>
                <li>Heranças genéticas e de antepassados</li>
                <li>Origens de fobias, traumas etc.</li>
              </ul>
              <p className="leading-relaxed">
                Todas estas memórias originam personalidades inconscientes e/ou impercetíveis no ser humano originando bloqueios, padrões, dores e perdas.
              </p>
              <p className="leading-relaxed">
                Com esta análise, torna-se mais fácil saber qual o caminho a seguir, a forma de cura. Tomando consciência, há uma aceitação, aceitando, a cura acontece.
              </p>
              <p className="leading-relaxed">
                Apenas a tomada de consciência/mudança interna pode realizar os tais "milagres". E estes milagres não são de ordem religiosa, são apenas a mudança da nossa consciência que atua para uma nova realidade.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center md:justify-start pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-start mb-6">
                <div className="rounded-full bg-primary/15 p-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">CONSULTA DE ADN</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Projeto Rosa - Título à esquerda, texto à direita */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mr-4">Projeto Rosa</h3>
                <div className="rounded-full bg-primary/15 p-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-8 rounded-xl p-8 shadow-lg border border-gray-100 transition-all ">
            <div className="max-w-s space-y-4 text-gray-700">
              <p className="font-medium text-lg text-primary">ATL/CENTRO DE DIA PARA IDOSOS TOTALMENTE GRATUITO</p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-4">
                <p className="italic text-gray-600">Mais informações em breve</p>
              </div>
            </div>
          </div>
        </div>

        {/* Saúde - Título à direita, texto à esquerda */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 pl-8 rounded-xl p-8 shadow-lg border border-gray-100 transition-all">
            <div className="max-w-md space-y-4 text-gray-700  ">
              <p className="font-medium text-lg text-primary">
                Tratamento revolucionário na saúde totalmente gratuito.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-4">
                <p className="italic text-gray-600">Em breve mais informações</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center md:justify-start pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-start mb-6">
                <div className="rounded-full bg-primary/15 p-4">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">Saúde</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Apoio às Vítimas - Título à esquerda, texto à direita */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center md:justify-end pr-8">
            <div className="max-w-md">
              <div className="flex items-center justify-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mr-4">Apoio às Vítimas</h3>
                <div className="rounded-full bg-primary/15 p-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-8 rounded-xl p-8 shadow-lg border border-gray-100 transition-all ">
            <div className="max-w-s space-y-4 text-gray-700">
              <p className="font-medium text-lg text-primary">Apoio às Vítimas de Violência Doméstica</p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-4">
                <p className="italic text-gray-600">Em breve mais informações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
