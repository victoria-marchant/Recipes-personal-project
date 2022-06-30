import React, { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import Cards from './Cards'
import Recipe from './Recipe'
import WeeksRecipes from './WeeksRecipes'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)
  // const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //       setIsError(false)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsError(true)
  //     })
  // }, [count])

  return (

  <>
    {/* <Cards/> */}
    {/* <Recipe/> */}
    <WeeksRecipes/>
</>

)
}
      {/* {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button> */}
  

      // {this.state.flashcards.map(flashcard => (
      //   <div key={flashcard._id}>
      //     <Flashcard
      //       title={flashcard.title}
      //       imageUrl={flashcard.image}
      //     />
      //   </div>
      // ))}

          {/* <div className="card" style="width: 18rem;"> */}
     {/* <img src="" className="card-img-top" alt=""/> */}
      {/* <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  {/* </div>
</div> */}
// </>


export default App
