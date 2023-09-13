import { useState } from "react"

export default function FoodForm(props) {
    // In-progress form data
    const [nameValue, setNameValue] = useState("")
    const [quantityValue, setQuantityValue] = useState("")
    const [show, setShow] = useState(false)

    const onFormSubmit = (event) => {
        event.preventDefault() // don't refresh the page please

        const newFoodData = {
            name: nameValue,//whats in the name textbox
            quantity: parseInt(quantityValue), //quantity textbox - number textboxes don't usually actually give you a number
        }

        props.addFood(newFoodData)

        // clear the form
        setNameValue("")
        setQuantityValue("")
    }

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle Form</button>
            { show ? <form>
                <label>Name</label>
                <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
                <label>Quantity</label>
                <input type="number" value={quantityValue} onChange={(event) => setQuantityValue(event.target.value)} />
                <button onClick={onFormSubmit}>Add</button>
            </form> : null }
        </>
    )
}