/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
  function toggleOpaqueness(id) {
    const bookListLink = document.querySelector('#books-link');
    const categoriesLink = document.querySelector('#categories-link');
    if (id === 'books') {
      bookListLink.classList.add('opaque');
      categoriesLink.classList.remove('opaque');
    } else {
      bookListLink.classList.remove('opaque');
      categoriesLink.classList.add('opaque');
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className="nav-menu" id="nav-menu">
            <li className="app-title">Bookstore CMS</li>
            <li className="menu-option nav-books" onClick={() => toggleOpaqueness('books')} id="books-link"><Link to="/home">Books</Link></li>
            <li className="menu-option nav-categories" onClick={() => toggleOpaqueness('categories')} id="categories-link"><Link to="/categories">Categories</Link></li>
          </ul>
          <div className="user-icon-container">
            <i className="fas fa-user-alt user-icon" />
          </div>
        </nav>
        <Switch>
          <Route path="/categories">
            <CategoryFilter />
          </Route>
          <Route path="/home">
            <BooksList />
            <div className="form-title">Add New Book</div>
            <BookForm />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
