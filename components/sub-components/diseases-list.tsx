"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { diseases } from "@/lib/Listdiseases"

export default function DiseasesList() {
  const [openLetters, setOpenLetters] = useState([])

  const toggleLetter = (letter) => {
    setOpenLetters((prev) => (prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]))
  }

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h3 className="text-3xl font-bold mb-10 text-center text-yellow-600">Lista de Doenças</h3>

      <div className="grid gap-4">
        {Object.entries(diseases)
          .filter(([_, list]) => list.length > 0)
          .map(([letter, diseaseList]) => {
            const isOpen = openLetters.includes(letter)
            const diseaseCount = diseaseList.length

            return (
              <div key={letter} className="overflow-hidden">
                <button
                  onClick={() => toggleLetter(letter)}
                  className={`
                    w-full flex items-center justify-between p-5 
                    ${isOpen ? "bg-yellow-500 text-white" : "bg-yellow-50 hover:bg-yellow-100"} 
                    rounded-lg transition-all duration-200 group
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      ${isOpen ? "bg-white text-yellow-500" : "bg-yellow-500 text-white"}
                      font-bold text-xl transition-colors duration-200
                    `}
                    >
                      {letter}
                    </div>
                    <div>
                      <span className="text-lg font-medium">
                        {diseaseCount} {diseaseCount === 1 ? "doença" : "doenças"}
                      </span>
                      <p className="text-sm opacity-75">Clique para ver mais</p>
                    </div>
                  </div>
                  <div>{isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}</div>
                </button>

                <div
                  className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}
                `}
                >
                  <div className="bg-white p-6 mt-2 rounded-lg shadow-lg border border-yellow-100">
                    <ul className="space-y-6 divide-y divide-yellow-100">
                      {diseaseList.map((disease, idx) => (
                        <li key={idx} className={`${idx > 0 ? "pt-6" : ""} text-gray-700`}>
                          <h4 className="font-semibold text-xl text-yellow-700 mb-2">{disease.name}</h4>
                          <p className="text-gray-600 leading-relaxed">{disease.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

