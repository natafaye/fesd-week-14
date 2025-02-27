
type Props = {
    messageText: string
    textColor: string
}

// Message({ messageText: "You lose", textColor: "red" })

export default function Message({ messageText, textColor }: Props) { // object destructuring of prop parameter object
    return (
        <div className="m-3" style={{ color: textColor }}>{messageText}</div>
    )
}

// export default function Message(props) {
//     return (
//         <div className="m-3">{props.messageText}</div>
//     )
// }