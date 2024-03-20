import { useState } from "react"
import "./SudokuBoard.css"
import SudokuCell from "./SudokuCell"

// put this in state later

export default function SudokuBoard(props) { // props = { selectedNumber: 1 }
    const [boardData, setBoardData] = useState([
        "1","2","3","4","5","","","","","","","","","","","","","","","","","","","","","","",""
    ])

    const handleCellClick = (index) => {
        // update the boardData piece of state to
        // set this board square to whatever the selected number is
        //props.selectedNumber // 2
        //props.boardData // ["1", "2", "5", "", ""]

        // NO GOOD BLASPHEMY
        //props.boardData[2] = props.selectedNumber

        // GREAT BEAUTIFUL
        const copyOfBoardData = boardData.slice() // this makes a copy
        copyOfBoardData[index] = props.selectedNumber
        setBoardData(copyOfBoardData)
    }

    return (
        <div className="grid-container">
            { boardData.map((cell, index) => (
                <SudokuCell index={index} handleCellClick={handleCellClick} cellValue={cell}/> // React runs this: SudokuCell({ cellValue: "2" })
            )) }
        </div>
    )
}
