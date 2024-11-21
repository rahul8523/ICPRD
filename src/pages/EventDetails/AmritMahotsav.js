import React from "react";

import Iconimg from "../../assets/images/event-details/iconrt.png";
import EventImage from "../../assets/images/event-details/event1/april_1998.jpeg";
import EventImage1 from "../../assets/images/event-details/event1/april_2003.jpeg";
import EventImage2 from "../../assets/images/event-details/event1/april_2004.jpeg";
import EventImage3 from "../../assets/images/event-details/event1/april_2039.jpeg";
import EventImage4 from "../../assets/images/event-details/event1/april_2091.jpeg";
import EventImage5 from "../../assets/images/event-details/event1/april_2102.jpeg";
import EventImage6 from "../../assets/images/event-details/event1/april_2142.jpeg";
import EventImage7 from "../../assets/images/event-details/event1/april_2160.jpeg";
import EventImage8 from "../../assets/images/event-details/event1/april_2175.jpeg";
import EventImage9 from "../../assets/images/event-details/event1/april_2180.jpeg";
import EventImage10 from "../../assets/images/event-details/event1/april_2277.jpeg";
import EventImage11 from "../../assets/images/event-details/event1/april_2308.jpeg";
import EventImage12 from "../../assets/images/event-details/event1/april_2539.jpeg";
import EventImage13 from "../../assets/images/event-details/event1/april_2551.jpeg";
import EventImage14 from "../../assets/images/event-details/event1/april_2590.jpeg";
import EventImage15 from "../../assets/images/event-details/event1/april_2595.jpeg";
import EventImage16 from "../../assets/images/event-details/event1/april_2606.jpeg";
import EventImage17 from "../../assets/images/event-details/event1/april_2631.jpeg";
import EventImage18 from "../../assets/images/event-details/event1/april_2696.jpeg";
import EventImage19 from "../../assets/images/event-details/event1/april_2699.jpeg";
import EventImage20 from "../../assets/images/event-details/event1/april_2723.jpeg";
import EventImage21 from "../../assets/images/event-details/event1/april_2784.jpeg";
import EventImage22 from "../../assets/images/event-details/event1/april_2794.jpeg";
import EventImage23 from "../../assets/images/event-details/event1/april_2804.jpeg";
import EventImage24 from "../../assets/images/event-details/event1/april_2816.jpeg";
import EventImage25 from "../../assets/images/event-details/event1/april_2828.jpeg";
import EventImage26 from "../../assets/images/event-details/event1/april_2874.jpeg";
import EventImage27 from "../../assets/images/event-details/event1/april_2877.jpeg";
import EventImage28 from "../../assets/images/event-details/event1/april_2906.jpeg";
import EventImage29 from "../../assets/images/event-details/event1/april_2928.jpeg";
import EventImage30 from "../../assets/images/event-details/event1/april_2942.jpeg";
import EventImage31 from "../../assets/images/event-details/event1/april_2956.jpeg";
import EventImage32 from "../../assets/images/event-details/event1/april_2982.jpeg";
import EventImage33 from "../../assets/images/event-details/event1/april_2997.jpeg";
import EventImage34 from "../../assets/images/event-details/event1/april_3003.jpeg";
import EventImage35 from "../../assets/images/event-details/event1/april_3030.jpeg";
import EventImage36 from "../../assets/images/event-details/event1/april_3034.jpeg";
import EventImage37 from "../../assets/images/event-details/event1/april_3043.jpeg";
import EventImage38 from "../../assets/images/event-details/event1/april_3049.jpeg";
import EventImage39 from "../../assets/images/event-details/event1/april_3162.jpeg";
import EventImage40 from "../../assets/images/event-details/event1/april_3177.jpeg";

import "./EventDetails.css";
// //Axios for get request
// import axios from "axios";
// import $ from "jquery";

import EventFast from "../../assets/images/event-details/april_2794.jpeg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportUs from "../../components/SupportUs/SupportUs";

