import Image from "next/image";

export const Watermark = () => {
  return (
    <div >
      <Image
        src="/watermark.webp"
        alt="Watermark"
        width={100}
        height={100}
      />
    </div>
  );
};