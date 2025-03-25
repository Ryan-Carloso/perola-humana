import Image from "next/image"

export function PortfolioSection() {
  const portfolioItems = [
    { id: 1, title: "Premium Fabrics", image: "/portfolio-1.jpg" },
    { id: 2, title: "Custom Designs", image: "/portfolio-2.jpg" },
    { id: 3, title: "Sustainable Collections", image: "/portfolio-3.jpg" },
    { id: 4, title: "Luxury Textiles", image: "/portfolio-4.jpg" },
    { id: 5, title: "Innovative Materials", image: "/portfolio-5.jpg" },
    { id: 6, title: "Artisanal Craftsmanship", image: "/portfolio-6.jpg" },
  ]

  return (
    <section id="portfolio" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
            <div className="mx-auto h-1 w-24 bg-yellow-500"></div>
            <p className="mt-4 text-lg text-gray-700">
              Discover our range of high-quality textile products and custom solutions
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-100 transition-opacity">
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

