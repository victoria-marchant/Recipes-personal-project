import {
  SET_RECIPES,
  // POST_RECIPE,
  // UPDATE_RECIPE,
  // DELETE_RECIPE,
} from '../actions/RecipesActions'

const initialState = []

const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_RECIPES:
      return payload
    // case POST_RECIPE:
    //   return [...state, payload]
    // case UPDATE_RECIPE:
    //   return state.map((Recipe) => {
    //     if (Recipe.id === payload.id) {
    //       return { ...Recipe, ...payload }
    //     }
    //     return Recipe
    //   })
    // case DELETE_Recipe:
    //   return state.filter((Recipe) => Recipe !== payload)
    default:
      return state
  }
}

export default recipesReducer
