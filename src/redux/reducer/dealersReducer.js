import { DEALERS_REQUEST, DEALERS_SUCCESS, DEALERS_FAIL } from "../constrants/index"

export const getDealersQReducer = (state = { dealers: [] }, action) => {
  switch (action.type) {
    case DEALERS_REQUEST:
      return { loading: true, dealers: [] }
    case DEALERS_SUCCESS:
      return { loading: false, dealers: action.payload.data }
    case DEALERS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
