type Props = {
    text: string
    color?: string // this property is optional
}

export default function SmallCard({ text, color }: Props) { // props = { text: "apple", color: "green" }
    return (
        <div className="card p-4 shadow">
            { text } { color }
        </div>
    )
}

// export default function SmallCard(props) { // props = { text: "apple", color: "green" }
//     return (
//         <div className="card p-4 shadow">
//             { props.text } { props.color }
//         </div>
//     )
// }