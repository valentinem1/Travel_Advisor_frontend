import React, { Component } from 'react';
import CommentCard from './CommentCard'
class CommentContainer extends Component {

  render() {
    console.log(this.props.destination);

    let commentCard = this.props.destination.reviews ?  this.props.destination.reviews.map(review => <CommentCard key={review.id} review={review}/> ) : null
    return (

      <div className="commentContainer">
        {commentCard}
      </div>
    );
  }

}

export default CommentContainer;
