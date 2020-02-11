import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'


class ShowContainer extends Component {

  render() {
    console.log(this.props.destinations)
    let {name, photo, bio, trip_type} = this.props.destinations
    return (

      <div>
        <PhotoContainer photo={photo} bio={bio}/>
        <ThingsToDoContainer />
        <CommentForm />
        <CommentContainer />
      </div>
    );
  }

}

export default ShowContainer;
