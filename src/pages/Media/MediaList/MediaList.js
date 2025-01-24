import React from 'react'
import "./MediaList.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Arrows from '../../../assets/images/Blog/Arrows.png'
// import { Link } from 'react-router-dom'



export default function MediaList({ imageSrc, heading, text ,url,Date}) {
  return (
    <>


    <Col className='col-md-3 d-flex mediapost'>
      <div className='boxShadow'> 
      <Card.Img variant="top" src={imageSrc} />

      <Card.Body className='pb-0 pt-0'>
        <Card.Text className='CardSmall mt-0'>
        {text}
        </Card.Text>
      </Card.Body>

      <Card.Body className='m-0 pb-0 pt-0 px-2'>
        <Card.Link href={url} target='_blank'><p className='smaller py-1 mt-2 text-yellow'>Read More <img src={Arrows} alt="1" className='pain' style={{width:"20px",paddingLeft:"5px"}}/></p></Card.Link>
      </Card.Body>
      </div>
    </Col>

    
    </>
  )
}
