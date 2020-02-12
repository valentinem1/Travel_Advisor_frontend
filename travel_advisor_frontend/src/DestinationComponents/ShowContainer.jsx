import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'


class ShowContainer extends Component {

  render() {
    // console.log(this.props.destination)
    let {name, photo, bio, trip_type} = this.props.destination
    // console.log(name);
    return (

      <div>
        <i className="fas fa-plus"></i>
        <PhotoContainer destination={this.props.destination}/>
        <ThingsToDoContainer/>
        <CommentForm />
        <CommentContainer />
      </div>
    );
  }

}

export default ShowContainer;
