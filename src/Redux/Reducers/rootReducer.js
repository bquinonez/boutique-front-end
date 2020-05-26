import { combineReducers } from "redux";
import itemsReducer from './itemReducers'
import userReducer from './userReducer'
import filterSortReducer from './filterSortReducer'



//here we setting the key of the state as items
const rootReducer = combineReducers({
  items: itemsReducer,
  userInfo: userReducer,
  term: filterSortReducer

});









export default rootReducer;