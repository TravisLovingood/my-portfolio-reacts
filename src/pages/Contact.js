import React from "react";

import "../App.css"

const Contact = () => {
    return(     
        <div className="row">
            <div className="col s12"></div>
        <div className="row">
            <div className="container">
                <div className="col s12">
                    <div className="card">
                        <h4><strong>Please leave your email.</strong></h4>
                        <div className="card-action">
                            <div className="row">
                                <div className="input-field col s12">                                    
                                    <input id="email" type="email" className="validate"></input>
                                    <button type="submit" id="emailSaveButton">Submit</button>
                                </div>
                              </div>  
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        <div className="col s12"></div>
        </div>
    )
}

export default Contact; 
