import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"





export default function RecipePlaceholder() {



  return (
    <>
<div className="container">
    <div className="row">
        <div className="col-lg-">
        <div className="card">
          <img src="https://picsum.photos/300/200" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Some text</h5>
    
        </div>
        <div className="border">
          <ul className="list-group list-group-flush">
            <li className="list-group-item" key=""></li>
          </ul>
        </div>
        <div className="card-body">
            <p> some real cool paragraph, some real cool paragraph, some real cool paragraph, some real cool paragraph, some real cool paragraph, some real cool paragraph</p>
          <a href="#" className="card-link">Remove from meal plan</a>
          <a href="#" className="card-link">Remove from favourites</a>
          <a href="#" className="card-link">Delete recipe</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}
