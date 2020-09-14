import React from "react";

import "../App.css"

// import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel'

const Contact = () => {
    return(   
        <div className= "container"> 
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">   
                    <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="links/Foodacation.PNG"
                        alt="FoodacationImage"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="links/Worms.PNG"
                        alt="BookwormsImage"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="links/ohNode.PNG"
                        alt="ohNodeImage"
                        />

                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col s1"></div>
            </div>
       
            <div className="row">
                <div className="col s2"></div>
                <div className="col s8">
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
                <div className="col s2"></div> 
            </div>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <div className="card-action">
                        <li><a href="links/resume.docx"> Resume →</a></li>
                        <li><a href="https://github.com/TravisLovingood"> Github → </a></li>
                        <li><a href="https://travislovingood.github.io/Portfolio/">NonReactPorfolio → </a></li>
                        <li><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn → </a></li>
                    </div> 
                </div>
                <div className="col s1"></div> 
            </div>

        </div>
    )
}

export default Contact; 
