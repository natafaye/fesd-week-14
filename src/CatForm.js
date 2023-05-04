import { useState } from "react"


export default function CatForm(props) {
    const [nameValue, setNameValue] = useState("Hullaballoo")
    const [breedValue, setBreedValue] = useState("tabby")

    const submitForm = (event) => {
        event.preventDefault()

        props.addCat({ name: nameValue, breed: breedValue })

        setNameValue("")
        setBreedValue("")
    }

    return (
        <form>
            <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
            <input type="text" value={breedValue} onChange={(event) => setBreedValue(event.target.value)}/>
            <button onClick={submitForm} className="btn btn-success">Add a Cat</button>
        </form>
    )
}


// DO THIS:

// const channelList = [
//     {
//         id: 20,
//         name: "general"
//     },
//     {
//         id: 30,
//         name: "general"
//     }
// ]

// const postList = [
//     {
//         id: 0,
//         text: "Hi",
//         channelId: 20
//     },
//     {
//         id: 1,
//         text: "Hi",
//         channelId: 20
//     }
// ]

// NOT THING:

// const channelList = [
//     {
//         id: 20,
//         name: "general",
//         postList: [
//             {
//                 id: 0,
//                 text: "Hi",
//                 channelId: 20
//             },
//             {
//                 id: 1,
//                 text: "Hi",
//                 channelId: 20
//             }
//         ]
//     },
//     {
//         id: 30,
//         name: "general",
//         postList: [
//             {
//                 id: 0,
//                 text: "fdsfds"
//             }
//         ]
//     }
// ]