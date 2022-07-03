import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { allRecipes } from '../apiClient'




export default function Recipe() {

  const params = useParams()
 
  console.log(params.recipeId)
  // const selectedRecipe = countriesData.find((item) =>
  // (params.code == item.code))

  // console.log(props)

  const [recipe, setRecipe] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    allRecipes()
    .then(recipeData => {
      const selectedRecipe = recipeData.find((item) => params.recipeId == item.id)
      setRecipe(selectedRecipe)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const method = recipe.method
  const ingredients = recipe.ingredients

  return (
    <>
<div className="container">
    <div className="row">
        <div className="col-lg-">
        <div className="card">
          <img src={recipe.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
    
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
          <a href="#" className="card-link">Add to this weeks meal plan</a>
          <a href="#" className="card-link">Add to favourites</a>
          <a href="#" className="card-link">Delete Recipe</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}
