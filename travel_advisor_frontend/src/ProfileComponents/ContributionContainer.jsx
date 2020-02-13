import React, { Component } from 'react';
import CommentCard from '../DestinationComponents/CommentCard'
class ContributionContainer extends Component {

  render() {
    console.log(this.props.reviews)

    let review = !this.props.reviews ? null : this.props.reviews.map(review => <CommentCard review={review} />)
    return (
      <div>
        <div><b>My comments:</b></div>
        {review}
      </div>
    );
  }

}

export default ContributionContainer;
