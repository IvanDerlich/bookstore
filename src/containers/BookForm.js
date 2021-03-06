/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unescaped-entities */
// The form should contain a
// book title input,
// a select box with categories and a
// submit button.
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BookForm.css';
import { CREATE_BOOK } from '../actions';
import randomId from '../helpers/randomId';

// eslint-disable-next-line no-unused-vars
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '--Type the title--',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { dispatch } = this.props;

    const book = {
      id: randomId(),
      title: target.title.value,
      category: target.category.value,
    };

    CREATE_BOOK(book, dispatch);

    this.setState({
      title: '--Type the title--',
      category: '',
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form id="book-form" className="book-form" onSubmit={this.handleSubmit}>
        <div className="title-container">
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
            required
            id="title-input"
            placeholder="Book Title"
          />
        </div>
        <div className="category-container">
          <select
            value={category}
            onChange={this.handleChange}
            name="category"
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="action">Action</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="kids">Kids</option>
            <option value="learning">Learning</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </div>
        <div className="submit-container"><input type="submit" value="Add" /></div>
      </form>
    );
  }
}

BookForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BookForm);
