import React, { Component } from 'react';
import AuthContainer from './AuthContainer'
import DestinationContainer from './DestinationContainer'
import SearchForm from './SearchForm'

class HomeContainer extends Component {

  render() {

    return (
      <div>
        <SearchForm 
          search={this.props.search}
          updateSearchForm={this.props.updateSearchForm}
        />
        <div className="auth-destination-container">
          <AuthContainer loginUser={this.props.loginUser} />
          <DestinationContainer destinations={this.props.destinations}/>
        </div>
      </div>
    );
  }

}

export default HomeContainer;
