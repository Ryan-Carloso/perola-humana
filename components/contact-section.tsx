"use client"

import type React from "react"
import { Watermark } from "./ui/watermark"

import { useState } from "react"
import { Mail } from "lucide-react"

const RECIPIENT_EMAIL = 'geral@perolahumana.org'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n\n` +
      `Mensagem:\n${formData.message}`
    )}`

    window.location.href = mailtoLink
    
    // Reset form after opening mail client
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contacto" className="py-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
  <div className="w-full max-w-4xl h-full max-h-[30vh]">
  <Watermark />
    </div>
  </div>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Fale Connosco</h2>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-600" />            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>

          {/* Informações de contato com design melhorado */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contacto</h3>
                <p className="text-gray-600">Entre em contacto conosco</p>
              </div>
              
              <div className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Localização</h3>
                <p className="text-gray-600">Porto, Portugal</p>
              </div>
              
              <div className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefone</h3>
                <p className="text-gray-600">+351 22 111 7865</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

