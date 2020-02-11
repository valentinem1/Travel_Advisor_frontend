import React, { Component } from 'react';

class DestinationCard extends Component {

  render() {
    // console.log(this.props.destination);
    let {name, bio, photo, trip_type} = this.props.destination
    return (

        <div className="ui card">
          <div className="image"><img src={photo} alt={name} /></div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="meta"><span className="date">{trip_type}</span></div>
            <div className="description">{bio}</div>
          </div>
          {/* <div className="extra content">
            <a>
              <i aria-hidden="true" className="user icon"></i>
              Lol
            </a>
           </div> */}
        </div>
    );
  }

}

export default DestinationCard;
