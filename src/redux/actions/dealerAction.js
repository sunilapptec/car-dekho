import axios from "axios"
import { DEALERS_REQUEST, DEALERS_SUCCESS, DEALERS_FAIL } from "../constrants/index"

// Get all Dealer
export const getAllDealers = () => async (dispatch) => {
  try {
    dispatch({ type: DEALERS_REQUEST })

    const config = {
      headers: { "Content-Type": "multipart/json" },
    }
    const { data } = await axios.get("/api/dealers", config)

    dispatch({ type: DEALERS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DEALERS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
