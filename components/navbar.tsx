"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Watermark } from "./ui/nav/navwatermark"
import Image from "next/image";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-80 shadow-sm">
      <div className="container mx-auto flex h-30 items-center justify-between px-4">
      <div className="flex flex-row items-center space-x-10">
      <Image
        src="/perolahumana.png"
        alt="Watermark"
        width={200}
        height={200}
        className="mb-4"
      />
  <Watermark />
</div>

        

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Início
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-blue-600">
            Sobre Nós
          </Link>
          <Link href="/fazemos" className="text-gray-700 hover:text-blue-600">
            O que Fazemos
          </Link>
          <Link href="/doencas" className="text-gray-700 hover:text-blue-600">
            Doenças
          </Link>
          <Link href="/tecnologia" className="text-gray-700 hover:text-blue-600">
            Saude
          </Link>
          <Link href="/autoconhecimento" className="text-gray-700 hover:text-blue-600">
            Autoconhecimento
          </Link>
          <Link href="/contacto" className="text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 bg-white px-4 py-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Sobre Nós
            </Link>
            <Link href="/fazemos" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              O que Fazemos
            </Link>
            <Link href="/doencas" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Doenças
            </Link>
            <Link href="/tecnologia" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Saude
            </Link>
            <Link href="/autoconhecimento" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Autoconhecimento
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

