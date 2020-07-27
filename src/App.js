import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// pages
import About from "./pages/About";
import portfolio from "./pages/portfolio";
// components
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import Container from "./component/Container";
import Col from "./component/Col";
import Hero from "./component/Hero";
import Row from "./component/Row";
import Footer from "./component/Footer";
// style
import './App.css';

class App extends Component {
  render() {
    return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages/portfolio">portfolio</Link></li>
        </ul>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={portfolio} />
      </div>
    </HashRouter>
  );
 }
}
const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
