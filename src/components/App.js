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
          <ul id="nav-menu">
            <li>Bookstore CMS</li>
            <li><Link to="/home">| Books</Link></li>
            <li><Link to="/categories">| Categories</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/categories">
            <CategoryFilter />
          </Route>
          <Route path="/home">
            <BookForm />
            <BooksList />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
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
