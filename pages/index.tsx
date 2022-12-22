import Navbar from '@components/Navbar'
import Header from '@components/Header'
import SocialProofs from '@components/SocialProofs'
import Listing from '@components/Listing'
import Filters from '@components/Filters'

export default () => {
  return (
    <div className="font-sansPro">
      <Navbar />
      <Header />
      <SocialProofs />
      <div className="flex md:px-20">
        <Filters />
        <Listing />
      </div>
    </div>
  )
}
