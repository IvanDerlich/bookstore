import './App.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from './CategoryFilter';

function App(/* props */) {
  return (
    <div className="App">
      <BookForm />
      <CategoryFilter />
      <BooksList />
    </div>
  );
}

export default App;
