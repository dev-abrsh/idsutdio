import FilterIcon from '@icons/FilterIcon'

export default function MobileFilter() {
  return (
    <button className="flex items-center gap-2 rounded-md border border-black-30 py-[6px] px-3 md:hidden">
      <FilterIcon />
      <span className="text-base font-normal">Filter</span>
      <div className="h-fit w-fit rounded-full bg-primary-1 py-[1px] px-[6px] text-xs font-semibold text-white">
        4
      </div>
    </button>
  )
}
