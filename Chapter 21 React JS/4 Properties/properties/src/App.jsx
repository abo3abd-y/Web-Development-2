import Student from "./Student"
// if its not string, then must be in {} and yes we are sending these as arguments
function App() {

  return (
    <Student name="Spongebob" age={30} isStudent={true}></Student>
  )
}

export default App
