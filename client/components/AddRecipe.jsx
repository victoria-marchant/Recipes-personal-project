import React, { useState, useEffect } from "react"
import {useParams, useNavigate, Link} from "react-router-dom"
import { allRecipes,deleteRecipe } from '../apiClient'
import { useSelector, useDispatch } from 'react-redux'
// import autogrow from "autogrow"


export default function AddReciipe() {



  function onSubmit(evt) {
    evt.preventDefault()
    dispatch(editRecipe(updateEntry))
    navigate(`/${params.id}`)
  }


  function handleChange(evt){
    setUpdateEntry({
      ...updateEntry,
      [evt.target.name]: evt.target.value,
    })
  }

return (
<>

<div className="container">
<h1 className="text-center mt-3 mb-3 ">Add Recipe</h1>
    <div className="row">
        <div className="col-lg-">
        <div className="card">
        <form  onSubmit={onSubmit}>
          <img src={"/images/mortar.jpeg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text"></p>
        </div>
        <div className="border">
        <label style={{padding: "10px"}} htmlFor="ingredients"> Ingredients </label>
          <ul className="list-group list-group-flush">
          
            <li className="list-group-item">
               <textarea type="text"
            name="method"
            value="" onChange={handleChange}/>
              </li>
          </ul>
        </div>
        <div className="card-body">
          <label htmlFor="method">Method </label>
            <textarea type="text"
            name="method"
            value="" onChange={handleChange}/>
        

<div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
</>
  )}
{/* <form className="pure-form pure-form-aligned" onSubmit={onSubmit}>

  <div className="pure-control-group">
    <label htmlFor="title">Title</label>
    <input
      type="text"
      name="title"
      value="{}"
      onChange={handleChange}
    />
  </div>

  <div className="pure-control-group">
    <label htmlFor="paragraphs">Blog</label>
    <textarea
      name="paragraphs"
      value="{}"
      onChange={handleChange}
    ></textarea>
  </div>

  <div className="pure-controls">
    <input className="pure-button" type="submit" />
  </div>
</form>
</> */}

