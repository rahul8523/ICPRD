import React from "react";
// import Faculty1 from "../../assets/images/event-details/Faculty/Rajeev-Mehrotra.jpg";
// import Faculty2 from "../../assets/images/event-details/Faculty/B-letter.jpg";
// import Faculty3 from "../../assets/images/event-details/Faculty/Rama-Raju.jpg";
// import Faculty4 from "../../assets/images/event-details/Faculty/Harsh-M.A.(Global-Thought)-University-of-Columbia.jpg";
// import Faculty5 from "../../assets/images/event-details/Faculty/ShagunSethi.jpg";
import Dummy from "../../assets/images/people/Dummy.jpg";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './PeopleBehindUs.css'
import Col from "react-bootstrap/Col";



export default function Faculty() {
    return (

        <Row className="mt-5 doml">
        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Sujeet Dubey</Card.Title>
              <Card.Text className="m-0"> Patna University </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        {/* <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Bhim Singh</Card.Title>
              <Card.Text className="m-0"> Former Member of the Lok Sabha to Principal Kerorimal College </Card.Text>
            </Card.Body>
           </Card>
        </Col> */}

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Sanjeev Tiwari</Card.Title>
              <Card.Text className="m-0"> Principal Maharaja Agrasen College & University of Delhi </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Dr. Sumit Kr Mishra</Card.Title>
              <Card.Text className="m-0"> NPL </Card.Text>
            </Card.Body>
           </Card>
        </Col>


        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof Sanjay Bharadwaj</Card.Title>
              <Card.Text className="m-0"> Jawaharlal Nehru University </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Dr. Rohan Krishnan</Card.Title>
              <Card.Text className="m-0"> MBBS, MS Ortho </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Dr. Naval Kumar Verma</Card.Title>
              <Card.Text className="m-0">-</Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Kuldeep Shrivastava</Card.Title>
              <Card.Text className="m-0"> -</Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Ashwani Kumar</Card.Title>
              <Card.Text className="m-0"> Dean Tata Institute of Social Sciences , Mumbai</Card.Text>
            </Card.Body>
           </Card>
        </Col>


        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Pankaj Arora</Card.Title>
              <Card.Text className="m-0"> CIF, DU, New Education Policy </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        
        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Dummy} />
            <Card.Body className="pb-0">
              <Card.Title>Prof. Radheshyam Sharma</Card.Title>
              <Card.Text className="m-0"> Dept of Environmental Studies, Delhi University</Card.Text>
            </Card.Body>
           </Card>
        </Col>
        {/* <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Faculty2} />
            <Card.Body className="pb-0">
              <Card.Title>Benetto Jos</Card.Title>
              <Card.Text className="m-0"> Senior Fellow </Card.Text>
            </Card.Body>
           </Card>
        </Col> */}

        {/* <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Faculty3} />
            <Card.Body className="pb-0">
              <Card.Title> Rama Raju </Card.Title>
              <Card.Text className="m-0"> Senior Fellow, Andhra Pradesh </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className="box-sdow">
            <Card.Img variant="top" src={Faculty4} />
            <Card.Body className="pb-0">
              <Card.Title> Harsh </Card.Title>
              <Card.Text className="m-0"> Associate Fellow </Card.Text>
            </Card.Body>
           </Card>
        </Col>

        <Col sm={12} md={3} className="pt-4">
          <Card className="box-sdow">
            <Card.Img variant="top" src={Faculty5} />
            <Card.Body className="pb-0">
              <Card.Title> Shagun Sethi </Card.Title>
              <Card.Text className="m-0"> Associate Fellow </Card.Text>
            </Card.Body>
           </Card>
        </Col> */}
        
      </Row>
)
}