import React from "react";
 
import "../App.css"

// import Image from 'react-bootstrap/Image'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
// import CardGroup from 'react-bootstrap/CardGroup'

function Protfolio() {
  return (

        <div className= "container"> 

          <div className="row">

            <div className="col s6">
              <div className="card">
                <h4><strong>Your Weather!</strong></h4>
                <div className="card-action">
                  <img src="links/Weather.PNG" alt="Your Weather Screenshot" width="200px" height="200px"className="z-depth-3"></img>
                </div>    
                <div className="card-action">
                  <p>This is a user friendly dashboard that runs using a third-party API <a href="https://openweathermap.org/">Openweathermap.org</a>to retrieve weather
                    forecast data (current and five day). The dashboard runs with dynamically updated HTML and CSS that uses `localStorage` 
                    to display any resent searched cities for easy research. 
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://travislovingood.github.io/Your-Weather-Site/"><span>See Site</span></a>
                  <a href="https://github.com/TravisLovingood/Your-Weather-Site"><span>See Repo</span></a>
                </div>
              </div>
            </div>


            <div className="col s6">
              <div className="card">
                <h4><strong>Scheduler</strong></h4>
                <div className="card-action">
                  <img src="links/scheduler.PNG" alt="Work Day scheduler Screenshot" width="200px" height="200px"className="z-depth-3"></img>
                </div>                            
                <div className="card-action">
                  <p>My Work day scheduler displays the time and date using Moment.js. The current time is highlighted red while the approaching time is highlighted green.
                    As the day advances the red area advances. I also used Local-storage to handle saved appointments and notes that the user saves.
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://travislovingood.github.io/Day-Planner/"><span>See Site</span></a>
                  <a href="https://github.com/TravisLovingood/Day-Planner"><span>See Repo</span></a>
                </div>
              </div>
            </div> 

          </div>

          <div className="row">


            <div className="col s12">
              <div className="card">
                <h4><strong>Foodacation</strong></h4>
                <div className="card-action">
                  <img src="links/Foodacation.PNG" alt="Food/Recipe Project Screenshot" width="300px" height="300px" className="z-depth-3"></img>
                </div>
                <div className="card-action">
                  <p>My team (Malesha Jones, Thomas O’Connell, Dilshan Opatha and myself) wanted to solve a real working-className problem, “What's for dinner?” We
                    learned to work with the data received from multiple server-side APIs to create the “Foodication” app. Just load up the page and decide to eat 
                    in or eat out.
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://tomay91.github.io/Group-Project-1/index.html"><span>See Site</span></a>
                  <a href="https://github.com/tomay91/Group-Project-1"><span>See Repo</span></a>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            
            <div className="col s6">
              <div className="card">
                <h4><strong>Password Generator</strong></h4>
                <div className="card-action">
                  <img src="links/password.PNG" alt="Password Generator Screenshot" width="200px" height="200px"className="z-depth-3"></img>
                </div>    
                <div className="card-action">
                  <p>This password generator uses html, css, and javascript to produce a completely random password with preselected user criteria. The user is first
                  prompted to set their parameters such as length, lowercase, uppercase, numeric, etc. After all the questions are answered the user is then presented
                  with a password they can copy and save.
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://travislovingood.github.io/Password-Generator/"><span>See Site</span></a>
                  <a href="https://github.com/TravisLovingood/Password-Generator"><span>See Repo</span></a>
                </div>
              </div>
            </div>

            <div className="col s6">
              <div className="card">
                <h4><strong>Please Take A Note</strong></h4>
                <div className="card-action">
                  <img src="links/PleaseTakeANote.PNG" alt=" Screenshot" width="200px" height="200px"className="z-depth-3"></img>
                </div>    
                <div className="card-action">
                  <p>"Please Take A Note" designed to help a user get things organized. Users can add a notes to a database by creating a title, adding body, and then saving
                  them using Express (for a single page deployment solution). The application uses uuid to generate random user id data for securty and has been deployed
                  on Heroku, for easy access!
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://please-take-a-note.herokuapp.com/"><span>See Site</span></a>
                  <a href="https://github.com/TravisLovingood/PleaseTakeANote"><span>See Repo</span></a>
                </div>
              </div>
            </div>         

          </div>

        </div>

  )
};

export default Protfolio;

// <CardColumns>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title that wraps to a new line</Card.Title>
//       <Card.Text>
//         This is a longer card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card className="p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card bg="primary" text="white" className="text-center p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card className="text-center">
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card>
//     <Card.Img src="holder.js/100px160" />
//   </Card>
//   <Card className="text-right">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </CardColumns>