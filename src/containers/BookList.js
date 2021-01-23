import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

function BookList({ books, dispatch, filter }) {
  const filteredBooks = filter === ''
    ? books
    : books.filter(book => book.category === filter);

  const handleRemoveBook = book => {
    REMOVE_BOOK(book, dispatch);
  };

  return (
    <div>
      {filteredBooks.map(book => (
        <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.categoryFilter,
});

export default connect(mapStateToProps)(BookList);
