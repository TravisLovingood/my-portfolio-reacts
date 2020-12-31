import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'

function Projects() {
  return (
    <Container fluid>
      <hr />
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h1><strong>Projects</strong></h1>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>    
        <Col></Col>
        <Col md={10}>
          <CardColumns>
{/* Scheduler */}
            <Card className="p-3">
              <Card.Img variant="top" src="links/scheduler.PNG" alt="Work Day scheduler Screenshot" rounded fluid />               
              <Card.Body>
                <Card.Title>
                  <h3><strong>Scheduler</strong></h3>
                </Card.Title>
                <Card.Text>
                  <p>My app, Work day scheduler, displays both the time and date using Moment.js. The current time is 
                  highlighted red while the approaching time is highlighted green. As the day advances the 
                  red area advances. I also used Local-storage to handle saved appointments and notes that 
                  the user saves.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://travislovingood.github.io/Day-Planner/"><h4>See Site</h4></a>
                <a href="https://github.com/TravisLovingood/Day-Planner"><h4>See Repo</h4></a>               
              </Card.Footer>
            </Card>
{/* Please Take A Note */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>PleaseTakeANote</strong></h3>
                </Card.Title>
                <Card.Img variant="top" src="links/PleaseTakeANote.PNG" alt="Please Take A Note Screenshot" rounded fluid /> 
                <Card.Text>
                  <p>"Please Take A Note" is designed to help users get organized. Users can add 
                    notes to a database by creating a label, adding a discriptive body, and then save them using Express (for a single page deployment solution). The application uses UUID to generate random 
                    user ID data for security and deployed on Heroku, for easy access.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://please-take-a-note.herokuapp.com/"><h4>See Site</h4></a>
                <a href="https://github.com/TravisLovingood/PleaseTakeANote"><h4>See Repo</h4></a>           
              </Card.Footer>
            </Card>
{/* Carousel box */}
            <Card>
              <Carousel>
                <Carousel.Item>
                  <Image src="links/BNote1.PNG" alt="Beyond notes note" rounded fluid/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="links/BNote2.PNG" alt="Beyond notes note" rounded fluid/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="links/BNote3.PNG" alt="Beyond notes note" rounded fluid/>
                </Carousel.Item>
              </Carousel>
              <p>Original Art for the BeyondNotes App</p>
            </Card>
{/* Foodacation */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>Foodacation</strong></h3>
                </Card.Title>
                <Card.Img variant="top" src="links/Foodacation.PNG" alt="Food/Recipe Project Screenshot" rounded fluid /> 
                <Card.Text>
                  <p>My team (Malesha Jones, Thomas O’Connell, Dilshan Opatha and myself) wanted to solve a 
                    real working-class problem, “What's for dinner?” We learned to work with the data 
                    received from multiple server-side APIs to create the “Foodication” app. Just load up 
                    the page and decide to eat in or eat out.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://tomay91.github.io/Group-Project-1/index.html"><h4>See Site</h4></a>
                <a href="https://github.com/tomay91/Group-Project-1"><h4>See Repo</h4></a>             
              </Card.Footer>
            </Card>
{/* pic */}
            <Card>
              <Card.Img variant="top" src="links/Worms.PNG" alt="Picture of Travis" rounded fluid /> 
              <p>
                Original Art for the Bookworms App
              </p>
            </Card>
{/* yourweather */}
            <Card className="p-3">
              <Card.Img variant="top" src="links/Weather.PNG" alt="Your Weather Screenshot" rounded fluid />
              <Card.Body>
                <Card.Title>
                  <h3><strong>Your Weather!</strong></h3>
                </Card.Title>
                <Card.Text>
                  <p>This is a user friendly dashboard that runs using a third-party API to retrieve weather
                  forecast data (current and five day). The dashboard runs with dynamically updated HTML5 and 
                  CSS3 that uses localStorage to display any resent searched cities for easy research.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://travislovingood.github.io/Your-Weather-Site/"><h4>See Site</h4></a>
                <a href="https://github.com/TravisLovingood/Your-Weather-Site"><h4>See Repo</h4></a>                
              </Card.Footer>
            </Card>
{/* Password Generator */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>Password Generator</strong></h3>
                </Card.Title>
                <Card.Img variant="top" src="links/password.PNG" alt="Password Generator Screenshot" rounded fluid /> 
                <Card.Text>
                  <p>This password generator uses HTML5, CSS3, and Java Script to produce a completely random 
                    password with preselected user criteria. The user is first prompted to set their parameters 
                    such as length, lowercase, uppercase, numeric, etc. After all the questions are answered 
                    the user is then presented with a password they can copy and save.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://travislovingood.github.io/Password-Generator/"><h4>See Site</h4></a>
                <a href="https://github.com/TravisLovingood/Password-Generator"><h4>See Repo</h4></a>            
              </Card.Footer>
            </Card>
          </CardColumns>
        </Col>
        <Col></Col>
      </Row>
      <hr />
{/* Reacts Projects */}
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h1><strong> React Projects </strong></h1>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>    
        <Col></Col>
        <Col md={10}>
          <CardDeck>
{/* My Portfolio Reacts */}
            <Card className="p-3">
              <Card.Img variant="top" src="links/ReactPortfolio.PNG" alt="React Portfolio Image" rounded fluid />
              <Card.Body>
                <Card.Title>
                  <h3><strong>My Portfolio Reacts</strong></h3>
                </Card.Title>
                <Card.Text>
                  <p>
                  Constructing this portfolio was my first time using React. I found that in addition to improving 
                  the user experience, React also increased my workflow by breaking up the interface into pages and 
                  components. One notable addition was that I used React-Bootstrap for the style and Grid. Other 
                  technologies implemented include React-dom, React-router-dom, React-scripts, in addition to HTML, 
                  CSS, and embedded JavaScript. Your already on the site so don't forget to check out the repo.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://github.com/TravisLovingood/my-portfolio-reacts"><h4>See Repo</h4></a>
              </Card.Footer>
            </Card>
{/* Beyond Notes */}
            <Card className="p-3">
              <Card.Img variant="top" src="links/BeyondNotes.PNG" alt="Beyond Notes Screenshot" rounded fluid />
              <Card.Body>
                <Card.Title>
                  <h3><strong>Beyond Notes</strong></h3>
                </Card.Title>
                <Card.Text>
                  <p>Beyond Notes is a multi-tasking application consisting oa a day planner, calendar, events maker and all-around user-friendly organizational tool. All the 
                  user information is stored in a Mongo Database under the users registered profile. Beyond Notes was 
                  designed by Cheryl Daniels, Ashley Feese, Malesha Jones, and I (Travis Lovingood) using Cloudinary, 
                  Random Api, Restful Api, Marterialize, Moment, Node-sass, React-big-calendar, React-images-upload, 
                  React-tackle-box and more.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="http://beyondnotes.herokuapp.com/"><h4>See Site</h4></a>
                <a href="https://github.com/team4project3/BeyondNotes"><h4>See Repo</h4></a>
              </Card.Footer>
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
            <h3><li><Link to="/"> Back Home </Link></li></h3>
          </Card>    
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
};

export default Projects;
