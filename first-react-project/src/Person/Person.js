import React from 'react';
var person = (props) =>{
    return(
    <div className="person">
        <h1 onClick={props.click}>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <input type="text" onChange={props.changed} />
        {/* {props.children}  */}
    </div>
    );
}
export default person;