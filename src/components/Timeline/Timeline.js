import React from 'react'
import "./Timeline.css"
import RoadVideos from "../../assets/images/Aboutus/RoadVideos.png"
import Videos1 from '../../assets/images/Aboutus/Videos1.png';
import Videos2 from '../../assets/images/Aboutus/Videos2.png';
import Videos3 from '../../assets/images/Aboutus/Videos3.png';
import Videos4 from '../../assets/images/Aboutus/Videos4.png';
import Videos5 from '../../assets/images/Aboutus/Videos5.png';

export default function Timeline() {
    return (
        <div className='timeline'>
            <img className='bgTimeline' src={RoadVideos} alt="" />
            <div className="timeline-content">
                <div className="timeline-step"> <img src={Videos1} alt="Image 1" /></div>
                <div className="timeline-box">Creating a rodemap to integrate India into global supply chains</div>
            </div>
            <div className="timeline-content">
                <div className="timeline-step"><img src={Videos2} alt="Image 2" /></div>
                <div className="timeline-box">Opening Indian manufacturing units in West Africa to suppy to Europe</div>
            </div> <div className="timeline-content">
                <div className="timeline-step">    <img src={Videos3} alt="Image 3" /></div>
                <div className="timeline-box">Securing Green Hydrogen Assets for India</div>
            </div> <div className="timeline-content">
                <div className="timeline-step"> <img src={Videos4} alt="Image 4" /></div>
                <div className="timeline-box">Creating a plicy roadmap for integrating Indian farmers into the global food supply chain and creating market linkages for Indian farmers</div>
            </div> <div className="timeline-content">
                <div className="timeline-step">  <img src={Videos5} alt="Image 5" /></div>
                <div className="timeline-box">Supporting formulation of a policy roadmap to create energy storage systems made completeley from materials sourced from India</div>
            </div>
        </div>
    )
}
