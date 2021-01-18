/* eslint-disable no-unused-vars */
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import './App.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App(/* props */) {
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
            <div>Categories</div>
          </Route>
          <Route path="/books">
            <div>Books</div>
          </Route>
        </Switch>
        <BookForm />
        <BooksList />
      </BrowserRouter>
    </div>
  );
}

export default App;
