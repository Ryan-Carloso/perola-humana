import Image from "next/image";

interface WatermarkProps {
  width?: number;
  height?: number;
}

export const Watermark = ({ width = 100, height = 100 }: WatermarkProps) => {
  return (
    <div>
      <Image
        src="/watermark.webp"
        alt="Watermark"
        width={width}
        height={height}
      />
    </div>
  );
};