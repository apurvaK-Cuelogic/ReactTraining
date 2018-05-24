import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js]In Constructor", props );
    this.state = {
      persons: [
        { id: 'asa1',name:'Maxx',age:24},
        { id: 'asa2',name:'Manu',age:28},
        { id: 'asa3',name:'Stephanie',age:27}
      ],
      showPersons: false,
      toggleClicked:0
    };
  }

  componentWillMount() {
    console.log("[App.js] in Compo will mount");
  }

  componentDidMount() {
    console.log("[App.js] in Compo did mount");
  }
  // state = {
  //   persons: [
  //     { id: 'asa1',name:'Maxx',age:24},
  //     { id: 'asa2',name:'Manu',age:28},
  //     { id: 'asa3',name:'Stephanie',age:27}
  //   ],
  //   showPersons: false
  // };

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
    //setState runs asyn
    this.setState( ( prevState, props ) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1   
      }         
    });
  }
  render() {
    console.log("[App.js]Inside render()");
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <Cockpit appTitle={this.props.title}
                 persons={this.state.persons} 
                 showPersons={this.state.showPersons}
                 clicked={this.togglePersonsHandler}/>
        { persons}
      </Aux>
      //React.createElement('div',{ className:'App' },React.createElement('h1',null,'Hello, welcome to react'),React.createElement('h1',{ className:'header' },'Hello, welcome to react'))
    );
  }
}

export default withClass(App, classes.App);
