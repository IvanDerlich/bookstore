/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import capitalize from '../helpers/capitalize';
import './Book.css';
import { removeBook } from '../actions/index';

function Book({ book, dispatch }) {
  const {
    id, title, completed, category,
  } = book;

  const handleRemoveBook = (book, dispatch) => {
    removeBook(book, dispatch);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{completed ? 'true' : 'false'}</td>
      <td>
        {capitalize(category)}
      </td>
      <td className="trash-icon center-text" onClick={() => handleRemoveBook(book, dispatch)}><i className="fas fa-trash" /></td>
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Book);
