import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props){
        super(props);
        console.log("[Persons.js]In Constructor", props );
      }
    
      componentWillMount() {
        console.log("[Persons.js] in Compo will mount");
      }
    
      componentDidMount() {
        console.log("[Persons.js] in Compo did mount");
      }
    render () {
        console.log("[Persons.js] in render");
        return this.props.persons.map((person,index) => {
            return <Person name={person.name} 
                           age={person.age}
                           click={this.props.clicked.bind(this,index)}
                           changed={(event) => this.props.changed(event,person.id)}
                           key={person.id}
                           position={index} />
          });
    }
}
export default Persons;