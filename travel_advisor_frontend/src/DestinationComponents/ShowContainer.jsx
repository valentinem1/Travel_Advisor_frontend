import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'


class ShowContainer extends Component {  

  render() {
    // console.log(this.props.destination.things_to_dos)
    let {id, name, photo, bio, trip_type, things_to_dos} = this.props.destination
    // console.log(id);
    // console.log(things_to_dos)

    let thingsToDo = things_to_dos.map(things_to_do => <ThingsToDoContainer key={things_to_do.id} things_to_do={things_to_do}/> )

    return (

      <div>
        <i className="fas fa-plus"></i>
        <PhotoContainer destination={this.props.destination}/>
        {thingsToDo}
        <CommentForm user={this.props.user} destination_id={id}/>
        <CommentContainer />
      </div>
    );
  }

}

export default ShowContainer;
