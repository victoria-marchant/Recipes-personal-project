const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = {
  allRecipes,
  singleRecipe,
  // deleteRecipe,
  // weeksRecipes,
  // setItemStatus,
  // searchBooks
}

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

function singleRecipe(id, db = connection) {
  return db('recipes')
    .select(
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
    .where('id', id)
    .first()
}

// function weeksRecipes(db = connection) {
//   return db('recipes').select().where('weeks_dinners', 'true')
// }

// function setItemStatus(id, status, db = connection) {
//   return db('recipies')
//     .update('weeks_dinners', status)
//     .where('id', id)
//     .then(() => db('recipes').select().where('id', id).first())
// }

// function deleteRecipe(id, db = connection) {
//   return db('recipes').delete().where('id', id)
// }

// function searchRecipes (search, db = connection) {
//   return db('recipes')
//   .whereLike('title', `%${search}%`)
//   .orWhereLike("ingredients", `%${search}%`)
// }

// function favourite(id, db = connection) {
//   return db('recipes')
//     .where({ id })
//     .update({ favourited: 'inactive'})

// function weekRecipe(id, db = connection) {
//   return db('books')
//         .where({ id })
//         .update({ status: 'active'})
