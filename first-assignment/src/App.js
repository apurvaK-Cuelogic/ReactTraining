import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Apurva'
  };
  
  switchNameHandler = (newName) => {
    this.setState( {
      username: newName
    } )
  }
  userNameChangeHandler = ( event ) =>{
    this.setState( { 
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserOutput name={this.switchNameHandler.bind(this,'Appu')} />
        {/* <UserInput changed={this.userNameChangeHandler}/> */}
      </div>
    );
  }
}

export default App;
