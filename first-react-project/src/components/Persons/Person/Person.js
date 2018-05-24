import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props){
        super(props);
        console.log("[Person.js]In Constructor", props );
      }
    
      componentWillMount() {
        console.log("[Person.js] in Compo will mount");
      }
    
      componentDidMount() {
        console.log("[Person.js] in Compo did mount");
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
        
      }
      
    render () {
        console.log("[Person.js] in render");
        return(
            <Aux>
                <h1 onClick={this.props.click}>{this.props.name}</h1>
                <h3>Age: {this.props.age}</h3>
                <input ref={(inp) => { this.inputElement = inp }}
                       type="text" 
                       onChange={this.props.changed} 
                       value={this.props.name}/>
                {/* {props.children}  */}
            </Aux>
            );
    }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.person);