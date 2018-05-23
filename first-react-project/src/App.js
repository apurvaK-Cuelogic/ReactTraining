import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'asa1',name:'Maxx',age:24},
      { id: 'asa2',name:'Manu',age:28},
      { id: 'asa3',name:'Stephanie',age:27}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    // ALTERNATIVE WAY const peson = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons; This will point to the original array.
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);  
    this.setState({persons: persons});
  }
  togglePersonsHandler =() =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person name={person.name} 
                           age={person.age}
                           click={this.deletePersonHandler.bind(this,index)}
                           changed={(event) => this.nameChangedHandler(event,person.id)}
                           key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello,welcome to react</h1>
        <p><button style={style} onClick={this.togglePersonsHandler}>
             {this.state.showPersons ? <span>Hide Persons</span> : <span>Show Persons</span>}
           </button>
        </p>  
        { persons}
      </div>
      //React.createElement('div',{ className:'App' },React.createElement('h1',null,'Hello, welcome to react'),React.createElement('h1',{ className:'header' },'Hello, welcome to react'))
    );
  }
}

export default App;
