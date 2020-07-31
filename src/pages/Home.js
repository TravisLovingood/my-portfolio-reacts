import React from "react";

// importing from react-bootstrap
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// style
import "./style.css";

const Home = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Travis Lovingood</h1>
        <p>
          Web Developer
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Home;