import axios from "axios"
import { NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_FAIL, NEWS_REQUEST, NEWS_SUCCESS } from "../constrants/newsConstrants"

// Get all car
/*export const getAllNews = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "multipart/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    const { data } = await axios.get("/api/news", config)

    dispatch({ type: NEWS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}*/

export const getAllNews = (page) => async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "multipart/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    let link = `/api/news?page=${page}`
    const { data } = await axios.get(link, config)
    dispatch({ type: NEWS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
// GET SINGLE PRODUCT
export const getSingleNewDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_DETAILS_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    const { data } = await axios.get(`/api/news/${id}`, config)
    console.log(data)
    dispatch({
      type: NEWS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEWS_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
