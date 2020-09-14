import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Portfolio from './pages/Portfolio';
import ReactPortfolio from './pages/ReactPortfolio';
import Contact from './pages/Contact';
import Footer from "./component/footer";

import Image from 'react-bootstrap/Image';
import "./App.css"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">


          <div className="row">   
            <div className= "col s1"></div>
            <div className= "col s10">
              <div className="card">

                <div className="card-action">
                  <h1>Travis Lovingood</h1>
                  <p>Front End Web Developer</p>
                </div>

                <div className="card-action"> 
                  <h4> 
                  <li><Link to="/">AboutMe </Link></li>
                  <li><Link to="/portfolio">Portfolio </Link></li>
                  <li><Link to="/reactPortfolio">ReactPortfolio </Link></li>
                  <li><Link to="/contact">Contact </Link></li>
                  </h4>
                </div>

              </div>
            </div> 
            <div className= "col s1"></div>
          </div>

        <hr />

        <hr />

          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/reactPortfolio" component={ReactPortfolio} />
          <Route path="/contact" component={Contact} />

        <hr />


         
        <Footer/>

      </HashRouter>
      
    );
  }
}

const Home = () => 
  <div className="row">   
    <div className= "col s1"></div>
    <div className= "col s10">
      <div className="card">
        <div className="card-action">
          <h3>About Me</h3>
          <Image src="links/Me.jpeg" rounded alt="Picture of Travis"/>                 
          <p>I am a newly graduated web developer offering knowledge and experience in various programming languages such as HTML, CSS, JQuery,
            JavaScript, and React. I respond to challenges by developing solutions, I am skilled in translating solutions into code as well as designing web
            applications for desktop, phone, and mobile app users. Please check out my portfolio and my links.
          </p>
        </div>
        <div className="card-action">
          <li><a href="links/resume.docx"> Resume →</a></li>
          <li><a href="https://github.com/TravisLovingood"> Github → </a></li>
          <li><a href="https://travislovingood.github.io/Portfolio/">NonReactPorfolio → </a></li>
          <li><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn → </a></li>
        </div> 
      </div>
    </div> 
    <div className= "col s1"></div>
  </div>
  


export default App;