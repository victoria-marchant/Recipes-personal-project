import React from 'react'

import {Routes, Route } from "react-router-dom"
// import { getGreeting } from '../apiClient'
import Cards from './Cards'
import Nav from './Nav'
import Recipe from './Recipe'
import WeeksRecipes from "./WeeksRecipes"
import AddRecipe from "./AddRecipe"
import ShoppingList from "./ShoppingList"
import AlterRecipe from './AlterRecipe'



const App = () => {

 

  return (

  <>
<Nav/>
   <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/addrecipe' element={<AddRecipe/>} />
          <Route path='/:recipeId' element={<Recipe/>}/>
          <Route path= "/:recipeId/adjustments" element={<AlterRecipe/>}/>
          <Route path="/weeksrecipes" element={<WeeksRecipes/>}/>
          <Route path="/shoppinglist" element={<ShoppingList/>}/>
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
