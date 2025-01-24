import React from 'react'
import "./EventCard.css"

export default function EventCard({imageSrc, heading,imfurl, venue, date, time ,index}) {
  return (
     <div className="event-card" id={`eventCard${index}`}>
      <a href={imfurl} target="_blank"><div className="event-card-image" style={{ backgroundImage: `url(${imageSrc})` }}></div></a>
      <div className="event-card-content">
      <a href={imfurl} target="_blank"> <h2 className="event-card-heading">{heading}</h2></a>
      <hr className="event-card-hr" />
      <div className="event-card-details">
        <div className="event-card-detail eventtext">
          <span className="event-card-label">Venue:</span>
          <span className="event-card-value">{venue}</span>
        </div>

        <div className="event-card-detail eventtext">
          <span className="event-card-label">Date:</span>
          <span className="event-card-value">{date}</span>
        </div>

        {time && <div className="event-card-detail eventtext">
          <span className="event-card-label">Time:</span>
          <span className="event-card-value">{time}</span>
        </div>

        }
      </div>
      </div>
  
    </div>
  )
}
