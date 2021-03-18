import React from "react";
import "./style.css"

function Form() {
    return (
<div className="blue">
        <form id="form">
            <div className="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="name" className="form-control">
                </input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" >
                </input>
            </div>
            <div className="form-group">
                <label >Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
        <button className="btn">Submit</button>
        </div>
        

    );
}

export default Form;