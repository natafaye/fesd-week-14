
const selectOptions = [1, 2, 3, 4, 5, 6]
// never going to change, so it doesn't matter
// the number is unique and consistent, so no id needed

export default function MessageForm() {
    return (
        <form className="d-flex gap-2 align-items-center mt-3">
            <input type="text" id="textbox-thing" className="form-control" />
            <button className="btn btn-primary" id="send-button">Send</button>
            <select>
                { selectOptions.map(value => <option key={value}>{value}</option>)}
            </select>
        </form>
    )
}