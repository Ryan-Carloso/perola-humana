import AudioPlayer from "./audioplayer";

export default function IntroductionSection() {
    return (
      <div className="mb-8 max-w-4xl mx-auto">
        <div className="mb-6 text-gray-700 space-y-4">
          <div className="bg-green-50 p-6 rounded-lg mb-8 shadow-md">
            <h3 className="text-xl font-bold text-center mb-4 text-green-700">
              ACONSELHO REMÉDIOS QUE NÃO ENCONTRA NA FARMÁCIA
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="font-bold mr-2">JEJUM,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">AMAR,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">GRATIDÃO,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">COMIDA DE VERDADE,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">COMER NA HORA CERTA,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">PENSAMENTO POSITIVO,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">PERDOAR,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">RIR,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">DANÇAR,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">APANHAR SOL</span> (com consciência), É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">MEDITAÇÃO,</span> É UM REMÉDIO
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">EXERCÍCIO FISICO,</span> É UM REMÉDIO
              </li>
            </ul>
            <p className="text-center mt-4 font-bold text-green-700">CONSUMIR COM FREQUENCIA!</p>
          </div>
          <p>ou ouça o audio</p>
          <AudioPlayer src="/audio.mp3" />
  
          <h3 className="text-xl font-bold mb-2">INTRODUÇÃO À SAÚDE</h3>
  
          <p>
          O acesso ao inconsciente exige compreensão e perspicácia. O meu objetivo não é complicar
          ou revolucionar, mas simplificar permitindo que todos resgatem os conhecimentos esquecidos.
          </p>
  
  <p>
    O corpo humano, devido às constantes transformações e contradições que nem a medicina consegue explicar totalmente, tem sido estudado há milênios. 
    <br /> Enquanto isso, a mente humana expande o poder da tecnologia encontrando verdades ou fragmentos dela além do nosso planeta. O que hoje parece ficção, amanhã vai se tornar a nossa realidade.
    <br /> A doença sempre foi um mistério diante do qual os grandes sonhos perdem a força e o mundo parece mais escuro do que na realidade é.
    <br /> Pesquisadores procuram provar forças que atuam no nosso organismo. Sabem que nos vasos sanguíneos, fluem propriedades semelhantes à eletricidade, (energia magnética e vibração), a que a medicina chama de “Sistema Nervoso Elétrico” e admitem, cada vez mais, que somos regidos por essa energia”. Hoje, cientistas já comprovam a Força Criadora e outras energias nos laboratórios. 
    <br /> Limitado pela densidade vivida, o ser humano definiu três dimensões visíveis, comprimento, largura e altura, ignorando a dimensão mental.
    <br /> A PNL (Programação Neurolinguística) ensina que somos vítimas da nossa própria criação mental e que o cérebro pode ser reprogramado a levar o inconsciente a acredita nesse novo programa, pois desde crianças, somos influenciados pelo ambiente em que vivemos e refletimos crenças alheias.
    <br /> Eu pretendo mostrar como ultrapassar essas crenças limitantes e explorar dimensões escondidas (planos inconscientes) para alcançar o controlo emocional.  Independentemente da sua crença e cultura, saiba que tudo pode ser transformado com novas escolhas, pois a cura não vem da capacidade intelectual, mas da perceção do próprio sistema interior.
    <br /> Para que o nosso corpo fique livre dessas psicossomatizações, é essencial praticar uma auto-reflexão sincera e reajustar a nossa harmonia interior. Isso exige compreender a origem dos conflitos que tivemos com os outros e reconciliarmo-nos com nós mesmos
  </p>
  
          <div className="bg-blue-50 p-6 rounded-lg my-6 shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">PERDÃO O QUE É?</h3>
            <p>
            Perdoar verdadeiramente é uma questão de inteligência! 
            É um processo interno que dissolve ressentimentos, mágoas e dores que prendem a mente e o coração a situações do passado, é a forma de provar a si mesmo que as suas emoções negativas estão sob o seu controle e que conhece o seu próprio potencial para conquistar novos caminhos e realidades. Perdoar é um ato de amor-próprio. É uma escolha consciente de deixar o passado no passado e viver plenamente o presente. Então, perdoe, não pelo outro, mas por si, liberte-se de fardos! Perdoe !
            </p>
  
            <p>
              Perdoar é um ato de amor-próprio. É uma escolha consciente de deixar o passado no passado e viver plenamente
              o presente. Então, perdoe. Não pelo outro, mas por você.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  