import {
  // addPuppy,
  patchRecipe,
  // removePuppy,
  getAllRecipes,
} from '../apis/Recipes'

export const SET_RECIPES = 'SET_RECIPES'
// export const POST_RECIPE = 'POST_RECIPE'
export const UPDATE_RECIPE = 'UPDATE_RECIPE'
// export const CHANGE_STATUS = 'CHANGE_STATUS'
// export const RETIRE_RECIPE = 'RETIRE_RECIPE'

export function setRecipes(recipes) {
  return {
    type: SET_RECIPES,
    payload: recipes,
  }
}

export function fetchRecipes() {
  return (dispatch) => {
    return getAllRecipes()
      .then((Recipes) => {
        dispatch(setRecipes(Recipes))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

// export function postPuppy(puppy) {
//   return {
//     type: POST_PUPPY,
//     payload: {
//       id: puppy.id,
//       name: puppy.name,
//       owner: puppy.owner,
//       breed: puppy.breed,
//       imagePath: puppy.imagePath,
//     },
//   }
// }

// export function addNewPuppy(newPuppy) {
//   return (dispatch) => {
//     return addPuppy(newPuppy)
//       .then((puppies) => {
//         dispatch(postPuppy(puppies))
//         return null
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   }
// }

export function updateRecipe(recipe) {
  return {
    type: UPDATE_RECIPE,
    payload: recipe,
  }
}

export function editRecipe(recipe) {
  return (dispatch) => {
    return patchRecipe(recipe)
      .then(() => {
        dispatch(updateRecipe(recipe))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// export function retirePuppy(id) {
//   return {
//     type: RETIRE_PUPPY,
//     payload: id,
//   }
// }

// export function deletePuppy(id) {
//   return (dispatch) => {
//     return removePuppy(id)
//       .then(() => {
//         dispatch(retirePuppy(id))
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// }
