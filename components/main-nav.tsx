"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Confecções Lança Logo" width={180} height={60} priority />
        </Link>
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <Link href="/" className="text-sm font-medium text-yellow-600 transition-colors hover:text-yellow-700">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600">
            About Us
          </Link>
          <Link href="#portfolio" className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600">
            Portfolio
          </Link>
          <Link href="#process" className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600">
            How we do it
          </Link>
          <Link
            href="#responsibility"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
          >
            Social Responsibility
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600">
            Contacts
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600">
            <span className="flex items-center gap-1">
              <Image src="/en-flag.svg" alt="English" width={20} height={15} />
            </span>
          </Link>
        </nav>
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-50 bg-white p-4 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-yellow-600 transition-colors hover:text-yellow-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              How we do it
            </Link>
            <Link
              href="#responsibility"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Social Responsibility
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center gap-1">
                <Image src="/en-flag.svg" alt="English" width={20} height={15} />
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

