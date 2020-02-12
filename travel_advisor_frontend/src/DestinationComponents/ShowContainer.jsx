import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'


class ShowContainer extends Component {

  state = {

  }

  componentDidMount() {
    let destination_id = this.props.match.params.id
    fetch(`http://localhost:4000/destinations/${destination_id}`)
    .then(r=>r.json())
    .then((destination) => {
      this.setState({
        ...destination
      })
    })
  }

// with prevstate takes previous
  createComment = (newComment) => {
    fetch('http://localhost:4000/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        destination_id: this.state.id,
        comment: newComment,
        rating: 0
      })
    })
    .then(r => r.json())
    .then((revdata) => {
      let reviewArr = [...this.state.reviews, revdata]
      console.log(reviewArr);
      this.setState({
        reviews: reviewArr
      })
    })
  }

  render() {
    console.log(this.state);
    // console.log(this.props);
      // let destinationName = routerProps.match.params.name
    // console.log(this.props.destination);
    // console.log(this.props.destination.things_to_dos)
    let {id, name, photo, bio, trip_type, things_to_dos} = this.state
console.log();
    let thingsToDo = !things_to_dos ? null : things_to_dos.map(thingstodo => <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo}/> )

    return (
      <div>
        <i className="fas fa-plus"></i>
        <PhotoContainer destination={this.state}/>
        {thingsToDo}
        <CommentForm createComment={this.createComment}/>
        <CommentContainer destination={this.state}/>
      </div>
    );
  }

}

export default ShowContainer;
