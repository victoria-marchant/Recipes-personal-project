const express = require('express')
const router = express.Router()
// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

router.get('/', (req, res) => {
  db.allRecipes()
    .then((recipe) => {
      // console.log(recipe)
      recipe.forEach((recipe) => {
        recipe.ingredients = JSON.parse(recipe.ingredients)
        recipe.method = JSON.parse(recipe.method)
      })
      res.json(recipe)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Sever error')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.singleRecipe(id)
    .then((recipe) => {
      recipe.ingredients = JSON.parse(recipe.ingredients)
      recipe.method = JSON.parse(recipe.method)
      res.json(recipe)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Sever error')
    })
})

//DELETE /api/vi/recipes/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteRecipe(id)
    .then(() => {
      res.sendstatus(200)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('server error')
    })
})

//get /api/vi/recipes/weeksrecipes
router.get('/weeksrecipes', (req, res) => {
  db.weeksRecipes()
    .then((recipe) => {
      console.log(recipe)
      // recipe.forEach((recipe) => {
      //   recipe.ingredients = JSON.parse(recipe.ingredients)
      //   recipe.method = JSON.parse(recipe.method)
      // })
      // res.json(recipe)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Sever error')
    })
})

module.exports = router
