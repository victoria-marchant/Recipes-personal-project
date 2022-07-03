import React from 'react'

import {Routes, Route } from "react-router-dom"
// import { getGreeting } from '../apiClient'
import Cards from './Cards'
import Card from "./Card"
import Recipe from './Recipe'



const App = () => {

 

  return (

  <>
   <Routes>
        <Route path='/' element={<Cards/>} />
          <Route path='/continents/:continent' element={<Continent/>}/>
          <Route path="/continents/:continent/:name/:code" element={<Country/>}/>
        </Routes>
 {/* <Cards/> */}

   
    {/* <Recipe/> */}
    {/* <WeeksRecipes/> */}
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
