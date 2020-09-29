import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Contact = () => {
    return( 
        <Container fluid>  
            <hr />
            <Row>
                <Col></Col>
                <Col md={4}>
                    <Card>
                        <h1><strong>🙥 Contact 🙧</strong></h1>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <hr />
            <Row>    
                <Col></Col>
                <Col md={10}>
                    <CardDeck>
                        <Card className="p-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><strong>🙤 Direct Contacts 🙦</strong></h3>
                                </Card.Title>
                                <hr />
                                <Card.Text>
                                    <li><h3><span role="img" aria-label="phone">📞</span>(919)637-5843</h3></li>
                                    <li><h3><span role="img" aria-label="email">📫</span>tclovingood01@gmail</h3></li>
                                    <li><h3><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn<img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px"></img></a></h3></li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Image src="links/me3.PNG" alt="Picture of Travis" rounded fluid/>            
                        <Card className="p-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><strong>🙤 Online Materials 🙦</strong></h3>
                                </Card.Title>
                                <hr />
                                <Card.Text>
                                <li><h3><a href="links/TravisLovingoodResume.docx">Resume<span role="img" aria-label="resume">📝</span></a></h3></li>                       
                                <li><h3><a href="https://travislovingood.github.io/Portfolio/">Older<span role="img" aria-label="nonReact">📂</span>Porfolio</a></h3></li>
                                <li><h3><a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px"></img>Github</a></h3></li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
                <Col></Col>
            </Row>
            <hr />
            <Row>
                <Col></Col>
                <Col md={4}>
                    <Card>
                        <h3><li><Link to="/">🙤 Back Home 🙦</Link></li></h3>
                    </Card>    
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Contact; 