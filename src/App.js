import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import mainReducer from './reducers/combination'

function App(props) {
  const store = createStore(mainReducer);
  const books = store.getState().books
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{props.dummyText}</div>
        <div>{props.defaultText}</div>
        <ul>
          {books.map((book) => {
            return (
            <li>{book.title}</li>
            )
          })
          }
        </ul>
      </header>
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
