import BigCard from "./BigCard"
import SmallCard from "./SmallCard"
import { flashcards } from "./myData"

// const flashcards = [
//     "apple",
//     "banana",
//     "orange",
//     "mango"
// ]

// const mappedArray = [
//     <SmallCard/>,
//     <SmallCard/>,
//     <SmallCard/>,
//     <SmallCard/>
// ]

export default function App() {
  return (
    <div className="container">
        <h1 className="display-1 mt-3 mb-4">Flashcards</h1>
        <BigCard/>
        <div className="d-flex gap-3 mt-4">
            {flashcards.map(card => <SmallCard text={card.fruit} color={card.color}/>)}
        </div>
    </div>
  )
}



// <SmallCard text="apple" color="green"/> {/* SmallCard({ text: "apple", color: "green" }) */}
// <SmallCard text="strawberry"/>{/* SmallCard({ text: "strawberry", color: "red" }) */}
// <SmallCard text="mango" color="yellow"/>{/* SmallCard({ text: "mango", color: "yellow" }) */}