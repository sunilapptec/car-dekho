import axios from "axios"
import { ADD_TO_FAVORITE_FAIL, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, FAVORITE_CAR_LISTS_FAIL, FAVORITE_CAR_LISTS_REQUEST, FAVORITE_CAR_LISTS_SUCCESS } from "../constrants/favoriteConstrants"

// Get all  Favorite List
export const getAllFavoriteListAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FAVORITE_CAR_LISTS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "multipart/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    const { data } = await axios.get("/api/user/favourites", config)

    dispatch({ type: FAVORITE_CAR_LISTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FAVORITE_CAR_LISTS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

// Add Favorite List
export const addCarToFavorite = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    }

    const { data } = await axios.post(`/api/user/save-favourites`, formData, config)

    dispatch({
      type: ADD_TO_FAVORITE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADD_TO_FAVORITE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
