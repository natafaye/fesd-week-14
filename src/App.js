import { useState } from 'react'
import CatView from './CatView'
import CatForm from './CatForm'

let nextId = 5

export default function App() {
    const [catList, setCatList] = useState([])

    const addCat = (newCatData) => {
        const newCat = {
            id: nextId++, // little hack that makes unique ids
            ...newCatData
        }

        // BAD - setting state directly
        //catList.push(newCat)

        // GOOD - working off a copy
        // const newCatList = catList.slice()
        // newCatList.push(newCat)
        // setCatList(newCatList)

        // GOOD - working off a copy
        // const newCatList = [...catList]
        // newCatList.push(newCat)
        // setCatList(newCatList)

        // GOOD - working off a copy
        // const newCatList = [...catList, newCat]
        // setCatList(newCatList)

        // FANTASTIC - working off a copy and so streamlined!
        //setCatList([ ...catList, newCat ])

        // FANTASTIC - working off a copy and so streamlined!
        setCatList(catList.concat(newCat))
    }


    const deleteCat = (idToDelete) => {
        setCatList(catList.filter(cat => cat.id !== idToDelete))
    }

    const updateCatName = (idToUpdate, newName) => {
        // const copyOfCatList = [...catList]
        // const catToUpdate = copyOfCatList.find(cat => cat.id === idToUpdate)

        // const copyOfCat = { ...catToUpdate }
        // copyOfCat.name = newName

        // const index = copyOfCatList.findIndex(cat => cat.id === idToUpdate)
        // copyOfCatList[index] = copyOfCat

        // setCatList(copyOfCatList)

        setCatList(catList.map(cat =>
            (cat.id === idToUpdate) ? { ...cat, name: newName } : cat
        ))

    }
    

    return (
        <div>
            <CatForm addCat={addCat}/>
            {catList.map(c => <CatView cat={c} key={c.id} deleteCat={deleteCat} updateCatName={updateCatName}/> )}
        </div>
    )
}



//{messages.map(message => <Message message={message} key={message.id}/>)}

//{ ARRAY_OF_DATA.map(CALLBACK_PARAMETER_WITH_ONE_ITEM => <COMPONENT_NAME PROP_NAME={CALLBACK_PARAMETER_WITH_ONE_ITEM} key={SOMETHING_UNIQUE}/>) }