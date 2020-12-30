import { combineReducers } from 'redux';  
import books from './books'
import visibilityFilter from './visibilityFilter'

const mainReducer = combineReducers({books, visibilityFilter})

export default mainReducer;