import React from 'react';
import "./AboutBox.css";
// import Videosr from "../../assets/images/Aboutus/your-video-source.mp4";
// import ReactPlayer from "react-player";

export default function AboutBox({ title, description, imageSrc, imageVideo, text, classNameUnique }) {
    return (
        <div className={`${classNameUnique}`}>
            <div className="msg-container">
                <div className="About-container">
                    {
                        title && <><h1 style={{
                            fontFamily: "Optima",
                        }}>{title}</h1>
                            <br /></>
                    }

                    {
                        description && <p className='about'>{description}
                        </p>
                    }


                    {Array.isArray(text) ? (
                        <ul className='about'>
                            {text.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (<p className='about'>
                        {text}</p>
                    )}

                </div>

                {imageSrc && <div className="profile">
                    {/* <div className='profileImg'><img src={imageSrc} alt="" className='popimg'/></div> */}
                    <div className="video-box">
                        {/* { <ReactPlayer 
                  url='https://icprd.org.in/ICPRDREVISED.mp4'
                  playing={true} 
                  loop={true} 
                  controls={true}
              /> */
                            <img src={imageSrc} alt='image Src' />

                        }

                    </div>
                </div>


                }

                {imageVideo && <div className="profile">

                    <div className="video-box">
                    <video controls autoPlay>
              <source src="https://icprd.org.in/ICPRDREVISED.mp4" type="video/mp4" />
            </video>
                    </div>
                </div>


                }



            </div>
        </div>
    );
}
