import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterUpdate = filter => {
    const { dispatch } = this.props;
    const action = {
      type: 'CHANGE_FILTER',
      categoryFilter: filter,
    };
    dispatch(action);
  };

  handleFilterChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.handleFilterUpdate(value);
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
            <option value="">All</option>
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
