import React, { useState } from 'react'
import "./Dignitaries.css"
import "./UpdateDigs.css"
import Carousel from 'react-bootstrap/Carousel';
import Karansingh from "../../../assets/images/HOMEPAGE/icprd_DrKaran-Singh.png"
import DalaiLama from "../../../assets/images/HOMEPAGE/DalaiLama.png"
import Messagepg1 from "../../../assets/images/HOMEPAGE/drkaransingh.jpg"
import Messagepg2 from "../../../assets/images/HOMEPAGE/Messagepg2.jpg"
import Messagepg0 from "../../../assets/images/HOMEPAGE/Messagepg1.jpg"
import Documentslider from "../../../assets/images/HOMEPAGE/docsment.jpg"
import Gurudev from "../../../assets/images/HOMEPAGE/srisri.png"

export default function Dignitaries() {

    const [zoomedImagesVisible, setZoomedImagesVisible] = useState(false);

    const handleImgContainerClick = () => {
        setZoomedImagesVisible(true);
    };

    const handleZoomedImagesClick = (event) => {
        // Prevent the click from propagating to the parent elements
        event.stopPropagation();
    };

    const handleDocumentClick = () => {
        setZoomedImagesVisible(false);
    };


    return (
        <>
       

        <Carousel data-bs-theme="dark">
       {/* FIRST SLIDER IN REACT JS */}
       <Carousel.Item>
      <div className="dignitaries updatedDigs">
            <div className="event-card-wrapper">
                <div className="event-section">
                    <div className='dignitariesSection'>
                    <div className="">
                        <h5 className='fontforms'> MESSAGES FROM RESPECTED <br/> DIGNITARIES</h5>
        
                        </div>
                        <div className="profile">
                            <div className='profileImg'><img src={Gurudev} alt="" /></div>
                            <div className='profileName'><h2>Sri Sri Ravi Shankar </h2></div>
                        </div>
                        <div className="img-container" onClick={handleImgContainerClick}>
                            <div className="img"><img src={Documentslider} alt="" /></div>
                            {/* <div className="img"><img src={Messagepg2} alt="" /></div> */}
                        </div>
                    </div>
                </div>
            </div>

            {zoomedImagesVisible && (
                <div className="zoomed-img-container" onClick={handleDocumentClick}>
                    <div className="zoomed-imgs" onClick={handleZoomedImagesClick}>
                        <div className="img"><img src={Documentslider} alt="" /></div>
                        {/* <div className="img"><img src={Messagepg2} alt="" /></div> */}
                    </div>
                </div>
            )}

        </div>
      </Carousel.Item>
        {/* SECOND SLIDER START REACT JS */}
      <Carousel.Item>
      <div className="dignitaries updatedDigs">
            <div className="event-card-wrapper">
                <div className="event-section">
                    <div className='dignitariesSection'>
                    <div className="">
                        <h5 className='fontforms'> MESSAGES FROM RESPECTED <br/> DIGNITARIES</h5>
        
                        </div>
                        <div className="profile">
                            <div className='profileImg'><img src={DalaiLama} alt="" /></div>
                            <div className='profileName'><h2>H.H. Dalai Lama</h2></div>
                        </div>
                        <div className="img-container" onClick={handleImgContainerClick}>
                            <div className="img"><img src={Messagepg0} alt="" /></div>
                            <div className="img"><img src={Messagepg2} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {zoomedImagesVisible && (
                <div className="zoomed-img-container" onClick={handleDocumentClick}>
                    <div className="zoomed-imgs" onClick={handleZoomedImagesClick}>
                        <div className="img"><img src={Messagepg0} alt="" /></div>
                        <div className="img"><img src={Messagepg2} alt="" /></div>
                    </div>
                </div>
            )}

        </div>
      </Carousel.Item>
        {/* THIRD SLIDER START REACT JS */}
      <Carousel.Item>
      <div className="dignitaries updatedDigs">
            <div className="event-card-wrapper">
                <div className="event-section">
                    <div className='dignitariesSection'>
                    <div className="">
                        <h5 className='fontforms'> MESSAGES FROM RESPECTED <br/>DIGNITARIES</h5>
     
                        </div>
                        <div className="profile">
                            <div className='profileImg'><img src={Karansingh} alt="" /></div>
                            <div className='profileName'><h2>Dr. Karan Singh</h2></div>
                        </div>
                        <div className="img-container" onClick={handleImgContainerClick}>
                            <div className="img"><img src={Messagepg1} alt="" /></div>
                            {/* <div className="img"><img src={Messagepg2} alt="" /></div> */}
                        </div>
                    </div>
                </div>
            </div>

            {zoomedImagesVisible && (
                <div className="zoomed-img-container" onClick={handleDocumentClick}>
                    <div className="zoomed-imgs" onClick={handleZoomedImagesClick}>
                        <div className="img"><img src={Messagepg1} alt="" /></div>
                        {/* <div className="img"><img src={Messagepg2} alt="" /></div> */}
                    </div>
                </div>
            )}

        </div>
      </Carousel.Item>
             {/* THIRD SLIDER END REACT JS */}

    </Carousel>
        </>
    )
}
