import MobileFilter from '@components/Filters/MobileFilter'
import Sort from '@components/Sort'
import ActiveFilter from './ActiveFilter'
import Card from '@components/Card'
import amberpark from '@public/amberpark.png'
import amberpark2 from '@public/amberpark2.png'
import amberpark3 from '@public/amberpark3.png'

export default function Listing() {
  return (
    <section>
      <div className="max-w-[650px] md:flex md:items-center md:justify-between">
        <div className="px-4">
          <h6 className="text-2xl font-semibold text-black-100">
            Available New Launches
          </h6>
          <p className="mt-2 text-sm text-black-80">
            Showing 1 - 20 of 154 available launches
          </p>
        </div>
        <div className="mt-5 mb-4 flex max-w-[650px] flex-wrap  gap-3 px-4">
          <MobileFilter />
          <Sort />
        </div>
      </div>
      <ActiveFilter />
      <Card imageURL={amberpark} tag={12} />
      <Card imageURL={amberpark2} tag={9} />
      <Card imageURL={amberpark3} tag={9} />
    </section>
  )
}
