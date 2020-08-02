import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";


import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Footer from "./component/footer";


import Image from 'react-bootstrap/Image';

import "./App.css"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <div className="row">
            <div className="col 1"></div>
            <div className="col 10">
              <h1>Travis Lovingood</h1>
              <h4>Web Developer</h4> 
            </div>
            <div className="col 1"></div> 
          </div>
    
            
             <hr />

          <div ClassName= "card">
            <li><Link to="/">About </Link></li>
            <li><Link to="/portfolio">Portfolio </Link></li>
            <li><Link to="/contact">Contact </Link></li>
          </div>  
          <hr />



          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>

        <hr />

           <Footer/>

       
      </HashRouter>
    );
  }
}

const About = () => 


          <div className ="container">
            <div className="row">
              <div className="col s12"> 
                <div className="card">
                  <div className="card-action">          
                    <Image src="links/Me.jpeg" rounded alt="Picture of Travis"/>
                    <p>
                    I am a newly graduated web developer offering knowledge and experience in various programming languages such as HTML, CSS, JQuery,
                    JavaScript, and React. I respond to challenges by developing solutions, I am skilled in translating solutions into code as well as designing web
                    applications for desktop, phone, and mobile app users. Please check out my portfolio and my links.
                    </p>
                  </div>
                  <div className="card-action">
                    <li><a href="links/resume.docx">Resume </a></li>
                    <li><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn </a></li>
                    <li><a href="https://github.com/TravisLovingood">Github</a></li>
                  </div> 
                </div>
              </div>    
            </div>
          </div> 




export default App;