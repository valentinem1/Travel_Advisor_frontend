import React, { Component } from 'react';
import DestinationCard from './DestinationCard'
import {Link} from 'react-router-dom'

class DestinationContainer extends Component {

  render() {
  // console.log(this.props.destinations);
  let destinationCard = this.props.destinations.map(destination =>
     <Link key={destination.id} to={`/${destination.name}`}><DestinationCard key={destination.id} destination={destination}/></Link>)

    return (
      <div>
        {destinationCard}
      </div>
    );
  }

}

export default DestinationContainer;
