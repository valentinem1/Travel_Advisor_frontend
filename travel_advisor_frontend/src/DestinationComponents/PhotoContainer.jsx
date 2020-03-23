import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'

class PhotoContainer extends Component {

  render() {

    let {name, bio, photo} = this.props.destination

    return (
        <div className="ui segment">
          <Header className="destName">{name}</Header>
        <Image className="destination-image" src={photo} alt={name} />
        <p className = "bio">{bio}</p>
        </div>

    );
  }

}

export default PhotoContainer;
