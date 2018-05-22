import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Apurva'
  };
  
  userNameChangeHandler = ( event ) =>{
    this.setState( { 
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserOutput name={this.state.username}/>
        <UserInput changed={this.userNameChangeHandler}/>
      </div>
    );
  }
}

export default App;
