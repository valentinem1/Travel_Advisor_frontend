import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import SignUp from './SignUp'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import Header from './Header.jsx'
import DropDown from './DropDown.jsx'


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
           <Route path='/' component={ HomeContainer } />
           <Route path='/profile/:id' render={ this.renderProfileCont } />
           <Route path='/:destination' render={ this.renderDestinationCont } />
           <Route path='/signup' component={ SignUp } />
        </Switch>

      </div>
    )
  }
}


export default withRouter(App);
