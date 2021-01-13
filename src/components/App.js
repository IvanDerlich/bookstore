import './App.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App(/* props */) {
  return (
    <div className="App">
      <BookForm />
      <BooksList />
    </div>
  );
}

export default App;
