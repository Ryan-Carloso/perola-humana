import Image from "next/image";

interface WatermarkProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Watermark = ({ width = 100, height = 100, className = "" }: WatermarkProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Image
        src="/watermark.png"
        alt="Watermark"
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority
        quality={100}
      />
    </div>
  );
};