import React, { Component } from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class BucketlistCard extends Component {

    handleDelete = () => {
        console.log(this.props.bucketlistItem.id)
    }

    render() {
        
        let {name, photo} = this.props.bucketlistItem.destination
        return (
            <Card className="bucketlist-card">
                <span className="bucketlist-delete-btn" onClick={this.handleDelete}>&times;</span>
                <Image className="bucketlist-image" src={photo} alt="bucketlist destination"/>
                <Card.Content>
                    <Header className="bucketlist-header">{name}</Header>
                </Card.Content>
            </Card>
        );
    }
}

export default BucketlistCard;