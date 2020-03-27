import React, { Component } from 'react';
import PhotoCard from './PhotoCard'
import BucketlistContainer from './BucketlistContainer'
import { Image } from 'semantic-ui-react'

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
    console.log(this.state)
    let { bucketlist } = this.state

    return (
      <div>
        <Image className="profile-cover-photo" src="https://www.katikiesmykonos.com/wp-content/uploads/2019/09/drz_katikies-mykonos_q1a0346.jpg" alt="" />
        <PhotoCard profile_info={this.state} />
        <BucketlistContainer bucketlist={bucketlist} routerProps={this.props.routerProps}/>
      </div>
    );
  }

}

export default ProfileContainer;
