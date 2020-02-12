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

  handlePost=(evt)=>{
    evt.preventDefault()
    this.props.createComment(this.state.comment)
  }
//here each review belongs to a user
//we are sending token at the backend so that we can create
//reviews along with its user. check review controller


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
