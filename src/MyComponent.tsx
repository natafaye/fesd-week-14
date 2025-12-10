type Props = {
    color: string
    amount: number
}

export default function MyComponent({ color, amount }: Props) {
  return (
    <div>
        MyComponent
        { color }
        { amount }
    </div>
  )
}



// Somewhere else
<MyComponent color="green" amount={3}/>