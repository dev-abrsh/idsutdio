import SortIcon from '@icons/SortIcon'

export default function Filter() {
  return (
    <button className="flex items-center gap-2 whitespace-nowrap rounded-md border border-black-30 py-[6px] px-3 pl-3">
      <SortIcon />
      <span className="text-base font-normal">Sort by Price: High to ...</span>
    </button>
  )
}
