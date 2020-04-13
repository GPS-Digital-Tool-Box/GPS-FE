import React from 'react';
import LogIn from '../LogIn/Login';

export const Landing = (props) => {
  return (
    <div>
      <div>
        <h2>Welcome to the GPS Digital Toolbox</h2>
      </div>
      <LogIn logInUser={props.logInUser}/>
    </div>
  )
}

export default Landing;

// make a log in component
  // move the login form from the header to the login component
    // make the login form reactive
// make a change loggedin function in app to switch loggedin state to true
  // pass as a prop to login component
// when login form is submitted have it call change loggedin prop func 
  // if user === mock username/pw changed loggedin to true (this is where OAuth will be triggered)
// set Routs to be if not loggedin to show Landing and if logged in show Home