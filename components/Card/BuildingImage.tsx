import Image from 'next/image'
import PhotographSolidIcon from '@icons/PhotographSolidIcon'

export default function BuildingImage({ imageURL, tag }) {
  return (
    <div className="relative h-full">
      <Image src={imageURL} alt="" className="sm:h-[173px] sm:max-w-[340px]" />
      <div className="absolute top-0 bottom-0 m-3 flex flex-col justify-between">
        <button className="rounded-[4px] bg-primary-1 py-1 px-2 text-xs font-medium tracking-wide text-white">
          Mixed Development
        </button>
        <div className="flex w-fit items-center gap-[5px] rounded-[4px] bg-black-100/70 px-[10px] py-1 text-xs font-semibold text-white">
          <PhotographSolidIcon />
          <span>{tag}</span>
        </div>
      </div>
    </div>
  )
}
