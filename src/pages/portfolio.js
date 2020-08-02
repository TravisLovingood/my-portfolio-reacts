import React from "react";

import Carousel from 'react-bootstrap/Carousel'

import "../App.css"

function Portfolio() {
    return (
          <div className= "container">
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="links/password.PNG"
                  alt="Password Generator Screenshot"
                />
                <Carousel.Caption>
                  <h3>Password Generator</h3>
                  <p>This password generator uses html, css, and javascript to produce a completely random password with preselected user criteria. The user is first
                    prompted to set their parameters such as length, lowercase, uppercase, numeric, etc. After all the questions are answered the user is then presented
                    with a password they can copy and save.
                  </p>
                  <a href="https://travislovingood.github.io/Password-Generator/"><span >See Site</span></a>
                  <a href="https://github.com/TravisLovingood/Password-Generator"><span >See Repo</span></a>
                </Carousel.Caption>
              </Carousel.Item>
    
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="links/Band.PNG"
                  alt="Band Website Screenshot"
                />
                <Carousel.Caption>
                  <h3>Drummer Profile</h3>
                  <p>My first major website on the surface looks very basic with the art being more on the technical side. Utilizing CSS styling and bootstrap to make 
                    a page that connects with three other pages using a navbar. I also added some interactive links and a form for entering information. The sticky 
                    footer was another neat element added to the application.
                  </p>
                  <a href="https://travislovingood.github.io/MockDrummerProfile/">See Site</a>
                  <a href="https://github.com/TravisLovingood/MockDrummerProfile/">See Repo</a>
                </Carousel.Caption>
              </Carousel.Item>
    
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="links/ohNode.PNG"
                  alt="Oh-Node-ReadMe Screenshot"
                />
                <Carousel.Caption>
                  <h3>Oh-Node-ReadMe</h3>
                  <p>To give a project creator more time to work on a project, I have made a command-line application that will allow for easy generation of a project 
                    README. This README will be populated with information about the app like how to use it, how to install it, how to report issues, and how to make
                    contributions.
                    </p>
                  <a href="https://github.com/TravisLovingood/Oh-node-readme">See Repo</a>  
                </Carousel.Caption>
              </Carousel.Item>
    
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="links/Weather.PNG"
                  alt="Your Weather Screenshot"
                />
                <Carousel.Caption>
                  <h3>Your Weather!</h3>
                  <p>This is a user friendly dashboard that runs using a third-party API <a href="https://openweathermap.org/">Openweathermap.org</a>to retrieve weather
                    forecast data (current and five day). This is a user friendly dashboard that runs featuring dynamically updated HTML and CSS that uses `localStorage` 
                    to display any resent searched cities.
                  </p>
                  <a href="https://travislovingood.github.io/Your-Weather-Site/">See Site</a>
                  <a href="https://github.com/TravisLovingood/Your-Weather-Site">See Repo</a>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="links/Foodacation.PNG"
                  alt="Foodacation Project Screenshot"
                />
                <Carousel.Caption>
                  <h3>Foodacation</h3>
                  <p>My team (Malesha Jones, Thomas O’Connell, Dilshan Opatha and myself) wanted to solves a real working-class problem, “What's for dinner?” We
                  learned to work with the data received from multiple server-side APIs to create the “Foodication” app. Just load up the page and decide to eat 
                  in or eat out.
                  </p>
                  <a href="https://tomay91.github.io/Group-Project-1/index.html">See Site</a>
                  <a href="https://github.com/tomay91/Group-Project-1">See Repo</a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>



    )
};

export default Portfolio;