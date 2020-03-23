import React, { Component } from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class DestinationCard extends Component {

  state={
    contentHover: false
  }

  trueHover = () => {
    this.setState(prevState => {
      return{
        contentHover: !prevState.contentHover
      }
    })
  }

  falseHover = () => {
    this.setState(prevState => {
      return{
        contentHover: !prevState.contentHover
      }
    })
  }

  render() {

    let {name, photo, trip_type} = this.props.destination
    
    return (

        <Card onMouseEnter={this.trueHover} onMouseLeave={this.falseHover} className="destination-card">
          <Image src={photo} alt={name} wrapped ui={false}/>
          <Card.Content>
            <Header className={this.state.contentHover ? "hover-destination-header" : "destination-header"}>{name}</Header>
            {this.state.contentHover ? 
              <>
                <Card.Content className="destination-info-content">
                  <Card.Description className="destination-trip-type">{trip_type}</Card.Description>
                </Card.Content> 
              </> : ""
            }
          </Card.Content>
        </Card>
    );
  }

}

export default DestinationCard;
