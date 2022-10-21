import React from 'react'

import {Routes, Route } from "react-router-dom"
import Nav from './Nav'
import SingleRecipe from './SingleRecipe'
import AddRecipe from "./AddRecipe"
import ShoppingList from "./ShoppingList"
import AlterRecipe from './AlterRecipe'
import HomeRecipeLayout from './HomeRecipeLayout'
import WeeksMenu from './WeeksMenu'



const App = () => {

 

  return (

  <>
<Nav/>
   <Routes>
        <Route path='/' element={<HomeRecipeLayout/>} />
        <Route path='/addrecipe' element={<AddRecipe/>} />
          <Route path='/:recipeId' element={<SingleRecipe/>}/>
          <Route path= "/:recipeId/adjustments" element={<AlterRecipe/>}/>
          <Route path="/weeksmenu" element={<WeeksMenu/>}/>
          <Route path="/shoppinglist" element={<ShoppingList/>}/>
        </Routes>
 
</>

)
}


export default App
