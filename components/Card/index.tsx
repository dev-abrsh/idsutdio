import Room from './Room'
import BuildingImage from './BuildingImage'
import Developer from './Developer'
import BuildingInfo from './BuildingInfo'

const rooms = [
  {
    id: 1,
    name: '3BR',
    type: '7 types',
    height: '1,500 - 1,650 sqft',
    psf: '$2,500 - $2,650 PSF',
    price: '$1.258M - $1.398M',
    premium: false,
  },
  {
    id: 2,
    name: '3BR Premium',
    price: '$1.258M - $1.398M',
    type: '3PS1-PH',
    height: '1,650 sqft',
    psf: '$2,500 - $2,650 PSF',
    premium: true,
  },
  {
    id: 3,
    name: '3BR Premium + Study',
    price: '$1.258M - $1.398M',
    type: '7 types',
    height: '1,500 - 1,650 sqft',
    psf: '$2,500 - $2,650 PSF',
    premiumStudy: true,
  },
]

export default function Card({ imageURL, tag }) {
  return (
    <div className=" mx-4 mt-5 mb-6 max-w-[650px] shadow-lg">
      <div className="items-center sm:flex">
        <BuildingImage imageURL={imageURL} tag={tag} />
        <BuildingInfo />
      </div>
      <div className="border-t border-black-20">
        {rooms.map((room) => (
          <Room key={room.id} {...room} />
        ))}
      </div>
      <Developer />
    </div>
  )
}