export default function AmritMahotsav() {
  const navlinks = [
    { text: "Home", url: "/" },
    {
      text: 'About us', url: '/aboutUs',
      dropdown: false,
      dropdownOptions: [
        { text: "About Us", url: "/aboutUs" },
        { text: "President Desk", url: "/president" },
      ],
    },
    {
        text: 'Verticals',
        dropdown: true,
        dropdownOptions: [
            { text: 'Economic Policy', url: '/economicPolicy' },
            { text: 'International Relations & Foreign Policy', url: '/intrel' },
            { text: 'Climate Change', url: '/climateChange' },
            { text: 'Food Security', url: '/foodSecurity' },
            { text: 'Education & Training', url: '/educationTraining' },
            { text: 'Rural Urbanisation', url: '/ruralUrbanisation' },
            { text: 'Trade & Commerce', url: '/tradeCommerce' },
            { text: 'Agriculture', url: '/agriculture' },
            { text: 'Healthcare', url: '/' },
        ]
    },
    {
      text: 'Media',
      dropdown: true,
      dropdownOptions: [
          { text: 'Media Report', url: '' },
          { text: 'News', url: '/news' },
          { text: 'Article', url: '/research-articles' },
          { text: 'Blog', url: '/blog' },
      ],
  },
    { text: "Event", url: "/event" },
    { text: "Team Behind us", url: "/people-behind-us" },
    {
      text: 'GlobalChapter',
      dropdown: true,
      dropdownOptions: [
          { text: 'USA', url: '/' },
          { text: 'UK', url: '/' },
          { text: 'South Africa', url: '/' },
      ],
  },
    { text: "Support Us", url: "/support" },
    { text: "Contact Us", url: "/contact" },
    // ... other links
  ];

  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />

      <Container className="border-bottom">
        <Row className="align-items-center my-5">
          <Col sm={12} md={3} className="aboutSe board px-4">
            <span>________</span>
            <h4 className="">April</h4>
            <h3 class="text-left font-text">05</h3>
            <h4 className="pt-2">2023</h4>
          </Col>

          <Col sm={12} md={9} className="aboutSe aboutSe">
            <div className="px-3">
              <h1 class="text-left">
                India @ 75
                <br /> Azadi ka Amrit Mahotsav <span>________</span>
              </h1>

            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="d-flex">
          <Col
            sm={4}
            md={4}
            style={{ background: "#ebaa01" }}
            className="d-flex align-content-center flex-wrap"
          >
            <h4 className="text-white p-3">
              Wednesday, April 05, 2023 
            </h4>
            <br />
            <h2 className="text-white p-3">
              Agenda <img src={Iconimg} alt="icon" width={40} />
            </h2>
          </Col>
          <Col sm={8} md={8}>
            <img src={EventFast} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "90%" }}>
        <Row>
          <Col sm={12} md={12} className="p-0">
            <div className="ecopolicy pt-5">
              <p className="para text-left pt-3">
                As India stepped into its 75th year of Independence, we, at
                India Centre for Policy Research and Development decided it was
                time to announce to the world about ourselves, and our work. We
                had been silently working towards creating a think tank, that
                will dedicate itself towards contributing to the process of
                nation-building. We are committed to doing our bit, and more, to
                build the ‘New India’ as envisioned by our Hon’ble Prime
                Minister Shri Narendra Modi.
              </p>
              <br></br>
              <p className="para text-left">
                The day-long event ‘India at 75’ was organized on 5th April,
                2022, to mark the formal launch of ICPRD. The chief guest, His
                Holiness Sri Sri Ravi Shankar graced the event with his presence
                and blessings.
              </p>
              <p className="para text-left">
                The event was graced by great minds like Dr Karan Singh, Hon'ble
                Former Union Minister, Govt. Of India, Dr. Rita Bahuguna Joshi,
                Hon'ble Member of Parliament, Prayagraj, and many more.
              </p>
              <p className="para text-left">
                A special message from His Holiness Dalai Lama added to the
                encouragement!
              </p>

              <div className="EventGallery">
                <h1 class="text-with-line text-center py-3">Event Gallery</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "90%" }} className="mb-5">
        <Row className="gallery">
          <Col sm={12} md={4}>
            <a href={EventImage} data-lightbox="mygallery">
              <img src={EventImage} alt="namedd" />
            </a>
          </Col>
          <Col sm={12} md={4}>
            <a href={EventImage1} data-lightbox="mygallery">
              <img src={EventImage1} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4}>
            <a href={EventImage2} data-lightbox="mygallery">
              <img src={EventImage2} alt="" style={{ width: "100%" }} />
            </a>
          </Col>

          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage3} data-lightbox="mygallery">
              <img src={EventImage3} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage4} data-lightbox="mygallery">
              <img src={EventImage4} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage5} data-lightbox="mygallery">
              <img src={EventImage5} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage6} data-lightbox="mygallery">
              <img src={EventImage6} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage7} data-lightbox="mygallery">
              <img src={EventImage7} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage8} data-lightbox="mygallery">
              <img src={EventImage8} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage9} data-lightbox="mygallery">
              <img src={EventImage9} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage10} data-lightbox="mygallery">
              <img src={EventImage10} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage11} data-lightbox="mygallery">
              <img src={EventImage11} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage12} data-lightbox="mygallery">
              <img src={EventImage12} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage13} data-lightbox="mygallery">
              <img src={EventImage13} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage14} data-lightbox="mygallery">
              <img src={EventImage14} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage15} data-lightbox="mygallery">
              <img src={EventImage15} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage16} data-lightbox="mygallery">
              <img src={EventImage16} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage17} data-lightbox="mygallery">
              <img src={EventImage17} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage18} data-lightbox="mygallery">
              <img src={EventImage18} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage19} data-lightbox="mygallery">
              <img src={EventImage19} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage20} data-lightbox="mygallery">
              <img src={EventImage20} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage21} data-lightbox="mygallery">
              <img src={EventImage21} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage22} data-lightbox="mygallery">
              <img src={EventImage22} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage23} data-lightbox="mygallery">
              <img src={EventImage23} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage24} data-lightbox="mygallery">
              <img src={EventImage24} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage25} data-lightbox="mygallery">
              <img src={EventImage25} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage26} data-lightbox="mygallery">
              <img src={EventImage26} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage27} data-lightbox="mygallery">
              <img src={EventImage27} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage28} data-lightbox="mygallery">
              <img src={EventImage28} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage29} data-lightbox="mygallery">
              <img src={EventImage29} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage30} data-lightbox="mygallery">
              <img src={EventImage30} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage31} data-lightbox="mygallery">
              <img src={EventImage31} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage32} data-lightbox="mygallery">
              <img src={EventImage32} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage33} data-lightbox="mygallery">
              <img src={EventImage33} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage34} data-lightbox="mygallery">
              <img src={EventImage34} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage35} data-lightbox="mygallery">
              <img src={EventImage35} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage36} data-lightbox="mygallery">
              <img src={EventImage36} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage37} data-lightbox="mygallery">
              <img src={EventImage37} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage38} data-lightbox="mygallery">
              <img src={EventImage38} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage39} data-lightbox="mygallery">
              <img src={EventImage39} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage40} data-lightbox="mygallery">
              <img src={EventImage40} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
        </Row>
      </Container>
      <SupportUs />
      <Footer />
    </div>
  );
}
