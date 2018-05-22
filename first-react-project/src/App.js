import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:"Maxx",age:24},
      {name:"Manu",age:28}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello,welcome to react</h1>
        <p><button>Switch Me</button></p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Address: Pune</Person>
      </div>
      //React.createElement('div',{ className:'App' },React.createElement('h1',null,'Hello, welcome to react'),React.createElement('h1',{ className:'header' },'Hello, welcome to react'))
    );
  }
}

export default App;
