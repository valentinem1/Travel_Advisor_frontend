import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import SignUp from './SignUp'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import DropDown from './DropDown.jsx'


class App extends Component {

  state={
    users: {},
    token: "",
    destinations:[]
  }

  componentDidMount() {
    fetch(`http://localhost:4000/destinations`)
    .then(r => r.json())
    .then((destinations) => {
      this.setState({
        destinations
      })
    })
  }

  renderDestinationCont = (routerProps) => {
    console.log(routerProps)
  }

  // setting the state with the newUser data coming from SignUp.js form
  // .user & .token coming from back end in UserController {user: UserSerializer(@user), token: @token}
  createNewUser = (newUser) => {
    this.setState({
      users: newUser.user,
      token: newUser.token
    })
  }

  loginUser = (user) => {
    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(
        user
      )
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    // console.log(this.state.users)
    // console.log(this.state.destinations);
    return (

      <div>
           <HeaderContainer />
           <DropDown />

        <Switch>
           <Route exact path='/' render={ () => <HomeContainer destinations={this.state.destinations} loginUser={this.loginUser} />} />
           <Route exact path='/profile' component={ ProfileContainer } />
           <Route exact path='/signup' render={ (routerProps) => <SignUp createNewUser={this.createNewUser} routerProps={routerProps} /> }/>
           <Route exact path='/:destination' render={ this.renderDestinationCont } />
        </Switch>
      </div>

    )
  }

}


export default withRouter(App);
