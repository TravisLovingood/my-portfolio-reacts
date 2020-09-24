import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Header from "./component/header";
import Nav from "./component/nav";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./component/footer";

import "./App.css";

// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">

        <Header/>
          
        <div className="row">   
          <div className= "col s1"></div>
          <div className= "col s10">
            <Nav sticky="fixed" />
          </div>
          <div className= "col s1"></div>
        </div>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

        <hr />

        <Footer/>

      </HashRouter>
      
    );
  }
}



const Home = () =>

<Container fluid>

  <Row>
    <Col></Col>
    <Col xs={10}><h1><strong>Front End Web Developer</strong></h1></Col>
    <Col></Col>
  </Row>

<hr />

  <Row>
    <Col></Col>
    <Col xs={8}>
      <Carousel>
        <Carousel.Item>
          <Image src="links/Me.jpeg" alt="Picture of Travis" roundedCircle fluid/>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="links/Me.jpeg" alt="Picture of me 2" roundedCircle fluid/>
        </Carousel.Item>
      </Carousel>
    </Col>
    <Col></Col>
  </Row>

  <Row>
    <Col></Col>
    <Col xs={8}>  
      <Card>
        <Card.Body>
          <Card.Text>
            <p>
              Please check out my Projects and my links.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h4>
            <li><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/"><img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px"></img></a></li>
            <li><a href="links/resume.docx"> Resume </a></li>
            <li><a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px"></img></a></li>
          </h4>
        </Card.Footer>
      </Card>
    </Col>
    <Col></Col>
  </Row>

</Container>

export default App;

