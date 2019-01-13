import React from "react";

const Input = props => {
    //console.log(props.value);
    return (
        <div className="row">
            <div className="input-field col s6">
                <input
                    // className="form-control"
                    className="validate"
                    id={props.name}
                    name={props.name}
                    type={props.inputtype}
                    value={props.value}
                    onChange={props.handleChange}
                    // placeholder={props.placeholder}
                    // {...props}
                />
                <label htmlFor={props.name}>
                    {props.title}
                </label>
            </div>
        </div>
    );
};
export default Input;