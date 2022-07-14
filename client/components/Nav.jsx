import React, { useState, useEffect } from 'react'
import { allRecipes } from '../apiClient'
import {Link, useLocation} from "react-router-dom"


export default function Nav() {

  const [active, setActive] = useState("")

  const location = useLocation()

  if(location.pathname === "/"){
  return(
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="navbar-brand img-responsive" src="/images/mortar.jpeg" alt="mortar"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to={`/addrecipe/`} >Add Recipe</Link>
      <Link className="nav-item nav-link" to={`/weeksrecipes/`} >Week's Recipes</Link>
      <Link className="nav-item nav-link" to={`/shoppinglist/`} >Shopping List</Link>
     
      <div id="right">
      <form className="d-flex form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success font-color-black my-2 my-sm-0 btn-inline" type="submit">Search</button>
  </form>
  </div>
    </div>
  </div>
</nav>
</>
  )}
  else if(location.pathname !== "/")
  {
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="navbar-brand img-responsive" src="/images/mortar.jpeg" alt="mortar"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/">Home <span className="sr-only"></span></a>
      <Link className="nav-item nav-link" to={`/addrecipe/`} >Add Recipe</Link>
      <Link className="nav-item nav-link"  to={`/weeksrecipes/`} >Week's Recipes</Link>
      <Link className="nav-item nav-link" to={`/shoppinglist/`} >Shopping List</Link>
     
    </div>
  </div>
</nav>
</>
  )}
}