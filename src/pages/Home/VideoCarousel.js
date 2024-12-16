// Import React and CSS
import React, { useEffect, useRef } from "react";
import "./Carousel.css"; // Ensure you have the CSS file in the same directory
import BannerOne from '../../assets/images/HOMEPAGE/climate-change.jpg';
const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  const timeRunning = 30000000; // Time for transition animation
  const timeAutoNext = 70000000; // Auto-next interval
  let runTimeOut = null;
  let runNextAuto = null;

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";

      runningTimeRef.current.style.animation = "runningTime 7s linear 1 forwards";
    }
  };

  
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
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="video-section">
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        <div
          className="item"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${BannerOne})`,
          }}
        >
          <div className="content">
          
          </div>
        </div>
        {/* Repeat for other items as in the original code */}

        <div
          className="item"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${BannerOne})`,
        }}
        >
          <div className="content">
        
           
          </div>
        </div>
        {/* Add other items here with the same structure as above */}

           {/* Repeat for other items as in the original code */}

           <div
          className="item"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${BannerOne})`,
                }}
        >
          <div className="content">
            
           
          </div>
        </div>

           {/* Repeat for other items as in the original code */}

           <div
          className="item"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${BannerOne})`,
                 }}
        >
          <div className="content">
        
          
          </div>
        </div>
               {/* Repeat for other items as in the original code */}

      </div>

      {/* Next and Previous Buttons */}
      <div className="arrows">
        <button className="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      {/* Time Running Animation */}
      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
   </div>
  );
};

export default VideoCarousel;