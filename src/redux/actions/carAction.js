import axios from "axios"
import { ALL_CAR_REQUEST, ALL_CAR_SUCCESS, ALL_CAR_FAIL, CAR_DETAILS_REQUEST, CAR_DETAILS_SUCCESS, CAR_DETAILS_FAIL, COMPARE_CAR_REQUEST, COMPARE_CAR_SUCCESS, COMPARE_CAR_FAIL } from "../constrants/carConstrants"

// Get all car
export const getAllNewCars = (page) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAR_REQUEST })

    const config = {
      headers: { "Content-Type": "application/json" },
    }
    const { data } = await axios.get(`/api/cars?page=${page}`, config)

    dispatch({ type: ALL_CAR_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ALL_CAR_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

// GET SINGLE PRODUCT
export const getSingleNewCar = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CAR_DETAILS_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    const { data } = await axios.get(`/api/cars/${id}`, config)

    dispatch({
      type: CAR_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CAR_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

// compare car
export const compareCarAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COMPARE_CAR_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    }

    const { data } = await axios.post(`/api/cars/compare-car`, formData, config)
    console.log(data)

    dispatch({
      type: COMPARE_CAR_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COMPARE_CAR_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
