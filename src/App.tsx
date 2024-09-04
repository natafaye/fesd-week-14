import LetterOptions from "./components/LetterOptions"
import Man from "./components/Man"
import Word from "./components/Word"

export default function App() {
  return (
    <div>
      <Man/>
      <Word/>
      <LetterOptions/>
    </div>
  )
}


// variables in different contexts with the same data probably should be named the same
// variables in the same context with different data, please name those different as possible