import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import SignUp from './SignUp'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import NotFound from './NotFound'
import DestinationCard from './HomeComponents/DestinationCard'


class App extends Component {

  state={
    users: {},
    token: "",
    destinations:[],
    search: ""
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

  renderDestination = (routerProps) => {
    console.log(routerProps)
    let destinationName = routerProps.match.params.name

    let foundDestination = this.state.destinations.find(destinationObj => destinationObj.name === destinationName)
    return (foundDestination ? <ShowContainer destination={foundDestination}/> : <NotFound/>)
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
    .then(userData => {
      // console.log(userData)
      if(!userData.error){
        localStorage.token = userData.token
      }
      this.setState({
        users: userData.user
      })
    })
  }

  updateSearchForm = (newValue) => {
    this.setState(prevState => {
      return {
        search: newValue
      }
    })
  }

  filterSearch = () => {
    let newArr = this.state.destinations.filter( destination => {
      let searchValue = this.state.search.toLowerCase()
      return destination.name.toLowerCase().includes(searchValue) || destination.trip_type.toLowerCase().includes(searchValue)
    })
    return newArr
  }

  render() {
    // console.log(this.state.users)
    // console.log(this.state.destinations);
    return (

      <div>
           <HeaderContainer />

        <Switch>
           <Route exact path='/' render={ () => <HomeContainer
           destinations={this.filterSearch()}
           loginUser={this.loginUser}
           search={this.state.search}
           updateSearchForm={this.updateSearchForm}
           />} />
           <Route exact path='/profile' component={ ProfileContainer } />
           <Route exact path='/signup' render={ (routerProps) => <SignUp createNewUser={this.createNewUser} routerProps={routerProps} /> }/>
           <Route  path='/:name' render={routerProps => this.renderDestination(routerProps)} />
           <Route component = {NotFound} />
        </Switch>
      </div>

    )
  }

}


export default withRouter(App);
