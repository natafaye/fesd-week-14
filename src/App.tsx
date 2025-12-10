import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Conversations from "./Conversations"
import MessageForm from "./MessageForm"
import { Message } from "./types"

// PLACEHOLDER STATE (not dynamic yet)

let currentChannel = "#general"

const channels = [
  "#general",
  "#my-class",
  "#another-channel",
]

export default function App() {

  const messages: Message[] = [
    {
      text: "I'm doing great",
      channel: "#general",
      id: 9
    },
    {
      text: "How's the class going?",
      channel: "#my-class",
      id: 10
    },
    {
      text: "Are you working?",
      channel: "#another-channel",
      id: 8
    },
    {
      text: "Hello there!",
      channel: "#general",
      id: 7
    },
  ]

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h3>Glack</h3>
          <p>Number of messages: {messages.length}</p>
          <div>
            {/* 
              [
                <button className={("#general" === currentChannel) ? "btn btn-success" : "btn btn-light"}>
                  {"#general"}
                </button>,
                <button className={("#my-class" === currentChannel) ? "btn btn-success" : "btn btn-light"}>
                  {"#my-class"}
                </button>,
                <button className={("#another-channel" === currentChannel) ? "btn btn-success" : "btn btn-light"}>
                  {"#another-channel"}
                </button> 
              ]
            */}

            {channels.map(channelName => (
              <button key={channelName} className={(channelName === currentChannel) ? "btn btn-success" : "btn btn-light"}>
                {channelName}
              </button>
            ))}

            {/* Channel name is unique and is mostly consistent */}
            {channels.map(cName => <div key={cName} className="bg-primary text-white m-3">Name: {cName}</div>)}

            <ul>
              {/* [<li>#general</li>, <li>#my-class</li>, <li>#another-channel</li>] */}
              {channels.map(name => <li key={name}>{name}</li>)}
            </ul>
          </div>
          {/* We CANNOT do this: MessageForm() 
            Whatever the component returns will show up wherever it is used
          */}
          <MessageForm />
        </div>
        <Conversations messageList={messages} />
      </div>
    </div>
  )
}



