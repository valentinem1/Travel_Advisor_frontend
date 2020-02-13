import React, { Component } from 'react';
import {Link} from "react-router-dom"



class HeaderContainer extends Component {

  logOutUser = () => {
    localStorage.clear()
    this.props.historyProps.history.push("/")
  }

  render() {
    // console.log(this.props)
    return (

      <div>
     <div className="ui inverted segment">
         <div className="ui inverted secondary pointing menu">
               <Link to="/"><div  className="ui inverted button">
                  Home
                   </div></Link>
              {localStorage.token ? <div><Link to="/profile"><div className="ui inverted button">
                  Profile
               </div></Link> <button onClick={this.logOutUser} className="ui inverted button">Log Out</button> </div> : <Link to='/signup'><div  className="ui inverted button">
                  SignUp
             </div></Link>}

        </div>
     </div>
 </div>
    );
  }

}

export default HeaderContainer;
