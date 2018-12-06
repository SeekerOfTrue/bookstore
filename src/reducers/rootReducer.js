import filterReducer from './filterReducer'
import booklistReducer from './booklistReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  filter: filterReducer,
  booklist: booklistReducer
});

export default rootReducer