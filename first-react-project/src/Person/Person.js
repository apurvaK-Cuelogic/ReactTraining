import React from 'react';
var person = (props) =>{
    return(
    <div className="person">
        <h1>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        {/* {props.children}  */}
    </div>
    );
}
export default person;