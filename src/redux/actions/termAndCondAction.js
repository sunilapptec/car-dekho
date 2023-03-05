import axios from "axios"
import { TERM_AND_CONDITION_REQUEST, TERM_AND_CONDITION_SUCCESS, TERM_AND_CONDITION_FAIL } from "../constrants/index"

export const getAllTermAndCond = () => async (dispatch) => {
  try {
    dispatch({ type: TERM_AND_CONDITION_REQUEST })

    const config = {
      headers: { "Content-Type": "multipart/json" },
    }
    const { data } = await axios.get("/api/term-conditions", config)
    dispatch({ type: TERM_AND_CONDITION_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: TERM_AND_CONDITION_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
