import React from 'react';
import "./FeatureCard.css"

export default function FeatureCard({index,heading,imageSrc,text,currentCard}) {
  
  return (
    <label for={`${index}`} id={`feature${index}`}>
    <div key={index} className={`featureCard ${index === currentCard ? 'active-dot' : ''}`}>
         <img src={imageSrc} alt="" />
      <div className="feature-card-content">
        <h2 className="feature-card-heading">{heading}</h2>
        <hr />
        <p className="feature-card-text">{text}</p>
      </div>
    </div>
    </label>
  )
}
