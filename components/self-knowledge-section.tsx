export default function SelfKnowledgeSection() {
  return (
    <section 
      id="autoconhecimento" 
      className="py-16 relative"
      style={{ 
        backgroundImage: "url('/backgroundSelfKnow.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Isso faz o efeito parallax para um visual melhor
      }}
    >
      {/* Overlay para toda a seção para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      
      {/* Hero section with quotes overlay on image */}
      <div className="relative min-h-[10vh] mb-12 z-10">
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex flex-col justify-center items-center relative">
          <h2 className="mb-8 sm:mb-12 md:mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Autoconhecimento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full max-w-6xl">
            {/* First quote */}
            <div className="flex flex-col justify-center">
              <p className="text-center md:text-left text-xl sm:text-2xl font-semibold text-white leading-relaxed border-l-4 border-amber-400 pl-6 py-2">
                "O UNIVERSO SÓ TE DÁ AQUILO QUE PENSAS, SENTES E DIZES SER DIGNO DE RECEBER"
              </p>
            </div>

            {/* Second quote */}
            <div className="flex flex-col">
              <p className="text-center md:text-left text-base sm:text-lg text-white leading-relaxed border-l-4 border-amber-400 pl-6 py-2">
                "Eu sou vários, há multidões em mim, ma mesa da minha alma, sentam-se muitos e eu sou todos eles, há um velho, uma criança, um sábio, um tolo. Você nunca saberá com quem está sentado ou quanto tempo permanecerá com cada um de mim, mas prometo que se nos sentarmos à mesa, nesse ritual sagrado, eu lhe entregarei ao menos um de tantos que sou e correrei o risco de estarmos juntos no mesmo plano. Desde inicio evite ilusões, também tenho um lado mau, ruim que tento manter preso e que quando se solta me envergonha. Não sou santo nem exemplo infelizmente, entre tantos, um dia, eu me descubro e um dia eu serei eu mesmo definitivamente, como já foi dito: "Ouse conquistar a ti mesmo!""
              </p>
              <p className="mt-4 text-right text-sm sm:text-base text-white italic">— Nietzsche</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline-style content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-400 transform -translate-x-1/2 hidden md:block"></div>

          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 relative">
            <div className="md:text-right md:pr-20 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-white">
                <span className="inline-block border-b-2 border-amber-400 pb-2">QUEM SOU EU AFINAL?</span>
              </h3>
            </div>
            <div className="md:pl-20 relative">
              <div className="absolute left-0 top-0 md:-left-4 w-8 h-8 rounded-full bg-amber-400 transform md:translate-x-0 translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="bg-black/60 p-6 rounded-lg shadow-md border border-gray-700">
                <p className="text-gray-200 mb-4">
                  O teu corpo não é um corpo físico, mas sim uma massa de energia. O teu corpo é uma energia de baixa
                  frequência e manifesta-se como matéria. És feito de milhões de átomos e a energia são ondas electro
                  magnéticas. És energia e és feito de órgãos, os órgãos são feitos de tecidos, tecidos são feitos de
                  células, células são feitas de moléculas, moléculas são feitas de átomos.
                </p>
                <p className="text-gray-200 mb-4">
                  Quando entenderes que não és um corpo físico, mas sim uma energia (alma) que faz parte do divino, que
                  o corpo é uma massa energética que vibra de acordo com a tua mente, que tens o poder de vibrar o que
                  quiseres e que automaticamente o teu corpo vibra na mesma sintonia, ai vais entender que só vives a
                  realidade que tu próprio "possuis dentro de ti".
                </p>
                <p className="text-gray-200">
                  Toda a cura só começa quando encarares as tuas sombras e feridas com amor. Quando percebes que afinal
                  não és a tua dor, não és os teus problemas e dificuldades. Quebra todos os bloqueios energéticos e
                  muros que construíste para te proteger. Essa é uma versão forjada pelas feridas, dores, raiva,
                  vergonha e medos, e vais ver que afinal nunca estiveste em pedaços, afinal tu só tinhas esquecido quem
                  eras. Reivindica a tua luz, ativa o teu poder pessoal, tu, só te tornaste tu, quando incorporas o teu
                  novo Eu!
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4 relative">
            <div className="md:pl-20 relative order-2 md:order-1">
              <div className="absolute right-0 top-0 md:-right-4 w-8 h-8 rounded-full bg-amber-400 transform md:translate-x-0 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="bg-black/60 p-6 rounded-lg shadow-md border border-gray-700">
                <p className="text-gray-200 mb-4">
                  O despertar de consciência não acontece de uma vez, nem de um momento para outro e vai muito além
                  desta vida, é um processo contínuo de sintonização com a tua essência e com planos mais elevados.
                  Quanto mais despertares, mais te apercebes que a realidade que te venderam é apenas um reflexo da
                  programação do sistema. O primeiro sinal do despertar, é questionar, questionar as estruturas
                  impostas, as crenças programadas e os padrões que te mantêm aprisionado.
                </p>
                <p className="text-gray-200 mb-4">
                  Tudo o que aprendeste dentro da matrix foi desenhado para te manter a dormir, repetindo ciclos sem
                  consciência, mas quando conseguimos ver além do "veu", algo dentro de ti ativa a conexão com o teu
                  verdadeiro ser e subtilmente começa aquela sensação de vazio ou insatisfação, começas a perceber os
                  sinais, as "coincidências" (coincidências não existem), as sincronicidades, aquela intuição mais forte
                  que te guia para o que é certo e isso, é apenas o despertar de consciência.
                </p>
                <p className="text-gray-200">
                  Imagina que tudo o que acreditavas até agora, era apenas uma pequena parte do que realmente existe. O
                  despertar de consciência (ou espiritual) é como abrir uma porta para um novo universo, e quando tu
                  atravessas essa porta, nada mais volta a ser como antes. Começas a questionar as histórias, os
                  padrões, as crenças que carregas, percebes que afinal, tu não és atua dor, mas que a dor é uma
                  resposta ao que já se passou, aí tu curas o teu coração. Esquece o que te disseram que eras ou como
                  terias que ser, tens que renascer das tuas cinzas como a Fénix, para te reconectar com a fonte, que é
                  o único Pai e mãe de quem procedes, e reeinventa-te sabendo que fazes parte de um todo neste processo.
                  Por isso não esqueças jamais: "A tua vibração atraí a tua realidade e só tu és o responsável por ela,
                  a boa ou má sorte não existe porque tudo obedece a uma ordem divina e tudo está interconectado".
                </p>
              </div>
            </div>
            <div className="md:text-right md:pr-20 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-4 text-white">
                <span className="inline-block border-b-2 border-amber-400 pb-2">
                  DESPERTAR DE CONSCIÊNCIA É UM CAMINHO SEM VOLTA
                </span>
              </h3>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="md:text-right md:pr-20 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-white">
                <span className="inline-block border-b-2 border-amber-400 pb-2">APOCALIPSE O QUE É AFINAL?</span>
              </h3>
            </div>
            <div className="md:pl-20 relative">
              <div className="absolute left-0 top-0 md:-left-4 w-8 h-8 rounded-full bg-amber-400 transform md:translate-x-0 translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="bg-black/60 p-6 rounded-lg shadow-md border border-gray-700">
                <p className="text-gray-200 mb-4">
                  Muitos estão a confundir o tão falado apocalipse bíblico, com o despertar planetário. Vamos falar de
                  uma forma breve sobre essa confusão e a verdadeira transição que nos chama a despertar de dentro para
                  fora.
                </p>
                <p className="text-gray-200 mb-4">
                  A bíblia, um livro codificado e manipulado foi usado para prender a consciência humana em dogmas,
                  medos, numa matrix espiritual que mantém as pessoas presas na espera de um salvador, a sua narrativa
                  foi estruturada como uma programação preditiva, induzindo crenças limitantes que fazem as próprias
                  pessoas manifestarem eventos negativos através do inconsciente coletivo.
                </p>
                <p className="text-gray-200">
                  Até o conhecimento do apelidado "Jesus" (nome criado pelo homem) foi distorcido pelo império Romano.
                  "Jesus" nunca pregou adoração cega ou intermediários, mas sim a expansão da consciência e o amor
                  incondicional. A tão falada "volta de Cristo", é apenas o despertar da consciência do ser humano, que
                  é apenas um evento interno que se alinha com a nova realidade, e jamais é ou será um evento externo.
                  Quem elevar a sua vibração, sintonizar-se-á com essa nova era de luz e consciência e alinhar- se-á com
                  a nova realidade, com a nova vibração do planeta e jamais o apocalipse!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}