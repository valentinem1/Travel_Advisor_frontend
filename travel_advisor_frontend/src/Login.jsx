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
            <div>
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
            </div>
        )
    }
}

export default Login;