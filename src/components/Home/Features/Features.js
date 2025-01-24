import React, { useState } from 'react'
import "./Features.css"
import FeatureCard from './FeatureCard/FeatureCard'
import BACKGROUND_AND_EVOLUTION from "../../../assets/images/HOMEPAGE/BACKGROUND_AND_EVOLUTION.jpg"
import THRUST from "../../../assets/images/HOMEPAGE/THRUST.jpg";
import TALENT from "../../../assets/images/HOMEPAGE/TALENT.jpg"




export default function Features() {
    const [currentCard, setCurrentCard] = useState(1);
    const handleDotClick = (e,index) => {
e.target.click()
        if (index === 0) {
            setCurrentCard(0)
        } else {
            console.log(index);
            setCurrentCard(index)
        }

    };
    const featuresData = [

        {
            imageSrc: BACKGROUND_AND_EVOLUTION,
            heading: "Background And Evolution",
            text: "India Centre for Policy Research and Development (ICPRD) is India’s prominent Think Tank on Public Policy and advocacy. It is an ideal forum for intellectual interaction on varied developmental issues and related matters guiding policy formulation..."
        },
        {
            imageSrc: TALENT,
            heading: "Talent Pool",
            text: "The activities of ICPRD are being driven by a pool of multi-disciplinary scholars and experts acclaimed for their super-specialties and expertise in research, investigation, analysis, community-based intervention, advocacy, capacity building..."
        },
        {
            imageSrc: THRUST,
            heading: "Thrust Areas",
            text: "Socio-economic dialogues, debates and discussions initiated by ICPRD revolve around some major thrust areas. These include issues like social-inclusion, economic-inclusion, cultural-inclusion, political-participation, gender and social justice..."
        },


    ]
    const renderDots = () => {
        return featuresData.map((_, index) => (
            <label for={`f${index}`} id={`feature${index}`} key={index}
                
                onClick={(e) => handleDotClick(e,index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span
                
            ></span></label>
        ));
    };
    return (
        <div className="features">
            <div className="card-wrapper">
            
            <input type="radio" name="slider" class="d-none" id="f0" />
                        <input type="radio" name="slider" class="d-none" id="f1"  checked/>
                            <input type="radio" name="slider" class="d-none" id="f2" />
                <div className="featuresContainer" >

                               

                                    {featuresData.map((card, index) => (

                                        <FeatureCard
                                            index={index}
                                            imageSrc={card.imageSrc}
                                            heading={card.heading}
                                            text={card.text}
                                            currentCard={currentCard}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="carousel-dots">{renderDots()}
                                <hr className="slider-hr" style={{border:"1px solid #85848430"}} /></div>




                        </div>
                        )
}
