import React, { Component } from 'react';
import AuthContainer from './AuthContainer'

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <AuthContainer loginUser={this.props.loginUser} />
      </div>
    );
  }

}

export default HomeContainer;
