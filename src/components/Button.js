import React from 'react';

const Button = (props) => {
    return (

            <button onClick={() => props.buttonHandler(props.buttonLabel)} >{props.buttonLabel}</button>

    );
};

export default Button;