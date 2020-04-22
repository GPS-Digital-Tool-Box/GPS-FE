import React, {Component} from 'react';

class LogIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  makeAndSendUser = (event) => {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password
    }
    this.props.logInUser(user)
  }

  render() {
    return (
      <div className="login-wrapper">
        <form 
          className="login-form"
          onSubmit={this.makeAndSendUser}>
          <h3>Please Log In</h3>
          <label>
            UserName
            <input
              name='userName' 
              type='text'
              value={this.state.userName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Password
            <input 
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInputChange} />
          </label>
          <input type='submit'/>
        </form>
        <p>or click Here to sing up!</p>
      </div>
    )
  };
};

export default LogIn;