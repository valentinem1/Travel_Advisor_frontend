import React, { Component } from 'react';

class SearchForm extends Component {
  
  handleSearch = (evt) => {
    this.props.updateSearchForm(evt.target.value)
  }

  render() {

    return (
      <div>
          <form className="search-form">
            <label>Search Your Next Destination: </label>
            <br/>
            <input
            className="search-input"
            name="search"
            placeholder="Search cities..."
            value={this.props.search}
            onChange={this.handleSearch}
            />

          </form>
      </div>
    );
  }

}

export default SearchForm;
