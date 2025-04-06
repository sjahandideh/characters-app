import Image from "next/image"

type FastImageProps = {
  id: string
  src: string
  alt: string
  style?: { [key: string]: string | number }
}

const FastImage = ({ id, src, alt, style }: FastImageProps) => {
  return (
    <Image
      key={id}
      src={src}
      alt={alt}
      width={400}
      height={400}
      loading="lazy"
      style={style}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

export default FastImage
