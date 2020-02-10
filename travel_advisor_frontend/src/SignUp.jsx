import React, {Component} from 'react';

class SignUp extends Component {
  state = {
    username: "",
    bio:"",
    picture:"",
    password:""
  }

  handleAllChange=(evt)=>{
    let {value, name} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
  }

  render() {
    return (


        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"><b>Username</b></label>
          <input
            type="username"
            id="username"
            placeholder="Enter username"
            name="username"
            value={this.state.username}
            onChange={this.handleAllChange}
          />

            <label htmlFor="bio"><b>bio</b></label>
            <input
              type="bio"
              placeholder="Enter bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleAllChange}/>

              <label htmlFor="picture"><b>picture</b></label>
              <input
                type="picture"
                placeholder="upload picture"
                name="picture"
                value={this.state.picture}
                onChange={this.handleAllChange}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  value={this.state.password}
                  onChange={this.handleAllChange}
                  />
                <input type="submit" value="submit"/>
                </form>
    );
  }
}

export default SignUp;
