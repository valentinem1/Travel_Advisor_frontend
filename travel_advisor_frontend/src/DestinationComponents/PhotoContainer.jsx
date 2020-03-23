import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'

class PhotoContainer extends Component {

  render() {

    let {name, bio, photo} = this.props.destination

    return (
        <div className="destination-show-container">
          <Header className="destination-showpage-name">{name}</Header>
          <Image className="destination-showpage-image" src={photo} alt={name} />
          <p className="destination-showpage-bio">{bio}</p>
        </div>

    );
  }

}

export default PhotoContainer;
