import Header from "./Header"
import RoomCard from "./RoomCard"

const roomList = [
  {
    id: 0,
    type: "Suite",
    available: 3
  },
  {
    id: 1,
    type: "Two Bed",
    available: 2
  },
  {
    id: 2,
    type: "One Bed",
    available: 5
  }
]

export default function App() {
  return (
    <div>
      <Header />
      <div>
        {roomList.map(room =>
          <RoomCard
            key={room.id}
            room={room}
            // roomType={room.type}
            // roomAvailable={room.available}
          />
        )}
      </div>
    </div>
  )
}

// RoomCard({
//   roomType: "One Bed",
//   roomAvailable: 5
// })
