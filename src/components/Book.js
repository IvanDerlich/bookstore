/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import capitalize from '../helpers/capitalize';
import './Book.css';

function Book({ book, handleRemoveBook }) {
  const {
    id, title, completed, category,
  } = book;

  const enterPressedOnDelete = event => {
    if (event.charCode === 13) {
      handleRemoveBook(book);
    }
  };

  return (
    <tr>
      <td>
        <div>
          <span>
            {id}
          </span>
          <span>
            {` | ${capitalize(category)}`}
          </span>
        </div>
        <h2>{title}</h2>
        <h5>Author</h5>
        <div>
          <span>Comments </span>
          <span
            role="button"
            onClick={() => handleRemoveBook(book)}
            onKeyPress={enterPressedOnDelete}
            tabIndex={0}
          >
            | Remove
          </span>
          <span>| Edit</span>
        </div>
      </td>
      <td>{completed ? 'true' : 'false'}</td>
      <td>
        <div>Current Chapter</div>
        <div>Chapter X: Chapter Title</div>
        <div>Update Progress</div>
      </td>
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
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
