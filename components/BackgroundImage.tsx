import Image from 'next/image'
import ornamentImage from '@public/ornament.png'

export default function BackgroundImage() {
  return (
    <Image
      alt=""
      src={ornamentImage}
      fill
      className="-z-10 object-cover sm:hidden"
      quality={100}
    />
  )
}
