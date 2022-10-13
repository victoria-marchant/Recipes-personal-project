import React, { useState, useEffect } from "react"
import RecipePlaceholder from "./RecipePlaceholder"
import CardPlaceholder from "./CardPlaceholder"

import { allRecipes } from "../apiClient"
import Nav from "./Nav"

export default function WeeksRecipes() {

  const [weekRecipe, setWeekRecipe] = useState([])
 
  //Global state weeks recipes 
  //local state is feature (to display main card and the rest small - if feature display, else display small)
  //click event will change isFeatured 

  useEffect(() => {
    allRecipes()
      .then(recipeData => {
        const weekRecipe = recipeData.filter((item) => item.weeksDinners == "true")
      setWeekRecipe(weekRecipe)
        // console.log("this is recipe data", recipeData)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(weekRecipe)

  return (

 <>
<div className="container-fluid -md-8">

        <div className="row">
            <div className="col-10">
            <h1 className="text-center mt-3 mb-3 ">Recipe name</h1>
            <RecipePlaceholder/>
            </div>
            <div className="col-md">
            <h1 className="text-center mt-3 mb-3 "></h1>
            {weekRecipe && weekRecipe.map((Recipe, index) => (
            <CardPlaceholder key={index}/>
            ))}
           
            </div>
        </div>

</div>
</>
  )
}