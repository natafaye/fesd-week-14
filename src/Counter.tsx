// {
//   label: "Bears",
//   amount: 3
// }

type Props = {
    label: string
    amount: number
}

export default function Counter({ label, amount }: Props) {
    return (
        <div>
            { label }
            <button>+</button>
            { amount }
            <button>-</button>
        </div>
    )
}