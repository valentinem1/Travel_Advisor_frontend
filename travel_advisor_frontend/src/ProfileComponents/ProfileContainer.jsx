import React, { Component } from 'react';
import PhotoCard from './PhotoCard'
import ContributionContainer from './ContributionContainer'
import BucketlistContainer from './BucketlistContainer'

class ProfileContainer extends Component {

  state={

  }

  componentDidMount() {
    fetch('http://localhost:4000/profile', {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(user => {
      this.setState({
        ...user
      })
    })
  }
  
  render() {

    let { username, picture, reviews, bucketlist } = this.state

    return (
      <div>
        <PhotoCard picture={picture} username={username}/>
        <BucketlistContainer bucketlist={bucketlist} />
        <ContributionContainer reviews={reviews} />
      </div>
    );
  }

}

export default ProfileContainer;
