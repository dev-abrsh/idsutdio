import Image from 'next/image'
import jaydenRealtorsImageSrc from '@public/jayden-realtors.png'
import WhatsappIcon from '@icons/WhatsappIcon'

export default function Developer() {
  return (
    <div className="flex items-center justify-between overflow-hidden px-3 py-4">
      <div className="flex gap-2">
        <div className="relative h-10 w-10 rounded-full">
          <Image src={jaydenRealtorsImageSrc} alt="" fill />
        </div>
        <div className="whitespace-nowrap font-normal">
          <p className="text-sm text-black-100">Jayden Realtors...</p>
          <p className="text-xs text-black-60">Developer Sales Team</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="whitespace-nowrap rounded-[4px] border border-primary-1 py-[6px] px-[10px] text-sm font-semibold text-primary-1">
          Call Sales
        </button>
        <button className="rounded-[4px] bg-primary-1 py-1 px-[6px]">
          <WhatsappIcon />
        </button>
      </div>
    </div>
  )
}
