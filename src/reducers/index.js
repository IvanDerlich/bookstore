//https://redux.js.org/recipes/structuring-reducers/using-combinereducers
//https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';  
import books from './books'
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({books, visibilityFilter})

export default reducer;