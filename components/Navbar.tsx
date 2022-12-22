import HamburgerMobileIcon from '@icons/HamburgerMobileIcon'
import HamburgerDesktopIcon from '@icons/HamburgerDesktopIcon'
import NewLauncherLogo from '@icons/NewLaunchewLogo'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#F3F4F6] px-4 py-6 md:px-20 md:py-7">
      <NewLauncherLogo />
      <div className="flex items-center gap-5 lg:gap-10">
        <button className="rounded bg-primary-4 py-1 px-[10px] text-sm font-semibold tracking-wide text-white lg:py-[10px] lg:px-6">
          Browse
        </button>
        <button>
          <HamburgerMobileIcon />
          <HamburgerDesktopIcon />
        </button>
      </div>
    </nav>
  )
}
