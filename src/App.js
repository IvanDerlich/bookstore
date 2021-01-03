import './App.css';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/index';
import BooksList from './containers/BookList';
import BookForm from './containers/BookForm';
import Test from './components/Test';

function App(/* props */) {
  const store = createStore(mainReducer);
  const { books } = store.getState();
  return (
    <div className="App">
      <Provider store={store}>
        <Test />
        <BookForm />
        <BooksList books={books} />
      </Provider>
    </div>
  );
}

App.defaultProps = {
  defaultText: 'This is a default text.',
};

App.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dummyText: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  defaultText: PropTypes.string,
};

export default App;
