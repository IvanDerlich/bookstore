// The form should contain a
// book title input,
// a select box with categories and a
// submit button.
import { React } from 'react';

// eslint-disable-next-line no-unused-vars
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      completed: null,
      category: null,
    };
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" value={title} name="title" />
        </label>
        <div>{categories}</div>
      </form>
    );
  }
}
export default BookForm;
