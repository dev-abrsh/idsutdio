import CloseCircleIcon from '@icons/CloseCircleIcon'

export default function ActiveFilter() {
  return (
    <div className="relative flex max-w-[640px] items-center gap-2 overflow-hidden border-y border-black-20 py-3 pl-4 sm:flex-wrap sm:border-0">
      <Chip text="4 Stars" />
      <Chip text="5 Stars" />
      <Chip text="Air conditioning" />
      <Chip text="Prime Distrint" className="hidden sm:flex" />
      <Chip text="D9 - Orchard/River Vallet" className="hidden sm:flex" />
      <Chip
        text="D10 - Tanglin/Holland/Bukit Timah"
        className="hidden sm:flex"
      />
      <ClearAllFilter />
    </div>
  )
}

function Chip({ text, className }: { text: string; className?: any }) {
  return (
    <button
      className={
        'flex items-center gap-1 rounded-2xl border border-primary-3 bg-primary-3/[15%] px-2 py-1 text-sm font-normal text-primary-2 ' +
        className
      }
    >
      <span className="whitespace-nowrap">{text}</span>
      <CloseCircleIcon />
    </button>
  )
}

function ClearAllFilter() {
  return (
    <button
      className="absolute -right-4 z-10 mr-4 bg-whiteBlur py-[5px] pr-4 pl-7 text-sm font-semibold text-primary-1
            sm:static sm:bg-white sm:pr-1 sm:pl-1"
    >
      Clear All
    </button>
  )
}
