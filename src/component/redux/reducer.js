import { combineReducers } from "redux";
import addCart from './addCart'

const allReducer=combineReducers({
  data: addCart
})
export default allReducer