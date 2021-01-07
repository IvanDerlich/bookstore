import PropTypes from 'prop-types';

function Book({ book }) {
  const {
    id, title, completed, category,
  } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{completed ? 'true' : 'false'}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
