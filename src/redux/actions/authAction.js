import axios from "axios"
import { CLEAR_ERROS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL } from "../constrants/authConstrants"

export const validateEmail = (email) => {
  return email.match(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/) // eslint-disable-line
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOGOUT })
  localStorage.clear()
  window.location.href = "/login"
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = { headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post("/api/login", { email, password }, config)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    const config = { headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post("/api/register", formData, config)
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const updatePassword = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "multipart/json", Authorization: `Bearer ${userInfo.data.token}` },
    }
    const { data } = await axios.post("/api/user/update-password", formData, config)
    console.log(data)
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const updateUserProfile = (formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: { "Content-Type": "multipart/json", Authorization: `Bearer ${userInfo.data.token}` },
    }

    const { data } = await axios.post("api/user/update-profile", formData, config)
    localStorage.setItem("userInfo", JSON.stringify(data))
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROS,
  })
}
