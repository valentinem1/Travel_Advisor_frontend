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
          <AuthContainer user={this.props.user} />
          <DestinationContainer destinations={this.props.destinations} routerProps={this.props.routerProps}/>
        </div>
      </div>
    );
  }

}

export default HomeContainer;
