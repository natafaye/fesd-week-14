import { useState } from "react"
import CatCard from "./CatCard";
import AddCatForm from "./AddCatForm";
import EditCatForm from "./EditCatForm";

let nextId = 2;

export default function App() {
    const [user, setUser] = useState({ name: "Natalie", role: "Awesome", numSales: 0 })
    const [catList, setCatList] = useState([])
    const [editCatId, setEditCatId] = useState(null)
    const [showForm, setShowForm] = useState(false)

    function updateRole() {
        // BLASPHEMY
        // user.numSales++
        // setUser(user)

        // GREAT
        // const copyOfUser = { ...user }
        // copyOfUser.role = "Lame"
        // setUser(copyOfUser)

        // FANCY
        setUser({ ...user, role: "Lame", numSales: user.numSales + 1 })

        // this.setState({ user: copyOfUser })
    }

    function addCat(newCatData) {
        const newCat = { id: nextId++, ...newCatData }

        // GREAT
        // const copyOfCatList = [...catList]
        // copyOfCatList.push(newCat)
        // setCatList(copyOfCatList)

        // BETTER
        // setCatList([ ...catList, newCat ])
        // BETTER
        setCatList(catList.concat(newCat))
    }

    function deleteCat(idToDelete) {
        // GREAT
        // const indexToDelete = catList.findIndex(cat => cat.id === idToDelete)
        // const copyOfCatList = [...catList]
        // copyOfCatList.splice(indexToDelete, 1)
        // setCatList(copyOfCatList)

        // BETTER
        setCatList(catList.filter(cat => cat.id !== idToDelete))
    }

    function startUpdate(idToUpdate) {
        setShowForm(true)
        setEditCatId(idToUpdate)
    }

    function updateCat(newData, idToUpdate) {
        // FINE
        // const copyOfCatList = [...catList]
        // const indexToUpdate = catList.findIndex(cat => cat.id === idToUpdate)
        // const copyOfCat = { ...catList[indexToUpdate] }
        // copyOfCat.name = newName
        // copyOfCatList[indexToUpdate] = copyOfCat
        // setCatList(copyOfCatList)

        setCatList(catList.map(cat =>
            (cat.id === idToUpdate) ?
                { ...cat, ...newData } :
                cat
        ))
        setShowForm(false)
        setEditCatId(null)
    }

    return (
        <>
            <div>App</div>
            <AddCatForm addCat={addCat}/>
            { showForm ? <EditCatForm updateCat={updateCat} editCatId={editCatId} catList={catList} /> : null }
            {catList.map(cat => <CatCard cat={cat} key={cat.id} startUpdate={startUpdate} deleteCat={deleteCat} isEditing={showForm} />)}
        </>
    )
}