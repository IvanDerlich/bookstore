import PropTypes from 'prop-types';

function BookList(props) {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id} id={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
};

export default BookList;
