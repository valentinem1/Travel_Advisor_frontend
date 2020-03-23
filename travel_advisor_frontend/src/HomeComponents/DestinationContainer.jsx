import React, { Component } from 'react';
import DestinationCard from './DestinationCard'
import {Link} from 'react-router-dom'
import { Card } from 'semantic-ui-react'

class DestinationContainer extends Component {

  render() {

  let destinationCard = this.props.destinations.map(destination =>
     <Link key={destination.id} to={`/${destination.name}/${destination.id}`}><DestinationCard key={destination.id} destination={destination}/></Link>)

    return (
      <Card.Group className={localStorage.token ? "login-destination-container" : "destination-container"}>
        {destinationCard}
      </Card.Group>
    );
  }

}

export default DestinationContainer;
