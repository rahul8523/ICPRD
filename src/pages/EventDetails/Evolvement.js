import React from "react";

import Iconimg from "../../assets/images/event-details/iconrt.png";
import EventImage from "../../assets/images/event-details/Layer 1209.png";
import EventImage1 from "../../assets/images/event-details/Layer 1210.png";
import EventImage2 from "../../assets/images/event-details/Layer 1211.png";
import EventImage3 from "../../assets/images/event-details/Layer 1212.png";
import EventImage4 from "../../assets/images/event-details/Layer 1213.png";
import EventImage5 from "../../assets/images/event-details/Layer 1214.png";
import "./EventDetails.css";

import EventFast from "../../assets/images/event-details/fast.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportUs from "../../components/SupportUs/SupportUs";

export default function Evolvement() {
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
            <h3 class="text-left font-text">07</h3>
            <h4 className="pt-2">2023</h4>
          </Col>

          <Col sm={12} md={9} className="aboutSe aboutSe">
            <div className="px-3">
              <h1 class="text-left">
                Evolvement & Transformation
                <br />  Towards Climate Resilient India<span>________</span>
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
              Friday, April 07, 2023 <br/>
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
                ‘Amrit Manthan: Evolvement and Transformation Towards Climate
                Resilient India’, a brainstorming session on India’s way forward
                towards addressing the issue of climate change and evolving into
                a sustainable and energy-efficient country was at the World
                Trade Centre, Mumbai on 7th April 2023. The session witnessed
                panel discussions on various issues related to climate change
                including people, planet and profit, green funds, and the
                roadmap to climate-resilient India. Eminent and knowledgeable
                panelists from different walks of life including educationists,
                journalists, finance experts, and political leaders got together
                on a single platform to come up with solutions to address the
                most burning issue of the time – climate change.
              </p>
              <br></br>
              <p className="para text-left">
                The discussions focused on the present scenario in the country,
                India’s commitment to dealing with climate change made at the UN
                Climate Change Conference in Glasgow (COP26), expectations from
                COP28, and green funds being the need of the hour among others.
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
              {" "}
              <img src={EventImage2} alt="" style={{ width: "100%" }} />
            </a>
          </Col>

          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage3} data-lightbox="mygallery">
              {" "}
              <img src={EventImage3} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage4} data-lightbox="mygallery">
              {" "}
              <img src={EventImage4} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col sm={12} md={4} className="pt-3">
            <a href={EventImage5} data-lightbox="mygallery">
              <img src={EventImage5} alt="" style={{ width: "100%" }} />
            </a>
          </Col>
        </Row>
      </Container>
      <SupportUs />
      <Footer />
    </div>
  );
}
