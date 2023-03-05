import { CLEAR_ERROS } from "../constrants/authConstrants"
import { ADD_TO_FAVORITE_FAIL, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_RESET, ADD_TO_FAVORITE_SUCCESS, FAVORITE_CAR_LISTS_FAIL, FAVORITE_CAR_LISTS_REQUEST, FAVORITE_CAR_LISTS_SUCCESS } from "../constrants/favoriteConstrants"

export const getAllFavoriteListReducer = (state = { favoriteList: [] }, action) => {
  switch (action.type) {
    case FAVORITE_CAR_LISTS_REQUEST:
      return {
        loading: true,
        favoriteList: [],
      }
    case FAVORITE_CAR_LISTS_SUCCESS:
      return {
        loading: false,
        favoriteList: action.payload.data,
      }
    case FAVORITE_CAR_LISTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERROS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

// add car to favorite
export const addToFavoriteReducer = (state = { favoriteItem: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        loading: false,
        success: action.payload.data,
        favoriteItem: action.payload,
      }
    case ADD_TO_FAVORITE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ADD_TO_FAVORITE_RESET:
      return {
        ...state,
        favoriteItem: false,
      }
    case CLEAR_ERROS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
