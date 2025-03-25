import { Leaf, Recycle, Heart } from "lucide-react"

export function ResponsibilitySection() {
  const initiatives = [
    {
      id: 1,
      title: "Sustainable Materials",
      description: "We prioritize eco-friendly materials and sustainable sourcing practices.",
      icon: Leaf,
    },
    {
      id: 2,
      title: "Waste Reduction",
      description: "Our production processes are designed to minimize waste and environmental impact.",
      icon: Recycle,
    },
    {
      id: 3,
      title: "Community Support",
      description: "We actively engage with and support our local communities through various initiatives.",
      icon: Heart,
    },
  ]

  return (
    <section id="responsibility" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Social Responsibility</h2>
            <div className="mx-auto h-1 w-24 bg-yellow-500"></div>
            <p className="mt-4 text-lg text-gray-700">Our commitment to sustainable practices and social initiatives</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {initiatives.map((initiative) => (
              <div key={initiative.id} className="rounded-lg bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <initiative.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-gray-900">{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

