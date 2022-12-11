import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      // layout=""
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              33vw"
      width={786}
      height={400}
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
