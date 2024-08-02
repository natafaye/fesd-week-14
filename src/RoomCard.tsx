type Room = {
    id: number
    type: string
    available: number
}

type Props = {
    room: Room
}

export default function RoomCard({ room }: Props) {
    return (
        <div className="bg-light p-3 mb-3 border">
            {room.type}
            <span className="badge bg-success ms-2">
                {room.available} available
            </span>
        </div>
    )
}



// type Props = {
//     roomType: string
//     roomAvailable: number
// }

// export default function RoomCard({ roomType, roomAvailable }: Props) {
//     return (
//         <div className="bg-light p-3 mb-3 border">
//             {roomType}
//             <span className="badge bg-success ms-2">
//                 {roomAvailable} available
//             </span>
//         </div>
//     )
// }

// RoomCard({
//   roomType: "One Bed",
//   roomAvailable: 5
// })