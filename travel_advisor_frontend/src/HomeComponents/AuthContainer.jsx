import React, { Component } from 'react';
import Login from './Login.jsx'


class AuthContainer extends Component {

  render() {
    return (
      <div>
        {localStorage.token ? 
          <div className="welcome-container">
            <p className="welcome-message">Welcome {this.props.user.username}!</p>
          </div>
          : <Login loginUser={this.props.loginUser} />}
      </div>
    );
  }

}

export default AuthContainer;
