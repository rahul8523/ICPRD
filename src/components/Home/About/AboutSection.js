import React from "react";
import "./about.css";
// import Videosr from "../../../assets/images/Aboutus/your-video-source.mp4";
import MediaUpdate2 from "../../../assets/images/MediaUpdate/2.jpeg";
import MediaUpdate3 from "../../../assets/images/MediaUpdate/3.jpeg";
import MediaUpdate4 from "../../../assets/images/MediaUpdate/4.jpeg";
import MediaUpdate5 from "../../../assets/images/MediaUpdate/5.jpeg";
import MediaUpdate6 from "../../../assets/images/MediaUpdate/6.jpeg";
import MediaUpdate7 from "../../../assets/images/MediaUpdate/7.jpeg";
import MediaUpdate8 from "../../../assets/images/MediaUpdate/8.jpeg";
import Leftarrow from "../../../assets/images/MediaUpdate/leftarrow.png";
import Rightarrow from "../../../assets/images/MediaUpdate/rightarrow.png";
import Nav from "react-bootstrap/Nav";

// import Card from '../card/Card'
// import ReactPlayer from "react-player";

export default function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="about-content">
        <div className="about-detail">
          <h4>ABOUT ICPRD </h4>
          <p className="mb-0">
            India Centre for Policy Research and Development (ICPRD) is India's
            prominent think tank on public policy and advocacy.
          </p>
          <p>
            It has been conceived as a premier institution of Indian
            intelligentsia for intellectual interactions on a wide spectrum of
            developmental issues and related matters guiding policy formulation
            in the country. ICPRD is devoted to policy research, advocacy and
            outreach with the expressed objective to make policy interventions
            in the best interest of the country for the wider public good. It
            aims to develop indigenous hyper-local solutions for policy
            challenges by holding discussions, coupled with effective
            implementation of strategies, to achieve rapid socio-economic
            development.
          </p>
          <Nav.Link href="/aboutUs">
            <button className="know-more-button">
              Click to know more
              <span className="yellow-square">
                <i
                  style={{ color: "black" }}
                  className="ri-arrow-right-up-line"
                ></i>
              </span>
            </button>
          </Nav.Link>
        </div>
      </div>
      <div className="video-box">
        {/* <video controls autoPlay>
              <source src={Videosr} type="video/mp4" />
            </video> */}
        {/* <ReactPlayer 
    url='https://icprd.org.in/ICPRDREVISED.mp4'
    playing={true} 
    loop={true} 
    controls={true}
/> */}

        <div
          id="carousel-example-generic"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="item active">
              <img src={MediaUpdate2} alt="..." />
              <p>
                ICPRD President Rajiv Ranjan and Strategic Advisor & Executive
                Council Member Mr. Aditya Reddy had the incredible opportunity
                to seek the blessings of renowned spiritual leader His Holiness
                Sri Sri Ravi Shankar. They engaged in an insightful conversation
                on fostering peace, harmony, and sustainable development.
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate3} alt="..." />

              <p>
                ICPRD president Kr. Rajiv Ranjan Singh and other team members
                met with H.E. Mr. Abel Aballe Despaigne, Charge d' Affairs, a.i.
                at the Embassy of the Republic of Cuba (North America).
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate4} alt="..." />
              <p>
                ICPRD president Kr. Rajiv Ranjan Singh met Cyprus High
                Commissioner to India H.E. Mr. Evagoras Vryonides.
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate5} alt="..." />
              <p>
                ICPRD president Kr. Rajiv Ranjan Singh along with national
                advisors met the Malaysia High Commissioner H.E. Muzafar Shah
                Mustafa (Dato’).
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate6} alt="..." />
              <p>
                2024 marks the 75th year of India-Philippines diplomatic
                relations! ICPRD President Kr. Rajiv Ranjan Singh along with the
                national advisors met the Philippines Ambassador to India H.E.
                Mr. Josel F. Ignacio.
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate7} alt="..." />
              <p>
                ICPRD president Kr. Rajiv Ranjan Singh and national advisors met
                the Namibia High Commissioner to India H.E. Mr. Gabriel Sinimbo.
              </p>
            </div>
            <div class="item">
              <img src={MediaUpdate8} alt="..." />
              <p>
                ICPRD president Kr. Rajiv Ranjan Singh and his team met the
                Vietnamese Ambassador to India H.E. Mr. Nguyen Thanh Hai.
              </p>
            </div>
          </div>

          <a
            class="left carousel-control"
            href="#carousel-example-generic"
            data-slide="prev"
          >
            <img src={Leftarrow} alt="..." style={{ width: "50%" }} />
          </a>
          <a
            class="right carousel-control"
            href="#carousel-example-generic"
            data-slide="next"
          >
            <img src={Rightarrow} alt="..." style={{ width: "50%" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
