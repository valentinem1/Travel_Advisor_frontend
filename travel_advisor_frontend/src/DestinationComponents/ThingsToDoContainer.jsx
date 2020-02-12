import React, { Component } from 'react';

class ThingsToDoContainer extends Component {

  render() {
    // console.log(this.props.things_to_do)
    let {name, bio, photo, destination} = this.props.things_to_do
    return (
      <div>
          <div className="slick-list">
            <img className="things-to-do-img" src={photo} alt={destination} />
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
      </div>
    );
  }

}

export default ThingsToDoContainer;
