import React, { useState} from 'react'

import { useParams,  useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editRecipe } from '../actions/RecipesActions'
import TextareaAutosize from 'react-textarea-autosize';


export default function AlterRecipe() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const recipes = useSelector(state => state.recipes)


  const recipe =  recipes.find((item) =>
  (params.recipeId == item.id))

  console.log(recipe)

  const [updateEntry, setUpdateEntry] = useState(recipe)
  // const [updateEntryMethod, setUpdateEntryMethod] = useState(recipe.method)

  function onSubmit(evt) {
    evt.preventDefault()
    dispatch(editRecipe(updateEntry))
    navigate(`/${params.recipeId}`)
  }


  function handleChange(evt){

    // const clonedData = [...recipe];
    // console.log(clonedData)
    // clonedData[i]= [evt.target.name] : evt.target.value

    // setUpdateEntryIngredients(clonedData);
// }
    // console.log(evt.target.name)
    // console.log(evt.target.value)
    setUpdateEntry({
      ...updateEntry,
      [evt.target.name]: evt.target.value,})}
  // })
  // }


  const method = updateEntry.method
  const ingredients = updateEntry.ingredients

  return(
<>
<div className="container">
<h1 className="text-center mt-3 mb-3 ">Adjust Recipe</h1>
    <div className="row">
        <div className="col-lg-">
        <div className="card">
        <form  onSubmit={onSubmit}>
          <img src={recipe.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Publisher: {recipe.publisher}</p>
        </div>
        <div className="border">
          <ul className="list-group list-group-flush">
          <label className="ml-5" htmlFor="ingredients"> Ingredients </label>
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">
               <TextareaAutosize className='ingredients' type="text"
            name="ingredients"
            value={ingredient} onChange={handleChange}/>
              </li>
              ))}
         
          </ul>
        </div>
        <div className="card-body">
          <label htmlFor="method">Method </label>
          {method && method.map((method, index) => (
            <TextareaAutosize index={method.index} id="floatingTextarea" type="text" className="method"
             name="method" value={method} onChange={handleChange}/>
            ))}
        

         <div className="pure-controls" style={{alignSelf: "center"}}>
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


{/* <div className='recipecontainer'> */}
{/* <div className="container">
<h1 className="text-center mt-3 mb-3 ">Adjust Recipe</h1>
    <div className="row">
        <div className="col-lg-">
        <div className="card">
<form  onSubmit={onSubmit}>
        <img src={recipe.imageUrl} alt="recipe pic"/>


        <div className="pure-control-group">
          <label htmlFor="title">Recipe Title </label>
          <input
            type="text"
            name="title"
            value={updateEntry.title}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="servings">Serving Size </label>
          <input
            type="text"
            name="servings"
            value={updateEntry.servings}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="cookingTime">Cooking Time </label>
          <input
            type="text"
            name="cookingTime"
            value={updateEntry.cookingTime}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="publisher">Publisher/Source </label>
          <input
            type="text"
            name="publisher"
            value={updateEntry.publisher}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="ingredients">Ingredients </label>
          <input
            type="text"
            name="ingredients"
            value={updateEntry.ingredients}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="method">Method </label>
          <textarea
            name="method"
            value={updateEntry.method}
            onChange={handleChange}
          ></textarea>
        </div>

    
        <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
    
      </form>
      </div>
      </div>
      </div>
      </div>
      </> */}
      
    