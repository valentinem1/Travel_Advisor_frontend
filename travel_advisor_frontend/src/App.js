import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import NotFound from './NotFound'
import Footer from './Footer'

class App extends Component {

  state={
    user: {},
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

    if(localStorage.token){
      fetch(`http://localhost:4000/persist`, {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if(data.token){
          this.setState({
              user: data.user
            })
          }
        })
      }
  }

  createNewUser = (newUser) => {
    this.setState({
      user: newUser.user,
      token: newUser.token
    })
  }

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
      if(!userData.error){
        localStorage.setItem("token", userData.token)
        this.setState({
          user: userData.user
        })
      }
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
    
    return (

      <div className="page-window">
          <HeaderContainer createNewUser={this.createNewUser} loginUser={this.loginUser} historyProps={this.props} />
          <hr className="header-separation"/>

        <Switch>
          <Route exact path='/' render={ () => <HomeContainer
          destinations={this.filterSearch()}
          search={this.state.search}
          updateSearchForm={this.updateSearchForm}
          routerProps={this.props}
          user={this.state.user}
          />} />
          <Route exact path='/profile' render={ (routerProps) => <ProfileContainer routerProps={routerProps} />} />
          <Route  path='/:name/:id' render={ (routerProps) => <ShowContainer user={this.state.user} routerProps={routerProps} /> }/>
          <Route component = {NotFound} />
        </Switch>

        <Footer />
      </div>

    )
  }

}


export default withRouter(App);
