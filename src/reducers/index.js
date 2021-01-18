// https://redux.js.org/recipes/structuring-reducers/using-combinereducers
// https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import books from './books';
import categoryFilter from './filter';

const reducer = combineReducers({ books, categoryFilter });

export default reducer;
