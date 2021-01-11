/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unescaped-entities */
// The form should contain a
// book title input,
// a select box with categories and a
// submit button.
import React from 'react';
import './BookForm.css';

// eslint-disable-next-line no-unused-vars
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hi',
      completed: true,
      category: 'kids',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const title = target.title.value;
    const category = target.category.value;
    const completed = target.completed.value;
    // console.log(event.target);
    console.log(title, '<- title');
    console.log(category, '<- category');
    console.log(completed, '<- completed');
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
            <option value="Action">Action</option>
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
export default BookForm;
