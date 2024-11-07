import React from 'react'
import './Banner.css'


const Banner = ({ backgroundImage, text,subText }) => {
    const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  
    return (
      <div className="banner" style={bannerStyle}>
        <div className="banner-text">
          <p>{text}</p>
          <p>{subText}</p>
        </div>
      </div>
    );
  };

  export default Banner;
