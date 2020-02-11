import React, { Component } from 'react';
import {Link} from "react-router-dom"



class HeaderContainer extends Component {

  render() {
    return (

      <div>
     <div className="ui inverted segment">
         <div className="ui inverted secondary pointing menu">
               <Link to="/"><div  className="ui inverted button">
                  Home
                   </div></Link>
               <Link to="/profile"><div className="ui inverted button">
                  Profile
               </div></Link>

              <Link to='/signup'><div  className="ui inverted button">
                  SignUp
             </div></Link>
        </div>
     </div>
 </div>
    );
  }

}

export default HeaderContainer;
