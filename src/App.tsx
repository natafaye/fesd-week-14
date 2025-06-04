import Counter from "./Counter"

const resources = [
  {
    name: "Bears",
    count: 3
  },
  {
    name: "Elk",
    count: 10
  },
  {
    name: "Fish",
    count: 1
  },
]

// const mappedArray = [
//   <Counter label="Bears" amount={3} />,
//   <Counter label="Elk" amount={10} />,
//   <Counter label="Fish" amount={1} />
// ]

// The declarative way to show an array of stuff is using the map array method

export default function App() {
  return (
    <div className="bg-light mb-3 p-4">
      {resources.map(resource => <Counter key={resource.name} label={resource.name} amount={resource.count} />)}


      {/* <Counter label="Bears" amount={3}/>
      <Counter label="Elk" amount={2}/>
      <Counter label="Foxes" amount={5}/>
      <Counter label="Hawks" amount={4}/>
      <Counter label="Fish" amount={1}/> */}
    </div>
  )
}

// Cosplaying as HTML
// <Counter label="Fish" amount={1}/>
// Translate it from HTML attributes to a Javascript object with properties
// Counter({
//   label: "Bears",
//   amount: 3
// })


// Props are parameters cosplaying as HTML attributes