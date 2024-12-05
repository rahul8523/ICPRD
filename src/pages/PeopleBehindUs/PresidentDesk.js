import React from "react";
// import Peoples from "../../assets/images/people/Laye.png";
// import Dummy from "../../assets/images/people/Dummy.jpg";
// import KaranSingh from "../../assets/images/people/Dr.Karan-Singh.jpg";
import NationalImage from "../../assets/images/PresidentsDesk/PresidentImg.jpg";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './PeopleBehindUs.css'
import Col from "react-bootstrap/Col";



export default function PresidentDesk() {
    return (

        <Row className="mt-5">
         <Col sm={6} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={NationalImage} />
          <Card.Body className="pb-0">
            <Card.Title>Kr. Rajiv Ranjan Singh</Card.Title>
            <Card.Text className="m-0">Founder President</Card.Text>
          </Card.Body>
        </Card>
      </Col>
        {/* <Col sm={12} md={3}>
        <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Dr. Karan Singh</Card.Title>
              <Card.Text className="m-0">Ex. Member of Parliament </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
        
      </Row>
)
}