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
import { createBook } from '../actions';
import randomId from '../helpers/randomId';

// eslint-disable-next-line no-unused-vars
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { dispatch, books } = this.props;
    // const title = target.title.value;
    // const category = target.category.value;
    // const completed = target.completed.value;
    // console.log(event.target);
    // eslint-disable-next-line no-console
    const book = {
      id: randomId(),
      title: target.title.value,
      category: target.category.value,
    };
    // console.clear();
    // eslint-disable-next-line no-console
    // console.log(book, 'book');

    createBook(book, dispatch);
    const bookInStore = books.filter(b => b.id === book.id);
    if (bookInStore !== book) {
      // eslint-disable-next-line no-console
      console.error('Data inconsistency handling book submit. Book in store is not the same as the book submited.');
    }
    this.setState({
      title: book.title,
      category: book.category,
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, completed, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="category">
          Pick the book's category
          <select
            value={category}
            onChange={this.handleChange}
            name="category"
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
        </label>
        <label htmlFor="completed">
          Completed:
          <input
            name="completed"
            type="checkbox"
            onChange={this.handleInputChange}
            defaultChecked={completed}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

BookForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookForm);
