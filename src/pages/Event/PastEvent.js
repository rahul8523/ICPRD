import React from "react";
import Evemts from "../../assets/images/Event/april07.png";
import Evemts1 from "../../assets/images/Event/March032023.png";
import Evemts2 from "../../assets/images/Event/april05.png";
import Evemts3 from "../../assets/images/Event/august22.png";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './Event.css'
import Col from "react-bootstrap/Col";



export default function PastEvent() {

  return (
         <>
            <Row>
              <Col sm={6} md={3} className="dflex">
                   <Card className="box-sdow">
                      <Card.Img variant="top" src={Evemts2} className="w-100"/>
                      <Card.Body className="pl-0 pt-2">
                        <Card.Title><a href="/india-@-75-azadi-ka-amrit-mahotsav"><strong>India @ 75 <br/> Azadi ka Amrit Mahotsav</strong></a></Card.Title>
                        <Card.Text className=""><strong>Venue -</strong>  Dr. Ambedkar International Centre, Janpath, New Delhi </Card.Text>
                       
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={3} className="dflex">
                  <Card className="box-sdow">
                      <Card.Img variant="top" src={Evemts3} className="w-100"/>
                      <Card.Body className="pl-0 pt-2">
                        <Card.Title><a href="/panch-pran-in-amrit-kaal"> <strong>Panch Pran in Amrit Kaal</strong></a></Card.Title>
                        <Card.Text className="pt-3"><strong>Venue -</strong> Press Club of India, New Delhi </Card.Text>
                    
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={3} className="dflex">
                  <Card className="box-sdow">
                      <Card.Img variant="top" src={Evemts1} className="w-100"/>
                      <Card.Body className="pl-0 pt-2">
                        <Card.Title><a href="/amrit-manthan-india-sustainable-transition"><strong>Amrit Manthan: India’s Sustainable Transition</strong></a></Card.Title>
                        <Card.Text><strong>Venue -</strong>  Press Club of India, New Delhi</Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                 
                  <Col sm={6} md={3} className="dflex">
                    <Card className="box-sdow">
                      <Card.Img variant="top" src={Evemts} className="w-100"/>
                      <Card.Body className="pl-0 pt-2">
                        <Card.Title><a href="/evolvement-and-transformation-towards-climate-resilient-india"><strong>Evolvement and Transformation Towards Climate Resilient India </strong></a></Card.Title>
                        <Card.Text><strong>Venue -</strong> World Trade Centre (WTC, Mumbai), Cuffe Parade, Mumbai</Card.Text>
                      
                      </Card.Body>
                    </Card>
                  </Col>
                  
                </Row>


      </>
  );
}
