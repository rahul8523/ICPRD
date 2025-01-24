import React from "react";
// import Peoples from "../../assets/images/people/Laye.png";
// import Dummy from "../../assets/images/people/Dummy.jpg";
// import KaranSingh from "../../assets/images/people/Dr.Karan-Singh.jpg";
import South from "../../assets/images/sothaf.png";
import UnitedK from "../../assets/images/Flag_of_the_United_Kingdom.svg";
import Usa from "../../assets/images/usa.svg";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './PeopleBehindUs.css'
import Col from "react-bootstrap/Col";



export default function GlobalTeamIcprd() {
    return (

        <Row className="mt-5 d-flex justify-content-center">
        <Col sm={12} md={2}>
        <Card className="box-sdow p-sm-0 px-5 pb-5">
            <Card.Img variant="top" src={Usa} style={{height:"100px"}}/>
            <Card.Body className="pb-0">
              <Card.Title>USA</Card.Title>
              {/* <Card.Text className="m-0">Ex. Member of Parliament </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={2}>
        <Card className="box-sdow p-sm-0 px-5 pb-5">
            <Card.Img variant="top" src={UnitedK} style={{height:"100px"}}/>
            <Card.Body className="pb-0">
              <Card.Title>UK</Card.Title>
              {/* <Card.Text className="m-0">Ex. Member of Parliament </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={2}>
        <Card className="box-sdow p-sm-0 pb-5 px-5">
            <Card.Img variant="top" src={South} style={{height:"100px"}}/>
            <Card.Body className="pb-0">
              <Card.Title>SOUTH AFRICA</Card.Title>
              {/* <Card.Text className="m-0">Ex. Member of Parliament </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
)
}