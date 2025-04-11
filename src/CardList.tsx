import BigCard from "./BigCard"

export type Card = {
    id: number
    suit: string // fancier option: "♠️" | "♣️" | "♦️" | "❤️"
    value: number | string
}

type Props = {
    cards: Card[] // Array<Card> is great too
}

export default function CardList({ cards }: Props) {
    return (
        <div className="d-flex gap-3 mt-3">
            {cards.map(c => (
                <BigCard card={c} key={c.id} />
            ))}
        </div>
    )
}