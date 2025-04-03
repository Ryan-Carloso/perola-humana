import { Heart, Users, Activity, Shield } from "lucide-react"

export default function WhatWeDoSection() {
  return (
    <section id="fazemos" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">O Que Fazemos</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Objetivos */}
          <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-5px]">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-primary/15 p-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Objetivos</h3>
            </div>
            <div className="space-y-4 text-gray-700">
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
              <p className="leading-relaxed">
                Nas instituições, mesmo sendo muito bem cuidadas e amadas, na verdade não sabem o que é ter uma família,
                uma mão protetora de um pai ou mãe. Desconhecem o mundo que os espera repleto de boas oportunidades e
                que podem não ser alcançadas, porque simplesmente a estrutura emocional e mental não foi trabalhada em
                criança e ficam à mercê dos acasos da vida, acreditando por falsas crenças que, "é porque tem que ser
                assim".
              </p>
              <p className="leading-relaxed">
                A mesma situação se aplica aos idosos que vivem completamente abandonados pelos filhos e/ou familiares.
                Vivem isolados sem qualquer convívio social por falta de meios de locomoção, transporte e/ou condições
                financeiras.
              </p>
            </div>
          </div>

          {/* DNA consulta */}
          <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-5px]">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-primary/15 p-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">CONSULTA DE ADN</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">A consulta de ADN (DNA) permite perceber a origem dos bloqueios, permite perceber quais as
memórias nas suas células que impedem o sucesso, seja na saúde, família, profissional,
financeira etc.</p>
<p className="leading-relaxed">Com esta análise, é mais fácil saber qual o caminho a seguir, a forma de cura e/ou limpeza a
ser feita, a postura perante a vida, as mudanças a serem feitas a nível de personalidade, afim
de, passo a passo re-criar a sua vida e obter o sucesso pleno em qualquer área da sua vida</p>

            </div>
          </div>

          {/* Projeto Rosa */}
          <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-5px]">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-primary/15 p-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Projeto Rosa</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-lg text-primary">ATL/CENTRO DE DIA PARA IDOSOS TOTALMENTE GRATUITO</p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-4">
                <p className="italic text-gray-600">Mais informações em breve</p>
              </div>
            </div>
          </div>

          {/* Saúde */}
          <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-5px]">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-primary/15 p-4">
                <Activity className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Saúde</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-lg text-primary">
                Tratamento revolucionário na saúde totalmente gratuito.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mt-4">
                <p className="italic text-gray-600">Em breve mais informações</p>
              </div>
            </div>
          </div>

          {/* Apoio às Vítimas */}
          <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:translate-y-[-5px]">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-primary/15 p-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Apoio às Vítimas de Violência Doméstica</h3>
            </div>
            <div className="space-y-4 text-gray-700">
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

