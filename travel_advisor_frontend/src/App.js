import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import SignUp from './SignUp'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import Header from './Header.jsx'
import DropDown from './DropDown.jsx'


class App extends Component {

  state={
    users: {},
    token: ""
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

  render() {
    console.log(this.state.users)
    return (

    
      <div>
           <Header />
           <DropDown />
           
        <Switch>
           <Route exact path='/' component={ HomeContainer } />
           <Route exact path='/profile' component={ ProfileContainer } />
           <Route exact path='/signup' render={ (routerProps) => <SignUp createNewUser={this.createNewUser} routerProps={routerProps} /> }/>
           <Route exact path='/:destination' render={ this.renderDestinationCont } />
        </Switch>
      </div>
      
    )
  }

}


export default App;
