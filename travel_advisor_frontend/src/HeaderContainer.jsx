import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Header, Button, Image, Menu } from 'semantic-ui-react'


class HeaderContainer extends Component {

  logOutUser = () => {
    localStorage.clear()
    this.props.historyProps.history.push("/")
  }

  render() {
    return (
      <div className="page-header">
        <Link to="/">
          <div className="logo-title-header">
            <Image src="https://www.underconsideration.com/brandnew/archives/tripadvisor_logo_icon_detail.png" alt="logo" className="page-logo"/>
            <Header className="page-title">Travel Advisor</Header>
          </div>
        </Link>
        <Header className="header-buttons">
          {localStorage.token ? 
            <>
              <Link to="/profile" >
                <Button className="profile-btn">Profile</Button>
              </Link> 
              <Button className="logout-btn" onClick={this.logOutUser}>Logout</Button>
              
            </> : 
            <Link to='/signup'><Button>SignUp</Button></Link>
          }
        </Header>
      </div>
    );
  }

}

export default HeaderContainer;
