import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:'Maxx',age:24},
      {name:'Manu',age:28},
      {name:'Stephanie',age:27}
    ]
  };
  switchNamehandler = ( newName ) => {
    //console.log('Was clicked');
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello,welcome to react</h1>
        <p><button style={style} onClick={() => this.switchNamehandler('Maxalin!!')}>Switch Me</button></p>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNamehandler.bind(this, 'Max!!')}
                changed={this.nameChangedHandler}>Address: Pune</Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
      </div>
      //React.createElement('div',{ className:'App' },React.createElement('h1',null,'Hello, welcome to react'),React.createElement('h1',{ className:'header' },'Hello, welcome to react'))
    );
  }
}

export default App;
