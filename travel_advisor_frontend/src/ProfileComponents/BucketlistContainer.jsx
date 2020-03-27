import React, { Component } from 'react';
import BucketlistCard from './BucketlistCard'

import { Container, Header, Card } from 'semantic-ui-react'

class BucketlistContainer extends Component {

  render() {
    let bucketlistDestination = !this.props.bucketlist ? null : this.props.bucketlist.map(destination => <BucketlistCard  key={destination.id} destination={destination} routerProps={this.props.routerProps} />)
    
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
