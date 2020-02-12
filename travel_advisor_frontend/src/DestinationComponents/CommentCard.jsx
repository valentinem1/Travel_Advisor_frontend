import React, { Component } from 'react';

class CommentCard extends Component {

  render() {
    let {comment, rating} = this.props.review
    return (
      <div>
        <p>{comment}</p>
        <p>{rating}</p>

      </div>
    );
  }

}

export default CommentCard;
