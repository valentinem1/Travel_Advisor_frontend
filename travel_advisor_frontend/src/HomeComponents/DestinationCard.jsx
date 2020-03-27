import React, { Component } from 'react';
import { Card, Image, Header, Reveal } from 'semantic-ui-react'

class DestinationCard extends Component {

  // state={
  //   contentHover: false
  // }

  // trueHover = () => {
  //   this.setState(prevState => {
  //     return{
  //       contentHover: !prevState.contentHover
  //     }
  //   })
  // }

  // falseHover = () => {
  //   this.setState(prevState => {
  //     return{
  //       contentHover: !prevState.contentHover
  //     }
  //   })
  // }

  render() {

    let {name, photo, trip_type} = this.props.destination
    
    return (
      <Card className="destination-card">
        <Image className="destination-card-image" src={photo} alt={name} wrapped ui={false}/>
        <Card.Content>
          <Header className="destination-header">{name}</Header>
        </Card.Content>
      </Card>
    );
  }

}

export default DestinationCard;
