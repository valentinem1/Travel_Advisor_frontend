import React, { Component } from 'react';

class PhotoCard extends Component {

  render() {
    // console.log(this.props.picture)
    return (
      <div>
        <img src={this.props.picture} alt={this.props.username} />
      </div>
    );
  }

}

export default PhotoCard;
