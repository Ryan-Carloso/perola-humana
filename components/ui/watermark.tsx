import Image from "next/image"

interface WatermarkProps {
  width?: number
  height?: number
  className?: string
  opacity?: number
}

export const Watermark = ({ width = 1000, height = 1000, className = "", opacity = 1 }: WatermarkProps) => {
  return (
    <div className="fixed inset-0 w-screen h-screen" style={{ opacity }}>
      <div className="relative w-full h-full opacity-20">
        <Image
          src="/watermarkcut.png"
          alt="Watermark"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </div>
  )
}
