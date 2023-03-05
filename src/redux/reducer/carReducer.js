import { CLEAR_ERROS } from "../constrants/authConstrants"
import { ALL_CAR_REQUEST, ALL_CAR_SUCCESS, ALL_CAR_FAIL, CAR_DETAILS_REQUEST, CAR_DETAILS_SUCCESS, CAR_DETAILS_FAIL, COMPARE_CAR_REQUEST, COMPARE_CAR_SUCCESS, COMPARE_CAR_FAIL } from "../constrants/carConstrants"
/*
export const getAllNewCarsReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case ALL_CAR_REQUEST:
      return { loading: true, cars: [] }
    case ALL_CAR_SUCCESS:
      return { loading: false, cars: action.payload.data }
    case ALL_CAR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
 
export const getNewCarsDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case CAR_DETAILS_REQUEST:
      return { loading: true, product: {} }
    case CAR_DETAILS_SUCCESS:
      return { loading: false, product: action.payload.data }
    case CAR_DETAILS_FAIL:
      return { ...state, error: action.payload }
    case CLEAR_ERROS:
      return { ...state, error: null }
    default:
      return state
  }
}
*/

export const getAllNewCarsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_CAR_REQUEST:
      return {
        loading: true,
        products: [],
      }
    case ALL_CAR_SUCCESS:
      return {
        loading: false,
        products: action.payload.data,
        features: action.payload.meta,
      }
    case ALL_CAR_FAIL:
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

export const getNewCarsDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case CAR_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CAR_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      }
    case CAR_DETAILS_FAIL:
      return {
        ...state,
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

export const compareCarReducer = (state = { compareCar: [] }, action) => {
  switch (action.type) {
    case COMPARE_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COMPARE_CAR_SUCCESS:
      return {
        loading: false,
        compareCar: action.payload,
      }
    case COMPARE_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
