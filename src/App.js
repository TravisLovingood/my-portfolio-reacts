import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";


import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Bio from './pages/Bio';
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

          <div ClassName= "card">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/bio">Bio </Link></li>
            <li><Link to="/portfolio">Portfolio </Link></li>
            <li><Link to="/contact">Contact </Link></li>
          </div>  
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/bio" component={Bio} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>

           
           
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
          <Image src="links/Me.jpeg" rounded alt="Picture of Travis"/>
        </div>
        <div className="card-action">
          <li><a href="links/resume.docx">Resume </a></li>
          <li><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/">LinkedIn </a></li>
          <li><a href="https://github.com/TravisLovingood">Github</a></li>
        </div> 
      </div>
    </div> 
    <div className= "col s1"></div>
  </div>

export default App;