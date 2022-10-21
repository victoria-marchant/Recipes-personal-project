import React, { useState, useEffect } from "react"
import { allRecipes,deleteRecipe } from '../apiClient'
import { useSelector, useDispatch } from 'react-redux'
import {useParams, useNavigate, Link} from "react-router-dom"




export default function RecipeOptions(props) {


  return (

<div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Recipe Options
     </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">{props.weeksMenuStatus === 'true' ? '♥︎ Take off menu': '♡ Add to menu'} </a>
        <a className="dropdown-item" href="#">{props.favouriteStatus === 'true' ? '★ Unfavourite': '☆ Favourite'} </a>
        <Link className="dropdown-item" to={`/${props.id}/adjustments/`} >Adjust Recipe</Link>
        <a href="#" className="dropdown-item">Delete Recipe</a>
      </div>
</div>

 ) }
