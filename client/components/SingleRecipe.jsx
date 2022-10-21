import React, { useState, useEffect } from "react"
import {useParams, useNavigate, Link} from "react-router-dom"
import { allRecipes,deleteRecipe } from '../apiClient'
import { useSelector, useDispatch } from 'react-redux'
import RecipeOptions from "./RecipeOptionsMenu"



export default function SingleRecipe() {
  const navigate = useNavigate()
  const params = useParams()

 


  // const dispatch = useDispatch()

  const recipes = useSelector(state => state.recipes)

 
  

    const recipe = recipes.find((item) => params.recipeId == item.id)
 
    const isWeeksRecipe = recipe.weeksDinners === 'true'
    const isFavourited = recipe.favourited === "true"
//  console.log(isWeeksRecipe)
//  console.log(recipe.weeksDinners)
//  console.log(typeof(recipe.weeksDinners))

//   function removeRecipe(){
//     deleteRecipe(params.recipeId)
//     .then(() => {
//       // allRecipes()
//       navigate('/')
//       return null
//     })
//     .catch((err) => console.log(err))
// }
  


  // function onClick(e) {
  //   e.preventDefault()
  //  removeRecipe()
  //   }
  

  const method = recipe.method
  const ingredients = recipe.ingredients

  return (
    <>
<div className="container">
    <h1 className="text-center mt-3 mb-3 ">{recipe.title}   
    <RecipeOptions weeksMenuStatus = {recipe.weeksDinners} favouriteStatus = {recipe.favourited} id = {recipe.id}/>
    </h1>
   
    <div className="row">
        <div className="col-lg-">
        <div className="card">
          <img src={recipe.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Recipe credit: {recipe.publisher}</p>
        </div>
        <div className="border">
          <ul className="list-group list-group-flush">
            {ingredients && ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>{ingredient}</li>))}
          </ul>
        </div>
        <div className="card-body">
            {method && method.map((method, index) => (
            <p key={index}>{method}</p>
            ))}
 

          
          
          
          
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}


/* /* const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
} */