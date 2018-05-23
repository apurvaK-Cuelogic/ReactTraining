import React from 'react'
import './CharComponent.css'
const char = (props) => {
    return (
        <div className="charComponent">
            <p onClick={props.click}>{props.char}</p>
        </div>
    );
}

export default char;