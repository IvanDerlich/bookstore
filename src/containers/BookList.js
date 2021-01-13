import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import './Booklist.css';

function BookList(props) {
  const { books } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Category</th>
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
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
