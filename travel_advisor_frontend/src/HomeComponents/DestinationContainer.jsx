import React, { Component } from 'react';
import DestinationCard from './DestinationCard'

class DestinationContainer extends Component {

  render() {
  // console.log(this.props.destinations);
  let destinationCard = this.props.destinations.map(destination =>
     <DestinationCard key={destination.id} destination={destination}/>)

    return (
      <div>
        {destinationCard}
      </div>
    );
  }

}

export default DestinationContainer;
