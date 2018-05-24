import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'
const cockpit = ( props ) => {
    // Dynamic styling
    const assignedClasses = [];
    let btnClass = classes.Button;
    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if(props.persons.length <= 2){
      assignedClasses.push( classes.red )
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold )             // ['red','bold']
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <p><button className={btnClass} onClick={props.clicked}>
                {props.showPersons ? <span>Hide Persons</span> : <span>Show Persons</span>}
            </button></p>
        </Aux>
    );
}

export default cockpit;