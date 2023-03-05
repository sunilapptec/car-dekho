import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { updatePasswordReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducer/authReducer"
import { getFAQReducer } from "./reducer/faqReducer"
import { contactReducer } from "./reducer/contactReducer"
import { termAndCondReducer } from "./reducer/termAndCondReducer"
import { getDealersQReducer } from "./reducer/dealersReducer"
import { compareCarReducer, getAllNewCarsReducer, getNewCarsDetailsReducer } from "./reducer/carReducer"
import { getAllNewsReducer, getNewsDetailsReducer } from "./reducer/newsReducer"
import { addToFavoriteReducer, getAllFavoriteListReducer } from "./reducer/favoriteReducer"

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

/*const carInfoFromStorage = localStorage.getItem("carInfo") ? JSON.parse(localStorage.getItem("carInfo")) : null*/

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  updatePassword: updatePasswordReducer,
  userUpdateProfile: userUpdateProfileReducer,
  getFAQ: getFAQReducer,
  contactUs: contactReducer,
  termAndCond: termAndCondReducer,
  getdealers: getDealersQReducer,
  getAllNewCars: getAllNewCarsReducer,
  newCarsDetails: getNewCarsDetailsReducer,
  getallNews: getAllNewsReducer,
  getNewsDetails: getNewsDetailsReducer,
  getAllFavorites: getAllFavoriteListReducer,
  favorites: addToFavoriteReducer,
  compareCar: compareCarReducer,
})
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
