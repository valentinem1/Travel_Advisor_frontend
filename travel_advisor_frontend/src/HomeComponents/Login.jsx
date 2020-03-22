import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

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
            <Form className="loginForm">
                <Form.Field onSubmit={this.handleSubmit}>
                    <label className="login-username-label">Username</label>
                    <Form.Input
                        type="text"
                        placeholder="Enter username"
                        className="login-input"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleAllChange}
                    />
                    <label className="login-username-label">Password</label>
                    <Form.Input 
                        type="password"
                        placeholder="Enter Password"
                        className="login-input"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleAllChange}
                    />
                </Form.Field>
                <Form.Field className="login-submit-btn" color="black" control={Button}>Sign in</Form.Field>
            </Form>
        
        )
    }
}

export default Login;
