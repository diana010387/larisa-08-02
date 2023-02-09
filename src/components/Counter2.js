import React from 'react';
import Button from "./Button";

const Counter2 = (props) => {
    return (
        <div>
            <Button buttonLabel='-' buttonHandler={props.changeCount2}/>
            {props.count2}
            <Button buttonLabel='+' buttonHandler={props.changeCount2}/>
        </div>
    );
};

export default Counter2;