import React, { Component } from 'react';
import { Link, HashRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./component/footer";
// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </HashRouter>
    );
  }
}

const Home = () =>
<Container fluid>
  <hr />
{/* About me */}
  <Row>
    <Col></Col>
    <Col md={8}>  
      <Card className="p-3">
        <Row>
          <Col></Col>
          <Col lg={4}><h1><strong>🙥 My Bio 🙧</strong></h1>
            <hr />
            <Image src="links/Me.jpeg" alt="Picture of Travis" roundedCircle fluid/>
          </Col>  
          <Col md={6}>
            <Card.Body>
              <Card.Text><p>
                I am a front end react web developer offering knowledge and experience in various programming languages.
                I enjoy creating interesting applications with different people and I am excited to join a collaborative, 
                quality-driven team. I have experience with HTML5, CSS3, Bootstrap, JavaScript, React, Heroku, Git, 
                Command Line Interface (CLI) and Zoom. 
                </p>
              </Card.Text>
              <Card.Text>
                <p>Please check out <a href="links/TravisLovingoodResume.docx"> my Resume </a>and <Link to="/projects">my Projects</Link>.</p>
              </Card.Text>
              <h4><li><Link to="/about">More About Me</Link></li></h4>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <hr />
{/* Projects */}
  <Row>
    <Col></Col>
    <Col md={4}>
      <Card>
        <h1><strong>🙤 Projects 🙦</strong></h1>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <Row>    
    <Col></Col>
    <Col md={10}>
      <CardDeck>
{/* Please Take A Note */}
        <Card className="p-3">
          <Card.Body>
            <Card.Title>
              <h3><strong>PleaseTakeANote</strong></h3>
            </Card.Title>
            <Card.Img variant="top" src="links/notetaker2.PNG" alt="Please Take A Note Screenshot" rounded fluid /> 
            <Card.Text>
              <p>"Please Take A Note" designed to help a user get things organized. Users can add a 
              notes to a database by creating a title, adding body, and then saving them using Express 
              (for a single page deployment solution). The application uses uuid to generate random 
              user id data for securty and has been deployed on Heroku, for easy access!</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://please-take-a-note.herokuapp.com/"><h4>See Site</h4></a>
            <a href="https://github.com/TravisLovingood/PleaseTakeANote"><h4>See Repo</h4></a>           
          </Card.Footer>
        </Card>
{/* Beyond Notes */}
        <Card className="p-3">
          <Card.Body>
            <Card.Title>
              <h3><strong>Beyond Notes</strong></h3>
            </Card.Title>
            <Card.Img variant="top" src="links/BeyondNotes2.PNG" alt="Beyond Notes Screenshot" rounded fluid />
            <Card.Text>
              <p>Beyond Notes is a day planner, calendar, contact list, image Uploader, Good Quote giver, 
              Event List Maker and a all-around user organizational tool. The application was designed by Cheryl 
              Daniels, Ashley Feese, Malesha Jones, and I (Travis Lovingood). The tools used were React, Marterialize, 
              Moment, and much more.
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://tomay91.github.io/Group-Project-1/index.html"><h4>See Site</h4></a>
            <a href="https://github.com/tomay91/Group-Project-1"><h4>See Repo</h4></a>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col md={4}>  
      <Card>
        <h4><li><Link to="/projects">More Projects</Link></li></h4>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <hr />
{/* Contacts */}
  <Row>
    <Col></Col>
    <Col md={4}>
      <Card>
        <h1><strong>🙥 Contact 🙧</strong></h1>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col md={6}>  
      <Card className="p-3">
        <li><h3><span role="img" aria-label="phone">📞</span>:(919)637-5843</h3></li>
        <li><h3><span role="img" aria-label="email">📫</span>:tclovingood01@gmail</h3></li>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col md={4}>  
      <Card>
        <h4><li><Link to="/contact">More Contacts</Link></li></h4>
      </Card>
    </Col>
    <Col></Col>
  </Row>  
</Container>

export default App;

