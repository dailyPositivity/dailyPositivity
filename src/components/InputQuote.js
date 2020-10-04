import React from 'react';

const InputQuote = (props) => {
    return(
        <div className="noteTextArea">
            <label htmlFor={props.name} className="visuallyHidden">Enter content for the entry</label>
            <textarea  id={props.name} name={props.name} placeholder="add your quote here" onChange={props.changeHandler}/>    
        </div>
    )
}

export default InputQuote;
