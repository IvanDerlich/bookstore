/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    const { dispatch } = this.props;
    this.setState({
      [name]: value,
    });
    dispatch({
      type: 'CHANGE_FILTER',
      categoryFilter: value,
    });
  }

  render() {
    const featureNotImplemented = id => {
      const popup = document.getElementById(id);
      popup.classList.toggle('show');
    };

    const { category } = this.state;
    return (
      <div className="categories-container">
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
        <div
          className="popup"
          onClick={() => featureNotImplemented('myPopup')}
        >
          <button
            type="button"
            className="button-cat"
          >
            Edit Categories
          </button>
          <span className="popuptext" id="myPopup">Not implented yet.</span>
        </div>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CategoryFilter);
