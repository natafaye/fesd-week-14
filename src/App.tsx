import CardList from "./CardList"
import getRandomCard from "./getRandomCard"

export default function App() {
  // You cannot add or remove from this hand (without state)
  const myHand = [ getRandomCard(), getRandomCard() ]
  const dealerHand = [ getRandomCard(), getRandomCard() ]

  // Listening Function
  const handleStand = () => {
    alert("Standing!")
  }

  // Return what that part of the page should look like right now (eventually based on the state)
  return (
    <div className="container mt-3">
      <h2>Blackjack</h2>
      <div>
        <h4>Dealer</h4>
        <CardList cards={dealerHand} />
        <button className="btn btn-success mt-4" onClick={() => alert("You get hit!")}>Hit Me</button>
        <button className="btn btn-primary mt-4" onClick={handleStand}>Stand</button>
        <h4>You</h4>
        <CardList cards={myHand} />
      </div>
    </div>
  )
}

// We never ever ever call a component function
// BAD BLASPHEMY: App()
// GOOD PRETENDING: <App/>

// We're calling attributes props form here on out