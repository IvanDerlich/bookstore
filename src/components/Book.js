/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import capitalize from '../helpers/capitalize';
import './Book.css';
import cicularBar from '../images/circular-bar.png';

function Book({ book, handleRemoveBook }) {
  const {
    id, title, category,
  } = book;

  const enterPressedOnDelete = event => {
    if (event.charCode === 13) {
      handleRemoveBook(book);
    }
  };

  return (
    <div className="book-container">
      <div className="first-body">
        <div>
          <span className="water-blue">{id}</span>
          <span className="category-type">
            {`${capitalize(category)}`}
          </span>
        </div>
        <div className="book-title-display">{title}</div>
        <div className="water-blue">(Author's name)</div>
        <div className="auxiliary water-blue">
          <span>Comments </span>
          <span
            role="button"
            onClick={() => handleRemoveBook(book)}
            onKeyPress={enterPressedOnDelete}
            tabIndex={0}
            className="remove-link"
          >
            Remove
          </span>
          <span> Edit</span>
        </div>
      </div>
      <div className="second-body">
        <div className="circular-bar">
          <img src={cicularBar} alt="Circular Bar" />
        </div>
        <div>
          <div className="percentage">X%</div>
          <div className="completed">Completed</div>
        </div>
      </div>
      <div className="third-body">
        <div className="current-chapter">Current Chapter</div>
        <div className="chapter-name-and-number">Chapter X: Chapter Title</div>
        <div className="update-progress">Update Progress</div>
      </div>
    </div>
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
