


// const arrayToProduce = [
//     <p key="9">Hello there!</p>,
//     <p key="10">Are you working?</p>,
//     <p key="8">I'm doing great</p>,
//     <p key="7">How's the class going?</p>
// ]

import { Message } from "./types"

type Props = {
    messageList: Message[]
}

export default function Conversations({ messageList }: Props) {
    return (
        <div className="col">
            <h6 className="mt-3">Conversations</h6>
            <div id="paragraph-container" className="mt-4">
                {messageList.map(mess => <p key={mess.id}>{mess.text}</p>)}
            </div>
        </div>
    )
}