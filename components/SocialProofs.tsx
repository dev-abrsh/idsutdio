import { BloombergMobileIcon, BloombergDesktopIcon } from '@icons/BloombergIcon'
import { ForbesMobileIcon, ForbesDesktopIcon } from '@icons/ForbesIcon'
import { YahooMobileIcon, YahooDesktopIcon } from '@icons/YahooIcon'

export default function SocialProofs() {
  return (
    <div className="my-10 flex bg-black-10 py-6 px-4 md:my-20 md:py-8 md:px-20">
      <div className="mx-auto flex w-full max-w-[490px] justify-between md:max-w-[650px]">
        <ForbesMobileIcon />
        <ForbesDesktopIcon />
        <BloombergMobileIcon />
        <BloombergDesktopIcon />
        <YahooMobileIcon />
        <YahooDesktopIcon />
      </div>
    </div>
  )
}
