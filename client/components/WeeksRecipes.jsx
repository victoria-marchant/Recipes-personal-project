import React from "react"
import RecipePlaceholder from "./RecipePlaceholder"
import CardPlaceholder from "./CardPlaceholder"

export default function WeeksRecipes() {

  return (



<div className="container-fluid -md-8">
      <h1>Recipe</h1>
        <div className="row">
            <div className="col-10">
            <RecipePlaceholder/>
            </div>
            <div className="col-md">
            <CardPlaceholder/>
            <CardPlaceholder/>
            <CardPlaceholder/>
            <CardPlaceholder/>
            </div>
        </div>

</div>

  )
}