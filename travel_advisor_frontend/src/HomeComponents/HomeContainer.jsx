import React, { Component } from 'react';
import AuthContainer from './AuthContainer'
import DestinationContainer from './DestinationContainer'
import SearchForm from './SearchForm'

class HomeContainer extends Component {

  render() {
    // console.log(this.props.destinations);
    // console.log(this.props)
    return (
      <div>
        <SearchForm 
        search={this.props.search}
        updateSearchForm={this.props.updateSearchForm}
        />
        <AuthContainer loginUser={this.props.loginUser} />
        <DestinationContainer destinations={this.props.destinations}/>
      </div>
    );
  }

}

export default HomeContainer;
