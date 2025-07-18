// components/Footer.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white text-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Esquerda: Logo + Info */}
        <div className="flex items-center space-x-3">
          <div className="leading-tight text-gray-100">
            <p className="font-semibold">PEROLA HUMANA ASSOCIAÇÃO HUMANITARIA</p>
            <p>Guimarães e Porto</p>
            <p>NIF: 518 731 278</p>
          </div>
        </div>


        {/* Direita: Contactos */}
        <div className="text-right space-y-2 text-gray-200">
          <p className="flex items-center justify-end hover:text-white transition-colors">
            <Phone className="mr-1" size={16} /> 221 117 865 / 93 906 9379
          </p>
          <a
            href="https://www.instagram.com/perola.humana?igsh=MWk4NXJoZGllczU3MQ%3D%3D&utm_source=site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end hover:text-white transition-colors"
          >
            <Instagram className="mr-1" size={16} /> Instagram
          </a>
        </div>
      </div>

      <div className="bg-black/20 text-center text-xs py-3 text-gray-200">
        &copy; {new Date().getFullYear()} P&eacute;rola Humana. Todos os direitos reservados.
      </div>
    </footer>
  )
}