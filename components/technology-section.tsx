import { Watermark } from "./ui/watermark"


export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
  <div className="w-full max-w-4xl h-full max-h-[40vh]">
  <Watermark />
    </div>
  </div>
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Tecnologia na Saúde</h2>

        <p className="mb-12 text-center text-xl">
          A grande revolução na saúde. Disponível totalmente gratuito para todos. Informações em breve.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <video
                width="100%"
                height="100%"
                src="/video 01.mp4"
                poster="/thumb01.png"
                title="Tecnologia na Saúde - Vídeo 1"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              ></video>
            </div>
            <p className="mt-2 text-center text-gray-600">Vídeo 1: Inovações Tecnológicas</p>
          </div>

          <div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <video
                width="100%"
                height="100%"
                src="/video 02.mp4"
                poster="/thumb02.png"
                title="Tecnologia na Saúde - Vídeo 2"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              ></video>
            </div>
            <p className="mt-2 text-center text-gray-600">Vídeo 2: Revolução na Saúde</p>
          </div>
        </div>
      </div>
    </section>
  )
}

