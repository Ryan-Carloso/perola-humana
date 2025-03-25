export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Tecnologia na Saúde</h2>

        <p className="mb-12 text-center text-xl">
          "A grande revolução na saúde. Disponível totalmente gratuito para todos. Informações em breve."
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/I5-aQyEDC4E"
                title="Tecnologia na Saúde - Vídeo 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-center text-gray-600">Vídeo 1: Inovações Tecnológicas</p>
          </div>

          <div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M-VMd2ci06E"
                title="Tecnologia na Saúde - Vídeo 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-center text-gray-600">Vídeo 2: Revolução na Saúde</p>
          </div>
        </div>
      </div>
    </section>
  )
}

