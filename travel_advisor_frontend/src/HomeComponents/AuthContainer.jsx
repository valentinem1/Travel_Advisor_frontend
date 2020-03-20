import React, { Component } from 'react';
import Login from './Login.jsx'
class AuthContainer extends Component {

  render() {
    return (
      <div>
        {localStorage.token ? <div className="loginForm">Welcome!</div>: <Login loginUser={this.props.loginUser} />}
        
      </div>
    );
  }

}

export default AuthContainer;
