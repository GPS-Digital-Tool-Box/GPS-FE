import React, { Component } from 'react';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      modules: ['Journal']
    }
  }
  
  render() {
    return (
      <div>
        <h2>This is the home page</h2>
      </div>
    )
  }  
}

export default Home;
