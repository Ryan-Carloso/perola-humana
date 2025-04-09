import Image from "next/image"

interface WatermarkProps {
  width?: number
  height?: number
  className?: string
  opacity?: number
}

export const Watermark = ({ width = 100, height = 100, className = "", opacity = 1 }: WatermarkProps) => {
  return (
    <div className={`w-full h-full ${className}`} style={{ opacity }}>
      <div className="relative w-full h-full opacity-30">
        <Image
          src="/2watermark.png"
          alt="Watermark"
          fill
          sizes="100vw"
          className="object-contain"
          priority
          quality={100}
        />
      </div>
    </div>
  )
}
