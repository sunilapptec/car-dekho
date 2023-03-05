import { FAQ_FAIL, FAQ_REQUEST, FAQ_SUCCESS } from "../constrants/index"

export const getFAQReducer = (state = { faqs: [] }, action) => {
  switch (action.type) {
    case FAQ_REQUEST:
      return { loading: true, faqs: [] }
    case FAQ_SUCCESS:
      return { loading: false, faqs: action.payload.data }
    case FAQ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
