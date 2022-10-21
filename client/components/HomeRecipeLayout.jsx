import React from "react"
import RecipePreview from "./RecipePreview"



export default function HomeRecipeLayout(){

  return(
<>

    <div className="container fluid -md-8">
      <div className="header">
      <div className= "navbar-nav ml-auto">
      </div>
      </div>
      <h1 className="text-center mt-3 mb-3 ">Recipes</h1>
        <div className="row row-cols-3 gx-3 gy-3">
            <RecipePreview/>
    </div>
    </div>
    </>
  )}



