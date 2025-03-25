export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Sobre Nós</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">A Nossa História</h3>
            <p className="text-gray-700">
              {/* Replace with actual content when received */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Porquê o Nome Pérola Humana</h3>
            <p className="text-gray-700">
              {/* Replace with actual content when received */}
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
              Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

