import React, { Component } from 'react';


class AuthContainer extends Component {

  render() {
    return (
      <div>
        {localStorage.token ? 
          <div className="welcome-container">
            <p className="welcome-message">Welcome {this.props.user.username}!</p>
          </div>
          : null}
      </div>
    );
  }

}

export default AuthContainer;
