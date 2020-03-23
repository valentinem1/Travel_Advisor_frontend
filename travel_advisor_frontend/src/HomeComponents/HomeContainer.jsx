import React, { Component } from 'react';
import AuthContainer from './AuthContainer'
import DestinationContainer from './DestinationContainer'
import SearchForm from './SearchForm'
import { Image } from 'semantic-ui-react'

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <Image className="home-page-picture" src="https://www.katikiesmykonos.com/wp-content/uploads/2019/09/drz_katikies-mykonos_q1a0346.jpg" alt="home page picture of a beach"/>
        <SearchForm 
          search={this.props.search}
          updateSearchForm={this.props.updateSearchForm}
        />
        <div className="auth-destination-container">
          <AuthContainer user={this.props.user} loginUser={this.props.loginUser} />
          <DestinationContainer destinations={this.props.destinations}/>
        </div>
      </div>
    );
  }

}

export default HomeContainer;
