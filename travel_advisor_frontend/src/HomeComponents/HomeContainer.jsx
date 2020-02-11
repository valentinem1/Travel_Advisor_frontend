import React, { Component } from 'react';
import AuthContainer from './AuthContainer'

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <AuthContainer 
        loginUser={this.props.loginUser} 
        search={this.props.search}
        updateSearchForm={this.props.updateSearchForm}
        />
      </div>
    );
  }

}

export default HomeContainer;
