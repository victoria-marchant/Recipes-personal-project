const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = { allRecipes }

function allRecipes(db = connection) {
  return db('recipes').select(
    'id',
    'title',
    'servings',
    'cooking_time as cookingTime',
    'publisher',
    'summary',
    'image_url as imageUrl',
    'ingredients',
    'method',
    'weeks_dinners as weeksDinners',
    'favourited'
  )
}
