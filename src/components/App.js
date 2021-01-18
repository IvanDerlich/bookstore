/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import {
  BrowserRouter, Link, Route, Switch, Redirect,
} from 'react-router-dom';
import './App.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from '../containers/CategoryFilter';

function App(/* props */) {
  function featureNotImplemented(id) {
    const popup = document.getElementById(id);
    popup.classList.toggle('show');
  }
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/categories">
            <CategoryFilter />
          </Route>
          <Route path="/books">
            <BookForm />
            <BooksList />
          </Route>
          <Route path="/">
            <Redirect to="/books" />
          </Route>
        </Switch>
      </BrowserRouter>
      <div
        className="popup"
        onClick={() => featureNotImplemented('myPopup')}
      >
        Click me to toggle the popup!
        <span className="popuptext" id="myPopup">Feature not implented yet.</span>
      </div>
    </div>
  );
}

export default App;
