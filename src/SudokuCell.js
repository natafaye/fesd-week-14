export default function SudokuCell(props) { // props = { index: 3, cellValue: "2", handleCellClick: function }

    return (
        <div className="p-3 border grid-cell" onClick={() => props.handleCellClick(props.index)}>
            { props.cellValue }
        </div>
    )
}