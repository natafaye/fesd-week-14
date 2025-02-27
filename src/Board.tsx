import ballImg from "./assets/ball.png"
// ballImg will be the path that the ball.png image WILL be at when the app is built

export default function Board() {
    const pegsInRow = 5
    return (
        <div
            className="board bg-light border d-flex justify-content-between align-items-center p-3"
        >
            
            <div className="ball">
                <img src={ballImg} />
            </div>

        </div>
    )
}