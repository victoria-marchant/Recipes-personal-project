import request from 'superagent'

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
