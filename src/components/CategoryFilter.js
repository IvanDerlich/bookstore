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
    const { handleFilterUpdate } = this.props;
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    handleFilterUpdate(value);
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <label htmlFor="category">
          Pick the category filter
          <select
            value={category}
            onChange={this.handleFilterChange}
            name="category"
          >
            <option value="all">--Please choose an option--</option>
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
  handleFilterUpdate: PropTypes.func.isRequired,
};

export default connect()(CategoryFilter);
