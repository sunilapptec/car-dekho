import { CLEAR_ERROS } from "../constrants/authConstrants"
import { NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_FAIL, NEWS_REQUEST, NEWS_SUCCESS } from "../constrants/newsConstrants"

export const getAllNewsReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return {
        loading: true,
        news: [],
      }
    case NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload.data,
        features: action.payload.meta,
      }
    case NEWS_FAIL:
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

export const getNewsDetailsReducer = (state = { singleNew: {} }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NEWS_DETAILS_SUCCESS:
      return {
        loading: false,
        singleNew: action.payload.singleNew,
      }
    case NEWS_DETAILS_FAIL:
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
