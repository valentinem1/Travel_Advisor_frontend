import React, { Component } from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class BucketlistCard extends Component {
    render() {
        
        let {name, photo} = this.props.bucketlistItem.destination
        return (
            <Card>
                <Image src={photo} alt="bucketlist destination"/>
            </Card>
        );
    }
}

export default BucketlistCard;