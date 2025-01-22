import React from 'react';
import ReactPlayer from 'react-player';

const AboutVideo = ({ title, description, media, text }) => {
  return (
    <div className="about-box">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="media-container">
        {/* Check if the media is a video or image */}
        {typeof media === 'string' ? (
          <img src={media} alt={title} />
        ) : (
          <ReactPlayer
            url={media.url}
            playing={media.playing}
            loop={media.loop}
            controls={media.controls}
            width="100%"
            height="auto"
          />
        )}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AboutVideo;
