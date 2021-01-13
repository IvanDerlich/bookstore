import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const { value, name } = event.target;
    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    const { category } = this.state;
    console.clear();
    console.log(value, '<- value');
    console.log(category, '<- category');

    const action = {
      type: 'CHANGE_FILTER',
      categoryFilter: category,
    };
    console.log(action, 'action');
    dispatch(action);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const text = 'Pick the category filter';
    const { category } = this.state;
    return (
      <div>
        <label htmlFor="category">
          {text}
          <select
            value={category}
            onChange={this.handleFilterChange}
            name="category"
          >
            <option value="">--Please choose an option--</option>
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="kids">Kids</option>
            <option value="learning">Learning</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </label>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CategoryFilter);
