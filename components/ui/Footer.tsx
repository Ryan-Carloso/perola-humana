// components/Footer.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner text-sm text-gray-700">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Esquerda: Logo + Info */}
        <div className="flex items-center space-x-3">
          <div className="leading-tight">
            <p className="font-semibold">PEROLA HUMANA ASSOCIAÇÃO HUMANITARIA</p>
            <p>Guimarães e Porto</p>
            <p>NIF: 518 731 278</p>
          </div>
        </div>


        {/* Direita: Contactos */}
        <div className="text-right space-y-1">
          <p className="flex items-center justify-end">
            <Phone className="mr-1" size={16} /> 221 117 865 / 93 906 9379
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end hover:text-blue-600"
          >
            <Instagram className="mr-1" size={16} /> Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-100 text-center text-xs py-2 text-gray-500">
        © {new Date().getFullYear()} Pérola Humana. Todos os direitos reservados.
      </div>
    </footer>
  )
}