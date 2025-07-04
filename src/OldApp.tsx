
function OldApp() {

  const myName = "Natalie"

  const myString = `Here's a string ${3 + 5}`

  const handleClick = () => {
    alert('hi!')
  }

  const myParagraph = <p>{1 + 1}</p>

  return (
    <div>
      My stuff!
      Hello {myName}!
      {3 + 5}
      <button className="btn btn-primary btn-lg" onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default OldApp