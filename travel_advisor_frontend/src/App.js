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
    user: {},
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

  // setting the state with the newUser data coming from SignUp.js form
  // .user & .token coming from back end in UserController {user: UserSerializer(@user), token: @token}
  createNewUser = (newUser) => {
    this.setState({
      user: newUser.user,
      token: newUser.token
    })
  }

//Login
  loginUser = (user) => {
    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(userData => {
      // console.log(userData)
      if(!userData.error){
        localStorage.setItem("token", userData.token)
        this.setState({
          user: userData.user,
          token: userData.token
      })
      }
    })
  }// end of login user
// if the person is logged in or not

// persist
  persistLogInData() {
  //everytime a page is refresed this component gets rendered
  //so that the user does not get logged out
  if (localStorage.getItem("token")){
    let token = localStorage.getItem("token")
  fetch(`http://localhost:4000/persist`, {
    headers: {
       "Authorization": `bearer ${localStorage.token}`
     }
  })
  .then(r => r.json())
  .then((data) => {
    // console.log(data);
    // if the token from the user exists then set the token here
    if(data.token){
      localStorage.setItem("token", data.token)
      this.setState({
          user: data.user,
          token: data.token
        })// end of setState
    }// end of data if
  })
} //end of if
}// end of componentDidMount

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

    // console.log(this.state.token)
    // console.log(this.state.user)
    // console.log(this.state.destinations);
    return (

      <div>
           <HeaderContainer historyProps={this.props} />

        <Switch>
           <Route exact path='/' render={ () => <HomeContainer
           destinations={this.filterSearch()}
           loginUser={this.loginUser}
           search={this.state.search}
           updateSearchForm={this.updateSearchForm}
           historyProps={this.props}
           />} />
           <Route exact path='/profile' component={ ProfileContainer } />
           <Route exact path='/signup' render={ (routerProps) => <SignUp createNewUser={this.createNewUser} routerProps={routerProps} /> }/>
           <Route  path='/:name/:id' component={ ShowContainer } user={this.state.user} />
           <Route component = {NotFound} />
        </Switch>
      </div>

    )
  }

}


export default withRouter(App);
