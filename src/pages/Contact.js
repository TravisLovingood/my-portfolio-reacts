import React from "react";

import "../App.css"
  
// Bootstrap stuff
// import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Contact = () => {
    return( 
        <Container fluid>   
        <Row>
            <Col></Col>
            <Col xs={10}><h1><strong>🙥 Contact 🙧</strong></h1></Col>
            <Col></Col>
        </Row>

    <hr />

        <Row>
            <Col></Col>
            <Col xs={8}>  
                <Card>
                    <Card.Header>
                        <h3><strong>🙤 Direct Contacts 🙦</strong></h3>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <li><h3><span role="img" aria-label="phone">📞</span>:(919)637-5843</h3></li>
                            <li><h3><span role="img" aria-label="email">📫</span>:tclovingood01@gmail</h3></li>
                            <li><h3><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn<img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px"></img></a></h3></li>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
            <Col></Col>
        </Row>

    <hr />

        <Row>
            <Col></Col>
            <Col xs={8}>  
                <Card>
                    <Card.Header>
                        <h3><strong>🙥 Online Materials 🙧</strong></h3>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <li><h3><a href="links/resume.docx">Resume<span role="img" aria-label="resume">📝</span></a></h3></li>                       
                            <li><h3><a href="https://travislovingood.github.io/Portfolio/">Older<span role="img" aria-label="nonReact">📂</span>Porfolio</a></h3></li>
                            <li><h3><a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px"></img>Github</a></h3></li>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>


    </Container>

        // <div className= "container fluid"> 

        //     <div className="row">
        //         <div className="col s1"></div>
        //         <div className="col s10" >  
        //             <h1><strong>Contact Me!</strong></h1>
        //         </div>
        //         <div className="col s1"></div>
        //     </div>

        //     <hr />

        //     <div className="row">
        //         <div className="col s1"></div> 
        //        <div className=" col s10 b-flex">  
        //             <div className="card">
        //                 <h3><strong>Direct Contacts</strong></h3>
        //                     <hr />
        //                 <div className="card-action">                           
        //                     <li><h3><span role="img" aria-label="phone">📞</span>:(919)637-5843</h3></li>
        //                     <li><h3><span role="img" aria-label="email">📫</span>:tclovingood01@gmail</h3></li>
        //                 </div> 
        //             </div>
        //          </div>
        //         <div className="col s1"></div>
        //     </div>

        //     <hr />

        //     <div className="row">
        //         <div className="col s1"></div>
        //         <div className="col s10" >  
        //             <div className="card">
        //             <h3><strong>Online Materials</strong></h3>
        //                 <hr />
        //                 <div className="card-action">                                
        //                     <li><h3><a href="links/resume.docx"><span role="img" aria-label="resume">📝</span>Resume</a></h3></li>                       
        //                     <li><h3><a href="https://travislovingood.github.io/Portfolio/"><span role="img" aria-label="nonReact">📂</span>NonReactPorfolio </a></h3></li>
        //                     <li><h3><a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px"></img> Github </a></h3></li>
        //                     <li><h3><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/"> <img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px"></img>LinkedIn </a></h3></li>
        //                 </div> 
        //             </div>
        //         </div> 
        //         <div className="col s1" ></div>

        //     </div>

        // </div>

    )
}

export default Contact; 