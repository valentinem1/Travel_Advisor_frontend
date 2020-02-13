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
      // console.log(reviewArr);
      this.setState({
        reviews: reviewArr
      })
    })
  }

  // add new destination to bucketlist for logged in user. This method is not displaying anything in the destination show page.
  addToBucketList = () => {
    fetch('http://localhost:4000/add_joiners', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        destination_id: this.state.id
      })
    })
    .then(r => r.json())
    .then(add_joiner => {
      let newAddJoiner = [...this.state.add_joiners, add_joiner]
      this.setState({
        add_joiners: newAddJoiner
      })
    })
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
      // let destinationName = this.props.match.params.name
      // console.log(destinationName)
    let {id, name, photo, bio, trip_type, things_to_dos} = this.state

    let thingsToDo = !things_to_dos ? null : things_to_dos.map(thingstodo => <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo}/> )

    return (
      <div>
        <i onClick={this.addToBucketList} className="fas fa-plus"></i>
        <PhotoContainer destination={this.state}/>
        {thingsToDo}
        <CommentForm createComment={this.createComment}/>
        <CommentContainer destination={this.state}/>
      </div>
    );
  }

}

export default ShowContainer;
