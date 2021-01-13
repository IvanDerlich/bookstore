import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import './Booklist.css';

function BookList(props) {
  const { filter } = props;
  let { books } = props;
  console.log(books, 'books');
  console.log(filter, 'filter');
  if (filter !== 'all') {
    books = books.filter(book => book.category === filter);
  }

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
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.categoryFilter,
});

export default connect(mapStateToProps)(BookList);
