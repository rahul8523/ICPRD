import React from 'react'
import "./VerticalCards.css"
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'



export default function VerticalCards({ imageSrc, heading, text ,url}) {
  return (
    <div  className="verticals-card" >
       <Nav.Link href={url}>
    <img src={imageSrc} alt="" />
      <div className="verticals-card-content">
       <h2 className="verticals-card-heading">{heading}</h2>
        {/* <p className="verticals-card-text">{text}</p> */}
      </div>
      </Nav.Link>
    </div>
  )
}
