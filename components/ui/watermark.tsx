import Image from "next/image";

export const Watermark = () => {
  return (
    <div >
      <Image
        src="/watermark.webp"
        alt="Watermark"
        width={50}
        height={50}
      />
    </div>
  );
};