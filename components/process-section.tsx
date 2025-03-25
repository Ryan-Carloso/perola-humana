import { CheckCircle2, Scissors, Truck, Users } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "We work closely with you to understand your specific needs and requirements.",
      icon: Users,
    },
    {
      id: 2,
      title: "Production",
      description: "Our skilled team crafts your textiles with precision and attention to detail.",
      icon: Scissors,
    },
    {
      id: 3,
      title: "Delivery",
      description: "We ensure timely delivery of your products, meeting all quality standards.",
      icon: Truck,
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks before reaching you.",
      icon: CheckCircle2,
    },
  ]

  return (
    <section id="process" className="w-full bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Do It</h2>
            <div className="mx-auto h-1 w-24 bg-yellow-500"></div>
            <p className="mt-4 text-lg text-gray-700">
              Our streamlined process ensures quality and satisfaction at every step
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <step.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

