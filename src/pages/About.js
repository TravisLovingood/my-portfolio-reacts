import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function About() {
  return (
    <Container fluid>  
      <hr />    
      <Row>
        <Col></Col>
        <Col md={8}>  
          <Card className="p-3">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Card.Text>
                    <h1><strong> About Me </strong></h1>
                  </Card.Text>
                  <hr />
                  <Card.Text><p>
                    I am a front end react web developer offering knowledge and experience in various programming languages 
                    such as HTML and React. Responding to challenges by learning solutions is something I take 
                    pride in. I enjoy creating interesting applications with different people and I am excited 
                    to join a collaborative, quality-driven team. Please check out my resume, my Projects, 
                    and my links.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5> Skills </h5>
                  </Card.Text>
                  <Card.Text>
                    <p>I have experience with HTML5, CSS3, Bootstrap, JavaScript, JQuery, Express.js, Node.js, 
                    Object-Oriented Programming (OOP), Express Handlebars, Database Theory, MySQL, Sequelize, 
                    MongoDB, MERN Stack, React.js, Heroku, Git, Command Line Interface (CLI) and Zoom.
                    </p>
                  </Card.Text>
                </Col> 
                <Col md={4}><Image src="links/me2.jpg" alt="Picture of Travis" rounded fluid/>
                <Card.Footer>
                  <li><h3><a href="links/TravisLovingoodResume.docx">Resume<span role="img" aria-label="resume">📝</span></a></h3></li>
                </Card.Footer></Col> 
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h3><li><Link to="/"> Back Home </Link></li></h3>
          </Card>    
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
};

export default About;
