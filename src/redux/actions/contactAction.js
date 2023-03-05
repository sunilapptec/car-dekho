import axios from "axios"
import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAIL } from "../constrants/index"

export const contactUs = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "multipart/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    }

    const { data } = await axios.post(`/api/contact-us`, formData, config)

    dispatch({
      type: CONTACT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
