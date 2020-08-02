import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";


import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Footer from "./component/footer";

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import "./App.css"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>

            <h1>Travis Lovingood</h1>     
             <h4>Web Developer</h4> 
             <hr />

          <div ClassName= "card">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/portfolio">Portfolio </Link></li>
            <li><Link to="/contact">Contact </Link></li>
          </div>  
          <hr />
          <Image src="links/Me.jpeg" roundedCircle alt="Picture of Travis"/>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>

        <hr />
        <Footer/>
      </HashRouter>
    );
  }
}

const Home = () => 
  <div>
    <Container>
      <div className="row">
        <div className="col s8"> 
          <div className="card indigo lighten-1">
            <div className="card-action">
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
    </Container>
    <div>

    </div>
  </div>

export default App;