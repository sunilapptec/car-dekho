import { TERM_AND_CONDITION_REQUEST, TERM_AND_CONDITION_SUCCESS, TERM_AND_CONDITION_FAIL } from "../constrants/index"

export const termAndCondReducer = (state = { termCon: [] }, action) => {
  switch (action.type) {
    case TERM_AND_CONDITION_REQUEST:
      return { loading: true, termCon: [] }
    case TERM_AND_CONDITION_SUCCESS:
      return { loading: false, termCon: action.payload.data }
    case TERM_AND_CONDITION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
