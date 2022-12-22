import CheveronDownIcon from '@icons/CheveronDownIcon'
import Option from './Option'
import SearchBox from './SearchBox'

export default function Filter(props) {
  return (
    <div className="border-y border-black-20 pt-4 pb-6">
      <div className="mb-4 flex items-center justify-between gap-44 text-base leading-5 text-black-100">
        <h6>{props.title}</h6>
        <CheveronDownIcon />
      </div>
      <SearchBox options={props.options} />
      <div className="max-h-[180px] overflow-y-scroll scrollbar-thin  scrollbar-thumb-black-30 scrollbar-thumb-rounded-md">
        {props.options.map((option) => (
          <Option key={option.id} text={option.name} />
        ))}
      </div>
    </div>
  )
}
