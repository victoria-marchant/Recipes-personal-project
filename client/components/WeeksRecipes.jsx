import React from "react"
import Recipe from "./Recipe"
import Card from "./Card"

export default function WeeksRecipes() {

  return (



<div className="container fluid -md-8">
      <h1>Recipes</h1>
        <div className="row">
            <div className="col-10">
            <Recipe/>
            </div>
            <div className="col-sm">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>

</div>

  )
}