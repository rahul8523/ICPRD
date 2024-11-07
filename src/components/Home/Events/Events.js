// import React, { useState, useEffect } from 'react';
import React, { useState,useRef } from 'react'
import "./Events.css"
import Nav from 'react-bootstrap/Nav'
import EventCard from './EventCard/EventCard'
import Events_01Events from "../../../assets/images/HOMEPAGE/Events_01Events.jpg"
import Events_02Events from "../../../assets/images/HOMEPAGE/Events_02Events.jpg"
import Events_03Events from "../../../assets/images/HOMEPAGE/Events_03Events.png"
const TOUCH_SENSITIVITY = 50; // Adjust this value based on sensitivity

export default function Events() {
    const [currentCard, setCurrentCard] = useState(1);
    const eventSectionRef = useRef(null);
    const touchStartX = useRef(null); // Declare touchStartX here

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null) {
            return;
        }

        const currentX = e.touches[0].clientX;
        const diff = touchStartX.current - currentX;

        if (Math.abs(diff) > TOUCH_SENSITIVITY) {
            if (diff > 0 && currentCard < eventData.length - 1) {
                handleSwipe('next');
            } else if (diff < 0 && currentCard > 0) {
                handleSwipe('prev');
            } else if (diff < 0 && currentCard == 0) {
                console.log("Can't swipe lright when o cards i there");
                const nextIndex = 2;
                const radioId = `event${nextIndex}`;
                       
            // Manually set the checked attribute of the radio button
            const radioElement = document.getElementById(radioId);
                       
            if (radioElement) {
                console.log(radioElement.checked);
                radioElement.click();
                console.log(document.getElementById(`event${nextIndex}`));
                setCurrentCard(nextIndex);
            }
            }
            else if (diff > 0 && currentCard == 2) {
                console.log("Can't swipe lright when o cards i there");
                const nextIndex = 1;
                const radioId = `event${nextIndex}`;
                       
            // Manually set the checked attribute of the radio button
            const radioElement = document.getElementById(radioId);
                       
            if (radioElement) {
                console.log(radioElement.checked);
                radioElement.click();
                console.log(document.getElementById(`event${nextIndex}`));
                setCurrentCard(nextIndex);
            }
            }

            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    const handleSwipe = (direction) => {
        const currentIndex = currentCard;
        const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        const radioId = `event${nextIndex}`;
        console.log(radioId);

    // Manually set the checked attribute of the radio button
    const radioElement = document.getElementById(radioId);
    console.log(radioElement);
    
    if (radioElement) {
        console.log(radioElement.checked);
        radioElement.click();
        console.log(document.getElementById(`event${nextIndex}`));
        setCurrentCard(nextIndex);
    }
    };
    const handleDotClick = (e,index) => {
        console.log("label is clicked");
        e.target.click()
        if (index === 0) {
            setCurrentCard(0)
        } else {
            console.log(index);
            setCurrentCard(index)
        }

    };
    const eventData = [
        {
            imageSrc: Events_01Events,
            imfurl:"/amrit-manthan-india-sustainable-transition",
            heading: "Amrit Manthan to Sustainable  India.",
            venue: 'Press Club of India, New Delhi',
            Date: "03rd March 2023",
        },
        {
            imageSrc: Events_02Events,
            imfurl:"/panch-pran-in-amrit-kaal",
            heading: "PANCH PRAN” in Amrit Kaal by 2047",
            venue: 'Press Club of India, New Delhi',
            Date: "22 August 2022",
        },
        {
            imageSrc: Events_03Events,
            imfurl: "/india-@-75-azadi-ka-amrit-mahotsav",
            heading: "India @ 75, Marking 75 years of Indian Independence.",
            venue: 'Press Club of India, New Delhi',
            Date: "05 April 2023",

        },

    ]
    const renderDots = () => {
        return eventData.map((_, index) => (
            <label for={`e${index}`} id={`event${index}`} key={index}

                onClick={(e) => handleDotClick(e, index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span

                ></span></label>
        ));
    };
    return (
        <div className="icprdEvents">
            <header>
                <div>
                    <h1>ICPRD Events</h1>
                </div>
                <Nav.Link href="/event"><button>All EVENT LIST</button></Nav.Link>

            </header>
            <div className="event-card-wrapper" >
            <input type="radio" name="sliderEvent" class="d-none" id="e0" checked={"e0" === `e${currentCard}`} />
                <input type="radio" name="sliderEvent" class="d-none" id="e1" checked={"e1" === `e${currentCard}`} />
                <input type="radio" name="sliderEvent" class="d-none" id="e2" checked={"e2" === `e${currentCard}`} />
                <div className="event-section" 
                ref={eventSectionRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd} >
                    {eventData.map((card,index) => (
                        <EventCard
                            imageSrc={card.imageSrc}
                            imfurl={card.imfurl}
                            heading={card.heading}
                            venue={card.venue}
                            date={card.Date}
                            index={index}
                        />
                    ))}


                </div>
            </div>

            <div className="carousel-dots">{renderDots()}
                <hr className="slider-hr" /></div>
        </div>
    )
}