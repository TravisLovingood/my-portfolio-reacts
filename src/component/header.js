import React from "react";
import Nav from "./nav";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function header() {
  return (
    <Container>  
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <h1><strong> Travis Lovingood </strong></h1>
            </Col>
          </Row>
          <Nav />      
          <Row>
            <Col></Col>
            <Col xs={12}>
              <h3><strong> Front-End Web Developer </strong></h3>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row> 
    </Container>     
  )
};
 
export default header;