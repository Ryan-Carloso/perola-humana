import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.svg" alt="Confecções Lança Logo" width={150} height={50} />
            </Link>
            <p className="text-sm text-gray-600">
              Quality textile manufacturing since 1973. Committed to excellence, innovation, and sustainability.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-yellow-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-yellow-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-600 hover:text-yellow-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-600 hover:text-yellow-600">
                  How we do it
                </Link>
              </li>
              <li>
                <Link href="#responsibility" className="text-gray-600 hover:text-yellow-600">
                  Social Responsibility
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-yellow-600">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Custom Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Textile Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Sustainable Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-yellow-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Confecções Lança. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

