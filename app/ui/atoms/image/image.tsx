import Image from "next/image";
export const AtomImage = ({ src, alt, width, height }: Image.IProps) => {
  return (
    <Image
      src={src} // Path to the image
      alt={alt ? alt : ""} // Alternative text
      width={width} // Width of the image (can be in pixels or a number)
      height={height} // Height of the image
    />
  );
};
