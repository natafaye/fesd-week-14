import { useState } from "react"

export default function CreateProductForm(props) {
    // Pieces of state for the in-progress form data
    const [titleValue, setTitleValue] = useState("")
    const [priceValue, setPriceValue] = useState(10)

    const onSubmitClick = (event) => {
        event.preventDefault() // please do not refresh the page
        const newProductData = {
            title: titleValue,
            price: parseInt(priceValue) // number HTML inputs still give a string value, so we probably want to parse it into a number when we save it
        }
        props.onSubmit(newProductData)

        // Clear the form
        setTitleValue("")
        setPriceValue(10)
    }

    return (
        <form>
            <label>Title</label>
            <input type="text" value={titleValue} onChange={(event) => setTitleValue(event.target.value)} /> {/* event.target will be the actual HTML input */}
            <label>Price</label>
            <input type="number" value={priceValue} onChange={(event) => setPriceValue(event.target.value)} />
            <button className="btn btn-primary btn-lg" onClick={onSubmitClick}>Submit</button>
        </form>
    )
}