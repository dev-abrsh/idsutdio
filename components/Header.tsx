import BackgroundImage from './BackgroundImage'

export default function Header() {
  return (
    <div className="bg-ornament relative w-fit px-4 pt-8 text-black-100 sm:mx-auto lg:px-20">
      <BackgroundImage />
      <div className="w-fit py-2 sm:mx-auto">
        <h2 className=" text-4xl font-bold leading-10 tracking-wide sm:text-center">
          Reliably Explore
        </h2>
        <h4 className="mt-3 text-4xl font-medium leading-10 tracking-wide">
          New Launch Properties
        </h4>
      </div>

      <div className="mt-5 flex w-fit gap-9 sm:mx-auto">
        <Counter count={145} title="New Launches" />
        <Counter count={346} title="Unit Types" />
        <Counter count={789} title="Floor Plans" />
      </div>
      <p className="mt-5 text-sm font-normal leading-5 text-black-60 sm:text-center">
        Accurately listed & constantly updated by each project's{' '}
        <span className="block sm:inline">officialsales team</span>
      </p>
    </div>
  )
}

function Counter({ count, title }: { count: number; title: string }) {
  return (
    <div>
      <h5 className="text-3xl font-bold leading-[120%] text-primary-1">
        {count}{' '}
      </h5>
      <h6 className=" mt-2 text-lg font-medium leading-5">{title}</h6>
    </div>
  )
}
