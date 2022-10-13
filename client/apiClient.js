import request from 'superagent'

const recipeUrl = '/api/v1/recipes'

export function allRecipes() {
  // console.log('hit')
  return (
    request
      .get(recipeUrl)
      .then((response) => {
        const recipe = response.body
        // console.log('recipe', recipe)
        return recipe
      })
      // })
      .catch(errorHandler('GET', '/v1/recipe'))
  )
}

// export function addRecipe(newRecipe) {
//   // convert the large paragraphs string into an array of paragraphs
//   post.paragraphs = post.paragraphs.split('\n')
//   return request
//     .post('/v1/posts')
//     .send(post)
//     .then((res) => {
//       validateNoSnakeCase(res.body)
//       validatePostResponse('POST', 'v1/posts', res.body)
//       return res.body
//     })
//     .catch(errorHandler('POST', '/v1/posts'))
//   }

// export function deleteRecipe(id) {
//   return request
//     .del(`${recipeUrl} ${id}`)
//     .then((res) => res)
//     .catch(errorHandler('DELETE', '/v1/recipe/:id/'))
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
