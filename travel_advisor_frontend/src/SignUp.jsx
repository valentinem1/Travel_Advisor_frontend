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

  // creating new user and giving it a new token. 
  // did fetch here for re-routing to home "/" due to App.js not knowing about routerProps.
  handleSubmit=(evt)=>{
    evt.preventDefault()
    fetch('http://localhost:4000/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(newUser => {
      console.log(newUser)
      if (!newUser.error) {
        localStorage.setItem("token", newUser.token)
        // invoking createNewUser coming from App.js as callback functionwith the newUser instance as an argument to set the state in App.js.
        this.props.createNewUser(newUser)
        
        // coming from App.js to re-route to home "/" after creating user.
        this.props.routerProps.history.push("/")
        
      }
    })
  }

  render() {

    // console.log(this.props)

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
                  name="password"
                  value={this.state.password}
                  onChange={this.handleAllChange}
                  />
                <input type="submit" value="submit"/>
                </form>
    );
  }
}

export default SignUp;
