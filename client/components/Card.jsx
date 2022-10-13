import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"

import { fetchRecipes} from "../actions/RecipesActions"



export default function Card(){

  const dispatch = useDispatch()

  const recipes = useSelector(state => state.recipes)

  console.log(recipes)
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

 
  return(
    <>
  {recipes && recipes.map((recipe) => (
  <div key={recipe.id} className='col'>
    <div  className="card h-100">
    <img src={recipe.imageUrl} className="card-img-top img-fluid preview-img" alt="..."/>
    <div className="card-body align-bottom d-flex flex-column">
    <h5 className="card-title">{recipe.title}</h5>
    <p className="card-text">{recipe.summary}</p>
    {/* <div className="card-footer text-muted mx-auto"> */}
    <Link className=" mt-auto align-self-end btn btn-primary align-self-end" to={`/${recipe.id}/`} >Go to recipe</Link>
    </div>
    </div>
  </div>
  ))}

</>
  )

}

