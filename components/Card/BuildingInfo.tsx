import DividerIcon from '@icons/DividerIcon'

export default function BuildingInfo() {
  return (
    <div>
      <div className="ml-3  flex items-center gap-3 pt-3">
        <h6 className="text-lg font-semibold leading-6 text-black-100">
          Amber Park
        </h6>
        <h6 className="text-sm font-normal text-black-80">in Amber Garden</h6>
      </div>
      <div className="mb-2 flex items-center px-3 text-sm text-black-60">
        <p>Core Central</p>
        <DividerIcon />
        <p>Prime Disctrict</p>
        <DividerIcon />
        <p>D15 - East Coast/M</p>
      </div>
      <CkkWest />
      <div className="mb-2 flex divide-x divide-black-20 px-1 text-sm font-normal text-black-100">
        <p className="px-2">Dec 2021</p>
        <p className="px-2">99-Years</p>
        <p className="px-2">Condominium</p>
      </div>
      <Progresses />
    </div>
  )
}

function CkkWest() {
  return (
    <div className="mb-2 flex gap-1 overflow-hidden px-3 text-sm font-normal leading-5 text-black-60  ">
      <p className="whitespace-nowrap">1,250m to</p>
      <div className="flex items-center text-xs font-semibold leading-4 tracking-[0.02em] text-white">
        <span className="bg-[#00ACBC] p-[2px]">JS1</span>
        <span className="bg-[#9D5A18] p-[2px]">JS1</span>
        <span className="bg-[#00943A] p-[2px]">JS1</span>
      </div>
      <p className="whitespace-nowrap">Choa Chu Kang West MRT</p>
    </div>
  )
}
function Progresses() {
  return (
    <div className="mb-4 flex gap-2 overflow-hidden px-3 text-xs font-normal text-black-60">
      <div className="whitespace-nowrap bg-black-20 py-[2px] px-1">
        Total: 450 units
      </div>
      <div className="whitespace-nowrap bg-black-20 py-[2px] px-1">
        Available: 150 units
      </div>
      <div className="whitespace-nowrap bg-black-20 py-[2px] px-1">
        Sold: 300 units
      </div>
    </div>
  )
}
