const express = require('express')
const router = express.Router()
// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

router.get('/', (req, res) => {
  db.allRecipes()
    .then((recipe) => {
      console.log(recipe)
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

module.exports = router
