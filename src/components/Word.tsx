// Hangman State
// what letters have they guessed
// what's the target word

// Hard-coded static state/data
const word = "follicles"
const letters = ["a", "l", "c"]


export default function Word() {
  // Fun javascript trick
  const wordLetters = word.split("") // ["f", "o", "l" .......]
  // [<div>f</div>, <div>o</div>, <div>l</div> ......]

  // Not great using the index as the key and I am ashamed
  return (
    <div>
      { wordLetters.map( (letter, index) => <span key={index}>{letter}</span> )}
    </div>
  )
}


//`hello there ${ { id: 0, name: "natalie"} }`
//<MyComponent someProp={{ id: 0, name: "natalie" }}/>