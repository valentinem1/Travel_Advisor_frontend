import React, { Component } from 'react';
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'
import { Button, Card } from 'semantic-ui-react'

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
    let { things_to_dos } = this.state

    let thingsToDo = !things_to_dos ? null : things_to_dos.map(thingstodo => <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo}/>)

    return (
      <div>
        <Button onClick={this.addToBucketList} className="add-to-bucketlist">+ Add to bucketlist</Button>
        <PhotoContainer destination={this.state}/>
        <Card.Group className="things-to-do-container">{thingsToDo}</Card.Group>
        <CommentForm createComment={this.createComment}/>
        <CommentContainer destination={this.state}/>
      </div>
    );
  }

}

export default ShowContainer;
