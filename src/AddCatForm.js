import { useState } from "react"

// ONE PIECE OF STATE

export default function AddCatForm(props) {
  const [formValues, setFormValues] = useState({ name: "", type: "" })

  const handleChange = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value })

  const onCreateClick = (event) => {
    event.preventDefault() // please don't refresh the page, dumbhead
    props.addCat(formValues)
    setFormValues({ name: "", type: "" })
  }

  return (
    <form>
      <h3>CREATE</h3>
      Name
      <input type="text" value={formValues.name} name="name" onChange={handleChange}/>
      Type
      <input type="text" value={formValues.type} name="type" onChange={handleChange}/>
      <button onClick={onCreateClick}>Create</button>
    </form>
  )
}

// MULTIPLE PIECES OF STATE

// export default function AddCatForm(props) {
//   const [nameValue, setNameValue] = useState("")
//   const [typeValue, setTypeValue] = useState("")

//   const onCreateClick = (event) => {
//     event.preventDefault() // please don't refresh the page, dumbhead

//     const newCatData = {
//       name: nameValue,
//       type: typeValue
//     }

//     props.addCat(newCatData)
//   }

//   return (
//     <form>
//       Name
//       <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
//       Type
//       <input type="text" value={typeValue} onChange={(event) => setTypeValue(event.target.value)}/>
//       <button onClick={onCreateClick}>Create</button>
//     </form>
//   )
// }