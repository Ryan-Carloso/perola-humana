"use client"

import { CalendarDays, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

const eventosFuturos = [
  {
    titulo: "Campanha Solidária de Alimentação",
    data: "15 de Julho de 2025",
    local: "Centro Comunitário de Guimarães",
    descricao: "Distribuição de cabazes alimentares a famílias carenciadas da região.",
    imagem: "/eventos/campanha-alimentar.jpg",
  },
  {
    titulo: "Palestra: Saúde Mental nas Comunidades",
    data: "28 de Julho de 2025",
    local: "Associação Pérola Humana - Porto",
    descricao: "Sessão de sensibilização com psicólogos convidados sobre autocuidado e apoio mútuo.",
    imagem: "/eventos/palestra-saude-mental.jpg",
  },
]

const eventosPassados = [
  {
    titulo: "Arraial Solidário",
    data: "21 de Junho de 2025",
    local: "Jardim da Alameda, Porto",
    descricao: "Festa de angariação de fundos com música, comida típica e atividades para famílias.",
    imagem: "/eventos/arraial-solidario.jpg",
  },
  {
    titulo: "Oficina de Empoderamento Feminino",
    data: "5 de Junho de 2025",
    local: "Guimarães",
    descricao: "Workshop com partilhas, dinâmicas e apoio psicológico.",
    imagem: "/eventos/oficina-empoderamento.jpg",
  },
]

export default function EventosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Eventos da Pérola Humana</h1>

      {/* Eventos futuros */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CalendarDays size={20} /> Próximos Eventos
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {eventosFuturos.map((evento, idx) => (
            <div key={idx} className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={evento.imagem}
                alt={evento.titulo}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{evento.titulo}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <Clock className="inline mr-1" size={14} />
                  {evento.data} – {evento.local}
                </p>
                <p className="text-gray-700">{evento.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eventos passados */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle size={20} /> Eventos Anteriores
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {eventosPassados.map((evento, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={evento.imagem}
                alt={evento.titulo}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{evento.titulo}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <Clock className="inline mr-1" size={14} />
                  {evento.data} – {evento.local}
                </p>
                <p className="text-gray-700">{evento.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}