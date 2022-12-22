import { useState } from 'react'
import Option from './Option'

export default function SearchBox({ options }) {
  const [searchResults, setSearchResults] = useState([])
  const [noItems, setNoItems] = useState(false)

  function handleSearch(e) {
    if (!e.target.value) {
      setSearchResults([])
      setNoItems(false)
      return
    }
    const results = options.filter((option) =>
      option.name.toLowerCase().includes(e.target.value)
    )
    if (results.length === 0) {
      setSearchResults([])
      return setNoItems(true)
    }
    setNoItems(false)
    return setSearchResults(results)
  }

  return (
    <div>
      <input
        onChange={handleSearch}
        type="text"
        className="mb-3 w-full rounded-lg border-[#D3D5DA] py-3 text-sm text-black-100 placeholder:text-[#9DA4AE]
        focus:border-primary-1 focus:ring-0"
        placeholder="Search project name"
      />
      <div className="border-y border-black-20 py-4 empty:hidden">
        {noItems && <p className="text-sm text-red-500">no items</p>}
        {searchResults.map((option) => (
          <Option key={option.id} text={option.name} />
        ))}
      </div>
    </div>
  )
}
