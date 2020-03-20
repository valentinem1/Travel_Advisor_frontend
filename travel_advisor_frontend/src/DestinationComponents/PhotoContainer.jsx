import React, { Component } from 'react';

class PhotoContainer extends Component {

  render() {

    let {name, bio, photo} = this.props.destination

    return (
        <div className="ui segment">
          <h3 className="destName">{name}</h3>
        <img className="ui centered medium image destination-image" src={photo} alt={name} />
        <p className = "bio">{bio}</p>
        </div>

    );
  }

}

export default PhotoContainer;
