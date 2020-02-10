import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router'
import SignUp from 'SignUp'
import Home from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'

class App extends Component {

  renderProfileCont = (routerProps) => {
    console.log(routerProps)
  }

  renderDestinationCont = (routerProps) => {
    console.log(routerProps)
  }

  render() {

    return (
      <div>
       <Switch>
        <Header />
        <DropDown />
        <Route exact path='/' component={ Home } />
        <Route path='/profile/:id' render={ this.renderProfileCont } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/:destination' render={ this.renderDestinationCont } />
       </Switch>
      </div>
    )
  }
}


export default App;
