// Import React and CSS
import React, { useEffect, useRef } from "react";
import "./Carousel.css"; // Ensure you have the CSS file in the same directory
import BannerOne from '../../assets/images/updated-banner/bannerOne.jpg';
import BannerTwo from '../../assets/images/updated-banner/bannerTwor.jpg';
import BannerThree from '../../assets/images/updated-banner/bannerThree.jpg';
import BannerFour from '../../assets/images/updated-banner/bannerFour.jpg';
import BannerFive from '../../assets/images/updated-banner/bannerFive.jpg';
import BannerSix from '../../assets/images/updated-banner/bannerSix.jpg';
import BannerSeven from '../../assets/images/updated-banner/bannerSeven.jpg';
import Map from '../../components/Home/Map/Map';


// Import Mobile Images
import MobileBannerOne from "../../assets/images/HOMEPAGE/mobile/climate-change.png";
import MobileBannerTwo from "../../assets/images/HOMEPAGE/mobile/1 (2).jpg";
import MobileBannerThree from "../../assets/images/HOMEPAGE/mobile/10.jpg";
import MobileBannerFour from "../../assets/images/HOMEPAGE/mobile/11.jpg";
import MobileBannerFive from "../../assets/images/HOMEPAGE/mobile/12.jpg";
import MobileBannerSix from "../../assets/images/HOMEPAGE/mobile/13.jpg";
import MobileBannerSeven from "../../assets/images/HOMEPAGE/mobile/14.jpg";


const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  const timeRunning = 3000; // Transition animation time
  const timeAutoNext = 7000; // Auto-next interval
  let runTimeOut = null;
  let runNextAuto = null;

  // Get appropriate image based on device type
  const getImage = (id) => {
    const isMobile = window.innerWidth <= 900; // breakpoint Mobile Banner

    switch (id) {
      case 1:
        return isMobile ? MobileBannerOne : BannerOne;
      case 2:
        return isMobile ? MobileBannerTwo : BannerTwo;
      case 3:
        return isMobile ? MobileBannerThree : BannerThree;
      case 4:
        return isMobile ? MobileBannerFour : BannerFour;
      case 5:
        return isMobile ? MobileBannerFive : BannerFive;
      case 6:
        return isMobile ? MobileBannerSix : BannerSix;
      case 7:
        return isMobile ? MobileBannerSeven : BannerSeven; 
      default:
        return isMobile ? MobileBannerOne : BannerOne;
    }
  };

  // Map will be the first slide, followed by the image banners
  const banners = [
    { id: "map" }, // First slide will be Map
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  // Reset animation for progress bar
  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";
      void runningTimeRef.current.offsetWidth; // Trigger reflow for restarting animation
      runningTimeRef.current.style.animation = "runningTime 7s linear forwards";
    }
  };

  // Handle slider navigation
  const showSlider = (type) => {
    if (!listRef.current || !carouselRef.current) return;

    const sliderItemsDom = listRef.current.querySelectorAll(".item");

    if (type === "next") {
      listRef.current.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();
  };

  useEffect(() => {
    // Auto-slide functionality
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="video-section">
      <div className="carousel" ref={carouselRef}>
        {/* Carousel Items */}
        <div className="list" ref={listRef}>
          {banners.map((banner, index) => {
            if (banner.id === "map") {
              return (
                <div key={`carousel-item-map`} className="item" style={{ background: "black" }}>
                  <Map />
                </div>
              );
            } else {
              return (
                <div
                  key={`carousel-item-${index}`}
                  className="item"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `url(${getImage(banner.id)})`,
                  }}
                >
                  <div className="content">{/* Add content if needed */}</div>
                </div>
              );
            }
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button className="prev" aria-label="Previous Slide" onClick={() => showSlider("prev")}></button>
          <button className="next" aria-label="Next Slide" onClick={() => showSlider("next")}></button>
        </div>

        {/* Progress Bar */}
        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>
    </div>
  );
};

export default VideoCarousel;
