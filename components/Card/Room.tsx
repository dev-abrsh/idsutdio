export default function Room(props: RoomType) {
  return (
    <div
      className={`${
        props.premium || props.premiumStudy ? 'border-b-[3px]' : 'border-b'
      } relative border-black-20 py-4 px-3`}
    >
      {(props.premium || props.premiumStudy) && (
        <span
          className={`${
            props.premium ? 'mx-11 bg-primary-1' : 'left-0 bg-[#C4C4C4]'
          } absolute -bottom-[3px]  h-[3px] w-11 `}
        ></span>
      )}
      <div className="flex justify-between text-sm font-normal leading-5 text-black-100">
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
      <div className="mt-[6px] flex items-center justify-between text-xs text-black-60">
        <div className="flex items-center gap-1 ">
          <div className="rounded-[4px] bg-black-20 py-[2px] px-[6px]  ">
            {props.type}
          </div>
          <span>{props.height}</span>
        </div>
        <p>{props.psf}</p>
      </div>
    </div>
  )
}

interface RoomType {
  id: number
  name: string
  type: string
  height: string
  psf: string
  price: string
  premium?: boolean
  premiumStudy?: boolean
}
