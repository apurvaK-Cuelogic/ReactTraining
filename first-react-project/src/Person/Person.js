import React from 'react';
import classes from './Person.css';
var person = (props) =>{
    return(
    <div className={classes.person}>
        <h1 onClick={props.click}>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <input type="text" onChange={props.changed} value={props.name}/>
        {/* {props.children}  */}
    </div>
    );
}
export default person;