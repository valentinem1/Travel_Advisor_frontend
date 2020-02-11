import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
    state={
        username: "",
        password: ""
    }

    handleAllChange = (evt) => {
        let {name, value} = evt.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.loginUser(this.state)

        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (

            <form className= "loginForm" onSubmit={this.handleSubmit}>
                <label htmlFor="username"><b>Username</b></label>
                <br/>
                <input className = "login"
                    type="username"
                    id="username"
                    placeholder="Enter username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleAllChange}
                />
              <br/>
                <label htmlFor="psw"><b>Password</b></label>
                <br/>
                <input className = "login"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleAllChange}
                  />
                <br/>
                <input type="submit" value="submit"/>
            </form>
        
        )
    }
}

export default Login;
