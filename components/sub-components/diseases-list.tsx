"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { diseases } from "@/lib/Listdiseases"

export default function DiseasesList() {
  const [openLetters, setOpenLetters] = useState<string[]>([])

  const toggleLetter = (letter: string) => {
    setOpenLetters((prev) => (prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]))
  }

  const getDiseasesCount = (diseaseList: Array<{ name: string; description: string }>, letter: string) => {
    let count = diseaseList.filter(disease => !disease.name.includes("OBS")).length
  
    
    return count
  }

  return (
    <div className="max-w-5xl mx-auto mt-16 px-4 sm:px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-yellow-600">Lista de Doenças</h3>

      <div className="md:hidden space-y-4">
        {Object.entries(diseases)
          .filter(([_, list]) => list.length > 0)
          .map(([letter, diseaseList], index) => {
            const isOpen = openLetters.includes(letter)
            const diseaseCount = getDiseasesCount(diseaseList, letter)
            const alignLeft = index % 2 === 0

            return (
              <div
                key={letter}
                className={`
                  overflow-hidden 
                  transition-all duration-300
                  ${alignLeft ? "mr-auto" : "ml-auto"} 
                  max-w-[90%]
                `}
              >
                <button
                  onClick={() => toggleLetter(letter)}
                  className={`
                    w-full flex items-center justify-between p-4
                    ${isOpen ? "bg-yellow-500 text-white" : "bg-yellow-50 hover:bg-yellow-100"} 
                    rounded-lg transition-all duration-200 group
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${isOpen ? "bg-white text-yellow-500" : "bg-yellow-500 text-white"}
                        font-bold text-lg transition-colors duration-200
                      `}
                    >
                      {letter}
                    </div>
                    <div>
                      <span className="text-base font-medium">
                        {diseaseCount} {diseaseCount === 1 ? "doença" : "doenças"}
                      </span>
                      <p className="text-xs opacity-75">Clique para ver mais</p>
                    </div>
                  </div>
                  <div>{isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>
                </button>

                <div
                  className={`
                    transition-opacity duration-300 ease-in-out
                    ${isOpen ? "opacity-100" : "opacity-0 hidden"}
                  `}
                >
                  <div className="bg-white p-4 mt-2 rounded-lg shadow-lg border border-yellow-100">
                    <ul className="space-y-4 divide-y divide-yellow-100">
                      {diseaseList.map((disease, idx) => (
                        <li key={idx} className={`${idx > 0 ? "pt-4" : ""} text-gray-700`}>
                          <h4 className="font-semibold text-lg text-yellow-700 mb-1">{disease.name}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{disease.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {Object.entries(diseases)
          .filter(([_, list]) => list.length > 0)
          .map(([letter, diseaseList]) => {
            const isOpen = openLetters.includes(letter)
            const diseaseCount = getDiseasesCount(diseaseList, letter)

            return (
              <div key={letter} className="overflow-hidden transition-all duration-300 flex flex-col">
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
                    transition-all duration-300 ease-in-out overflow-hidden flex-1
                    ${isOpen ? "opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="bg-white p-6 mt-2 rounded-lg shadow-lg border border-yellow-100 h-full">
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

