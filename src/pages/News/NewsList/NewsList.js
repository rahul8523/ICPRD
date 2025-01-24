import React from 'react'
// import "./BlogList.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom'



export default function NewsList({ imageSrc, heading, text, url, Date, Icon,titles, Arrow}) {
  return (
    <>


    <Col className='col-md-3 d-flex'>
      <div className='boxShadow'> 
      <Card.Img variant="top" className="cardss" src={imageSrc} />
      <Card.Body className='m-0 pt-2 px-2 d-flex justify-content-between'>
        <Card.Link><p className='smallText'><img src={Icon} style={{width:"20px",paddingRight:"5px"}} alt="Readarrow"/>{heading}</p></Card.Link>
        <Card.Link href="#"><p className='small'>{Date}</p></Card.Link>
      </Card.Body>
      <Card.Body className='pb-0 pt-0 px-2'>
        <Card.Text className='CardSmall mt-0'>
        <h6> {titles}</h6>
        </Card.Text>
      </Card.Body>

      <Card.Body className='m-0 pb-3 pt-0 px-2'>
        <Card.Link  href={url}><p className='smaller text-yellow mb-0'>Read More 
        <img src={Arrow} alt="1" className='pain' style={{width:"20px",paddingLeft:"5px"}}/></p>
        </Card.Link>
      </Card.Body>
      </div>
    </Col>

    
    </>
  )
}
