import './App.css';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import mainReducer from './reducers/index'
import BooksList from './containers/BookList'
import BookForm from './containers/BookForm'

function App(props) {   
  const store = createStore(mainReducer);
  const books = store.getState().books
  return (
    <div className="App">
      <Provider store={store}>
        <BookForm/>        
        <BooksList>
          <ul>
            {books.map((book) => {
              return (
              <li id={book.id}>{book.title}</li>
              )
            })
            }
          </ul>   
        </BooksList> 
      </Provider>
    </div>
  );
}

App.defaultProps = {
  defaultText: 'This is a default text.',
};

App.propTypes = {
  dummyText: PropTypes.string.isRequired,
};

export default App;
