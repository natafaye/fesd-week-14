import { Card } from "./CardList"

type Props = {
    card: Card
}

export default function BigCard({ card }: Props) {
    return (
        <div className="p-4 border fs-3">
            {card.value} {card.suit}
        </div>
    )
}