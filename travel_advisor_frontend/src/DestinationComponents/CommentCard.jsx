import React, { Component } from 'react';
import { Container, Rating, Segment } from 'semantic-ui-react'

class CommentCard extends Component {

  render() {
    let {comment, rating, username} = this.props.review

    return (

      <Container className="review-container">
        <p className="review-username">{username}</p>
        <div className="comment-rating-card">
          <p className="review-comment-card">{comment}</p>
          <span className="span-separation"> - </span>
          <Rating className="rating-stars-card" defaultRating={rating} icon="star" maxRating={5} disabled />
        </div>
        <hr className="review-separation" />
      </Container>
    );
  }

}

export default CommentCard;
