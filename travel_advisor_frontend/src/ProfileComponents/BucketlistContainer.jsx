import React, { Component } from 'react';
import DestinationCard from '../HomeComponents/DestinationCard'
import {Link} from 'react-router-dom'
import { Container, Header, Card } from 'semantic-ui-react'

class BucketlistContainer extends Component {

  render() {
    let bucketlistDestination = !this.props.bucketlist ? null : this.props.bucketlist.map(destination => <Link key={destination.id} to={`/${destination.name}/${destination.id}`}> <DestinationCard  destination={destination} routerProps={this.props.routerProps} /> </Link>)
    
    return (
      <Container className="bucketlist-container">
          <Header className="bucketlist-container-header">Bucketlist</Header>
        <Card.Group className="bucketlist-group-card">
          {bucketlistDestination}
        </Card.Group>
      </Container>
    );
  }

}

export default BucketlistContainer;
