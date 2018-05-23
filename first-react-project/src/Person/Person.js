import React from 'react';
import Radium from 'radium';

var person = (props) =>{
    const style ={
        '@media (min-width:500px)':{
            width:'350px'
        }
    };
    return(
    <div className="person" style={style}>
        <h1 onClick={props.click}>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <input type="text" onChange={props.changed} value={props.name}/>
        {/* {props.children}  */}
    </div>
    );
}
export default Radium(person);