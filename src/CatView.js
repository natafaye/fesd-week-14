

export default function CatView(props) {

    return (
        <div>
            {props.cat.name} {props.cat.breed}
            <button onClick={() => props.deleteCat(props.cat.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => props.updateCatName(props.cat.id, "Jackamo")} className="btn btn-warning">Set Name to Jackamo</button>
        </div>
    )
}
