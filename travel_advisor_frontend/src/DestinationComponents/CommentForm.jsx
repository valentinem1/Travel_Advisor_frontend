import React, { Component } from 'react';

class CommentForm extends Component {

  state={
    comment: ""
  }

  allChange = (evt) => {
    let {name, value} = evt.target

    this.setState({
      [name]: value
    })
  }

  handlePost = (evt) => {
    evt.preventDefault()

    fetch('http://localhost:4000/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        destination_id: this.props.destination_id,
        user_id: 1,
        comment: this.state.comment,
        rating: 0
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    // console.log(this.props.user)
    // console.log(this.props.destination_id)
    return (
      <div>
        <form onSubmit={this.handlePost}>
          <input 
          name="comment"
          value={this.state.comment}
          onChange={this.allChange}
          placeholder="Add your comment..."
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }

}

export default CommentForm;
