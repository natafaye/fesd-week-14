

export default function NumberPicker(props) { // { selectedNumber: 1, setSelectedNumber: function }
    

    const handleButtonClick = (number) => {
        // NO GOOD BLASPHEMY
        // NEVER SET STATE DIRECTLY
        // selectedNumber = number

        // FOLLOW THE RULES
        props.setSelectedNumber(number)
    }

    return (
        <div>
            <button onClick={() => handleButtonClick(1)} className={`btn btn${props.selectedNumber !== 1 ? "-outline" : ""}-primary`}>1</button>
            <button onClick={() => handleButtonClick(2)} className={`btn btn${props.selectedNumber !== 2 ? "-outline" : ""}-primary`}>2</button>
            <button onClick={() => handleButtonClick(3)} className={`btn btn${props.selectedNumber !== 3 ? "-outline" : ""}-primary`}>3</button>
            <button onClick={() => handleButtonClick(4)} className={`btn btn${props.selectedNumber !== 4 ? "-outline" : ""}-primary`}>4</button>
            <button onClick={() => handleButtonClick(5)} className={`btn btn${props.selectedNumber !== 5 ? "-outline" : ""}-primary`}>5</button>
            <button onClick={() => handleButtonClick(6)} className={`btn btn${props.selectedNumber !== 6 ? "-outline" : ""}-primary`}>6</button>
            <button onClick={() => handleButtonClick(7)} className={`btn btn${props.selectedNumber !== 7 ? "-outline" : ""}-primary`}>7</button>
            <button onClick={() => handleButtonClick(8)} className={`btn btn${props.selectedNumber !== 8 ? "-outline" : ""}-primary`}>8</button>
            <button onClick={() => handleButtonClick(9)} className={`btn btn${props.selectedNumber !== 9 ? "-outline" : ""}-primary`}>9</button>
        </div>
    )
}
