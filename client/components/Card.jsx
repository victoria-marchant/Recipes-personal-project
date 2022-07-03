import React, { useState, useEffect } from 'react'
import { allRecipes } from '../apiClient'
import {Link} from "react-router-dom"


export default function Card(){


  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    allRecipes()
      .then(recipeData => {
        // console.log("this is recipe data", recipeData)
        setRecipes(recipeData)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

 
  return(
    <>
{recipes.map((recipe) => (
  <div key={recipe.id} className='col'>
    <div  className="card h-100">
    <img src={recipe.imageUrl} className="card-img-top img-fluid" alt="..."/>
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

