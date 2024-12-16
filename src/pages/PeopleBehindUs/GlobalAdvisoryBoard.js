import React from "react";
// import Peoples from "../../assets/images/people/Laye.png";
import Dummy from "../../assets/images/people/Dummy.jpg";
// import KaranSingh from "../../assets/images/people/Dr.Karan-Singh.jpg";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './PeopleBehindUs.css'
import Col from "react-bootstrap/Col";



export default function GlobalAdvisoryBoard() {
  return (

    <Row className="mt-5">
      {/* <Col sm={12} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={Dummy} />
          <Card.Body className="pb-0">
            <Card.Title>Dr. Karan Singh</Card.Title>
            <Card.Text className="m-0">Ex. Member of Parliament </Card.Text>
          </Card.Body>
        </Card>
      </Col> */}

      <Col sm={12} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={Dummy} />
          <Card.Body className="pb-0">
            <Card.Title>Adv. Rajnish Chaudhary</Card.Title>
            <Card.Text className="m-0">Advocate, (USA)</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* <Col sm={12} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={Dummy} />
          <Card.Body className="pb-0">
            <Card.Title>Banish Dhar</Card.Title>
            <Card.Text className="m-0">Global Strategic Advisor </Card.Text>
          </Card.Body>
        </Card>
      </Col> */}

      <Col sm={12} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={Dummy} />
          <Card.Body className="pb-0">
            <Card.Title>Sunil Anand</Card.Title>
            <Card.Text className="m-0">USA</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* New add here */}
      <Col className="mt-2" sm={12} md={3}>
        <Card className="box-sdow">
          <Card.Img variant="top" src={Dummy} />
          <Card.Body className="pb-0">
            <Card.Title>Vipula Shrivastav</Card.Title>
            <Card.Text className="m-0">Policy Advisory, DEIA Expert (London)</Card.Text>
          </Card.Body>
        </Card>
      </Col>

    </Row>
  )
}