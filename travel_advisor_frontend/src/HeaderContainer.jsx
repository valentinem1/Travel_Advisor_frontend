import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Segment, Header, Button, Image } from 'semantic-ui-react'

class HeaderContainer extends Component {

  logOutUser = () => {
    localStorage.clear()
    this.props.historyProps.history.push("/")
  }

  render() {
    return (
      <Segment className="page-header">
        <div className="logo-title-header">
          <Image src="https://www.underconsideration.com/brandnew/archives/tripadvisor_logo_icon_detail.png" alt="logo" className="page-logo"/>
          <Header className="page-title">Travel Advisor</Header>
        </div>
        <Header>
          <Link to="/"><Button className="header-buttons">Home</Button></Link>
          {localStorage.token ? 
            <><Link to="/profile"><Button className="header-buttons">Profile</Button></Link> 
            <Button className="header-buttons" onClick={this.logOutUser}>Log Out</Button></> : 
            <Link to='/signup'><Button className="header-buttons">SignUp</Button></Link>
          }
        </Header>
      </Segment>
    );
  }

}

export default HeaderContainer;
