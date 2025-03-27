import Image from "next/image";

export const Watermark = () => {
  return (
    <div style={{ opacity: 0.5 }}>
      <Image
        src="/watermark.webp"
        alt="Watermark"
        width={50}
        height={50}
      />
    </div>
  );
};