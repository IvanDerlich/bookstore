import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import './Booklist.css';
import { removeBook } from '../actions/index';

function BookList(props) {
  const { books, dispatch } = props;

  const handleRemoveBook = book => {
    removeBook(book, dispatch);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Category</th>
          <th className="remove-title center-text">Remove</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          // eslint-disable-next-line react/jsx-key
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
