import React from "react";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function footer() {
    return (
        <Row>
            <Col></Col>
            <Col xs={10}>
                <h5><strong> © 2020 | Travis Lovingood </strong></h5>
            </Col>
            <Col></Col>
        </Row>      
    )
};
 
export default footer;
