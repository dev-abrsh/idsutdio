import Filter from './Filter'

const projectNames = [
  { id: 1, name: 'Sunrise property Consultant' },
  { id: 2, name: 'AK REALTTY™' },
  { id: 3, name: 'Velentine Apartment 1 Wing D' },
  { id: 4, name: 'MS H2O' },
  { id: 5, name: 'Vihar Heights' },
  { id: 6, name: 'Eastern Winds' },
]
const projectDevelopers = [
  { id: 1, name: 'Sunrise property Consultant' },
  { id: 2, name: 'AK REALTTY™' },
  { id: 3, name: 'Velentine Apartment 1 Wing D' },
  { id: 4, name: 'MS H2O' },
]

export default () => {
  return (
    <div className="hidden lg:block">
      <h5>Filter</h5>
      <div>
        <Filter title="Project Name" options={projectNames} />
        <Filter title="Project Developer" options={projectDevelopers} />
        <Filter title="Project Locations" options={projectNames} />
      </div>
    </div>
  )
}
