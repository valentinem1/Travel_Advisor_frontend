import React, { Component } from 'react';

class SearchForm extends Component {

  render() {

    handleSearch = (evt) => {
      this.props.updateSearchForm(evt.target.value)
    }

    return (
      <div>
          <form className="search-form">
            <input
            className="search-input"
            name="search"
            value={this.props.search}
            onChange={this.handleSearch}
            />

          </form>
      </div>
    );
  }

}

export default SearchForm;
