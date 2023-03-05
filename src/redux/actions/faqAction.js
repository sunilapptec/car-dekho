import axios from "axios"
import { CLEAR_ERROS } from "../constrants/authConstrants"
import { FAQ_FAIL, FAQ_REQUEST, FAQ_SUCCESS } from "../constrants/index"

// Get all FAQ
export const getAllFaq = () => async (dispatch) => {
  try {
    dispatch({ type: FAQ_REQUEST })

    const config = {
      headers: { "Content-Type": "multipart/json" },
    }
    const { data } = await axios.get("/api/faqs", config)

    dispatch({ type: FAQ_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FAQ_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
