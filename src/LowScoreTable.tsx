const players = [
  {
    id: 0,
    name: "Bobby",
    lowScore: 3,
    score: 0
  },
  {
    id: 1,
    name: "Sheila",
    lowScore: 2,
    score: 0
  }
]

// maps to
// const mappedStuff = [
//   <tr><td>Bobby</td><td>3</td></tr>,
//   <tr><td>Sheila</td><td>2</td></tr>
// ]

type Props = {}

export default function LowScoreTable({ }: Props) {

  const handleClick = () => {
    alert("you clicked me!")
  }

  return (
    <div>
      <h4>Low Scores</h4>
      <table className="table table-striped">
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td onClick={handleClick}>{player.name}</td><td>{player.lowScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}