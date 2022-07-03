import request from 'superagent'
// eslint-disable-next-line no-unused-vars

// export function getGreeting() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }
// export function getRecipe() {
//   return request
//     .get(`https://forkify-api.herokuapp.com/api/v2/recipes`)
//     .then((response) => {
//       response.body
//     })
// }

const recipeUrl = '/api/v1/recipes'

export function allRecipes() {
  console.log('hit')
  return (
    request
      .get(recipeUrl)
      .then((response) => {
        const recipe = response.body
        console.log('recipe', recipe)
        return recipe
      })
      // })
      .catch(errorHandler('GET', '/v1/recipe'))
  )
}

// function validateNoSnakeCase(response) {
//   const hasSnakeCase = Object.keys(response).some((key) => key.includes('_'))
//   if (hasSnakeCase) {
//     throw Error('Error: you should not be returning properties in snake_case')
//   }
// }

// response.body.forEach((recipe) => validateNoSnakeCase(post))
// return res.body
//   // response.body.forEach((recipe) => {

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
