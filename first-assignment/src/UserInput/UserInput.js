import React from 'react'
var userInput = ( props ) => {
    return(
        <div>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default userInput;