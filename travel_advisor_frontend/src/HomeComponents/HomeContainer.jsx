import React, { Component } from 'react';
import AuthContainer from './AuthContainer'
import DestinationContainer from './DestinationContainer'

class HomeContainer extends Component {

  render() {
    // console.log(this.props.destinations);
    return (
      <div>
        <AuthContainer loginUser={this.props.loginUser} />
        <DestinationContainer destinations={this.props.destinations}/>
      </div>
    );
  }

}

export default HomeContainer;
