import { useState } from "react";
import NumberPicker from "./NumberPicker"
import SudokuBoard from "./SudokuBoard"

function App() {
  const [selectedNumber, setSelectedNumber] = useState(1)
  const [playerName, setPlayerName] = useState("")

  // 1) Make a piece of state
  const [nameValue, setNameValue] = useState("")

  const saveName = () => {
    setPlayerName(nameValue)

    // We would have done this with DOM manipulation
    // playerName = nameTextbox.value

    // clear the textbox
    setNameValue("")
  }

  return (
    <div>
      {/* 2) Tie the piece of state to the input */}
      <div>
        <input type="text" className="form-control" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
        <button className="btn btn-success" onClick={saveName}>Save</button>
      </div>
      <h4>Player 1 Name: {playerName}</h4>
      <SudokuBoard 
        selectedNumber={selectedNumber}
      /> {/* SudokuBoard({ selectedNumber: 1 }) */}
      <NumberPicker 
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}
      /> {/* NumberPicker({ selectedNumber: 1, setSelectedNumber: function }) */}
    </div>
  )
}

export default App;



//const myString = `My name is ${myName}`
