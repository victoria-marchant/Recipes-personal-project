import request from 'superagent'

const baseUrl = '/api/v1/recipes'

export function getAllRecipes() {
  return request
    .get(`${baseUrl}`)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('GET', '/'))
}

export function getSingleRecipe() {}

// export function addPuppy(newPuppy) {
//   return request
//     .post(`${baseUrl}`) //do I need a diff path
//     .send(newPuppy) //why no {} to get into db?
//     .then((res) => {
//       return res.body
//     })
//     .catch(errorHandler('POST', '/'))
// }

export function patchRecipe(recipe) {
  return request.patch(baseUrl + '/' + recipe.id).send(recipe)
}

// export function removePuppy(puppyId) {
//   return request
//     .del(`${baseUrl}/${puppyId}`)
//     .then((res) => res)
//     .catch(errorHandler('DELETE', '/v1/puppies/:id'))
// }

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
