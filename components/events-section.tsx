"use client"

import { CalendarDays, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

const eventosFuturos = [
  {
    titulo: "Em breve",
    data: "-",
    local: "-",
    descricao: "-",
    imagem: "/eventos/arraial-solidario.jpg",
  },
]

const eventosPassados = [
  {
    titulo: "Em breve",
    data: "-",
    local: "-",
    descricao: "-",
    imagem: "/eventos/arraial-solidario.jpg",
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