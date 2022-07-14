import {
  SET_RECIPES,
  // POST_RECIPE,
  // UPDATE_RECIPE,
  // RETIRE_RECIPE,
} from '../actions/RecipesActions'

const initialState = []

const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_RECIPES:
      return payload
    // case POST_PUPPY:
    //   return [...state, payload]
    // case UPDATE_PUPPY:
    //   return state.map((puppy) => {
    //     if (puppy.id === payload.id) {
    //       return { ...puppy, ...payload }
    //     }
    //     return puppy
    //   })
    // case RETIRE_PUPPY:
    //   return state.filter((puppy) => puppy !== payload)
    default:
      return state
  }
}

export default recipesReducer
