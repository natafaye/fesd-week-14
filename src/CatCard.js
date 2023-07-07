export default function CatCard(props) {
    return (
        <div>
            {props.cat.name} - {props.cat.type}
            <button onClick={() => props.startUpdate(props.cat.id)} disabled={props.isEditing}>Edit</button>
            <button onClick={() => props.deleteCat(props.cat.id)} disabled={props.isEditing}>Delete</button>
        </div>
    )
}