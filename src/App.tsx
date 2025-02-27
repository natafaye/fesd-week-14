import Board from "./Board"
import Footer from "./Footer"
import LowScoreTable from "./LowScoreTable"
import Message from "./Message"
import NameEntry from "./NameEntry"

export default function App() {
  const loseMessage = "You lose"
  return (
    <div>
      <NameEntry/>
      <Message messageText={loseMessage} textColor="blue" />
      <Board />
      <Footer/>
      <LowScoreTable/>
    </div>
  )
}

//Message(messageText) CAN'T DO THIS
// In the background React will do this:
// Message({ messageText: "You lose" })