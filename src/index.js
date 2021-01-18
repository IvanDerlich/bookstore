/* eslint-disable no-trailing-spaces */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import mainReducer from './reducers/index';
import randomId from './helpers/randomId';

const initialState = {
  books: [{
    id: randomId(),
    title: 'The Little Prince',
    completed: false,
    category: 'kids',
  },
  {
    id: randomId(),
    title: 'The Odisey',
    completed: true,
    category: 'learning',
  },
  {
    id: randomId(),
    title: 'Aesop\'s fables',
    completed: false,
    category: 'kids',
  },
  {
    id: randomId(),
    title: 'Lord of the Rings',
    completed: false,
    category: 'learning',
  }],
  categoryFilter: '',
};
const store = createStore(mainReducer, initialState);

ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>    
      <App />    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
