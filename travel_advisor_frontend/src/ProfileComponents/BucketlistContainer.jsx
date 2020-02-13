import React, { Component } from 'react';
import DestinationCard from '../HomeComponents/DestinationCard'
import {Link} from 'react-router-dom'
class BucketlistContainer extends Component {

  render() {
    // console.log(this.props.bucketlist)
    
    // state is asynch we cannot map it will return undefined. 
    // if bucketlist is undefined do nothing (null) else map over
    let bucketlistDestination = !this.props.bucketlist ? null : this.props.bucketlist.map(destination => <Link key={destination.id} to={`/${destination.name}/${destination.id}`}> <DestinationCard destination={destination}/> </Link>)
    
    return (
      <div>
        <div><b>Bucketlist:</b></div>
       {bucketlistDestination}
      </div>
    );
  }

}

export default BucketlistContainer;
