import React from 'react';

const InputQuote = (props) => {
    return(
        <div className="noteTextArea">
            <label htmlFor={props.name} className="visuallyHidden">Enter your quotes here</label>
            <textarea  id={props.name} name={props.name} onChange={props.changeHandler} placeholder = "|"/>    
        </div>
    )
}

export default InputQuote;
