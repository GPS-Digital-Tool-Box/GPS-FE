import React, { Component } from 'react';
import {Header} from '../Header/Header';
import Home from '../Home/Home';
import Journal from '../Journal/Journal';
import SafetyPlan from '../SafetyPlan/SafetyPlan';
import { Switch, Route } from 'react-router-dom';
import Landing  from '../Landing/Landing';
import {MockUser} from './mockUser.js'

class App extends Component{
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      mockUser: MockUser,
    }
  }

  logInUser = (user) => {
    //This is where we should kick off the OAuth probably
    // it will then listen for reply to OAuth, set User Data
      // locally and change isLoggedIn to True
    console.log('from logInUser:', user)
    const {userName, password } = this.state.mockUser;
    console.log(typeof userName, password)
    if (user.userName === userName && user.password === password) {
      console.log('users are the same')
      this.setState({
        isLoggedIn: true
      });
    }
  }

  pageToShow = () => {
    return this.state.isLoggedIn ? 
      <Home/> :
      <Landing 
        isLoggedIn={this.isLoggedIn} 
        logInUser={this.logInUser} />;
  }

  render() {
    console.log(this.user)
    return (
    <div className="App">
      <Route path='/' component={Header} />
      <Switch>
        <Route path='/home' exact component = { this.pageToShow } />
        <Route path='/journal' component={Journal} />
        <Route path='/safety_plan' component={SafetyPlan} />
      </Switch>
    </div>
  )}
}

export default App;
