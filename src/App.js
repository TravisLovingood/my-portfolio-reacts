import React, { Component } from 'react';
import { Link, HashRouter, Route } from "react-router-dom";

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
  
        <Nav/>

<hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

<hr />

        <Nav/>
        <Footer/>

      </HashRouter>
      
    );
  }
}



const Home = () =>


<Container fluid> 

  <Row>
    <Col></Col>
    <Col xs={10}><h1><strong>🙥 Front End Web Developer 🙧</strong></h1></Col>
    <Col></Col>
  </Row>

<hr />

  <Row>
    <Col></Col>
    <Col xs={10}>  
      <Card>
        <Row>
          <Col></Col>
          <Col xs={3}>
            <Carousel>
              <Carousel.Item>
                <Image src="links/Me.jpeg" alt="Picture of Travis" roundedCircle fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="links/Me.jpeg" alt="Picture of Travis" roundedCircle fluid/>
              </Carousel.Item>
            </Carousel>
          </Col>  
          <Col xs={7}>
            <Card.Body>
              <Card.Text>
                <p>
                I am a newly graduated web developer offering knowledge and experience in various programming languages such as HTML, CSS, JQuery,
                JavaScript, and React. I respond to challenges by developing solutions, I am skilled in translating solutions into code as well as designing web
                applications for desktop, phone, and mobile app users. Please check out my Projects and my links.
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
        <Card.Footer>
          <h4><li><Link to="/about">More About Me</Link></li></h4>
        </Card.Footer>
      </Card>
      </Col>
      <Col></Col>
  </Row>

  <Row>
    <Col></Col>
    <Col xs={10}><h1><strong>🙥 Projects 🙧</strong></h1></Col>
    <Col></Col>
  </Row>

  <hr />


<Row>
  <Col></Col>
  <Col xs={10}>  
    <Card>
      <Row>
        <Col></Col>
        <Col xs={3}>
Body
        </Col>
        <Col></Col>
      </Row>
      <Card.Footer>
        <h4><li><Link to="/projects">More Projects</Link></li></h4>
      </Card.Footer>
    </Card>
    </Col>
    <Col></Col>
</Row>


<hr />

  <Row>
    <Col></Col>
    <Col xs={10}><h1><strong>🙥 Contact 🙧</strong></h1></Col>
    <Col></Col>
  </Row>

<hr />

  <Row>
    <Col></Col>
    <Col xs={10}>  
      <Card>
        <Row>
          <Col></Col>
          <Col xs={3}>
Body
          </Col>
          <Col></Col>
        </Row>
        <Card.Footer>
          <h4><li><Link to="/contact">More Contacts</Link></li></h4>
        </Card.Footer>
      </Card>
      </Col>
      <Col></Col>
  </Row>


</Container>

export default App;

