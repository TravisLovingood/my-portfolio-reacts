import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// pages

// components
// import portfolio from "./pages/portfolio";
// import Navbar from "./component/Navbar";
// import Card from "./component/Card";
// import Container from "./component/Container";
// import Hero from "./component/Hero";
// import Footer from "./component/Footer";
// style
import './App.css';

class App extends Component {
  render() {
    return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages/About">About</Link></li>
        </ul>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </div>
    </HashRouter>
  );
 }
}
const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
