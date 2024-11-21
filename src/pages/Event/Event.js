import React from "react";
// import Evemts from "../../assets/images/Event/april07.png";
// import Evemts1 from "../../assets/images/Event/March032023.png";
// import Evemts2 from "../../assets/images/Event/april05.png";
// import Evemts3 from "../../assets/images/Event/august22.png";
import BannereconomicPolicy from "../../assets/images/Event/Background.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import './Event.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SupportUs from "../../components/SupportUs/SupportUs";
import PastEvent from "./PastEvent";


export default function Event() {
  const navlinks = [
    { text: 'Home', url: '/' },
    {
      text: 'About us', url: '/aboutUs',
        dropdown: false,
        dropdownOptions: [
            { text: 'About Us', url: '/aboutUs' },
            { text: 'President Desk', url: '/president' },
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
    { text: 'Event', url: '/event' },
    { text: 'Team Behind us', url: '/people-behind-us' },
    {
      text: 'GlobalChapter',
      dropdown: true,
      dropdownOptions: [
          { text: 'USA', url: '/' },
          { text: 'UK', url: '/' },
          { text: 'South Africa', url: '/' },
      ],
  },
    { text: 'Support Us', url: '/support' },
    { text: 'Contact Us', url: '/contact' },
    // ... other links
  ];
  const bannerDataForPage2 = {
    backgroundImage: BannereconomicPolicy,
    text: "Event",
    subText: "Home / Event",
  };
  return (
    <div className="economic-policy icprdVerticalPage heightbag">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2}/>
      <Container className="border-bottom2" fluid>
        <Row className="align-items-center w-80 m-auto py-4">
            <Col sm={6} md={3} className="aboutS morert boardss px-4"> 
            <span>________</span>
             <h4 className="">April</h4>
              <h3 class="text-left font-text">07</h3>
              <h4 className="pt-2">2023</h4>
            </Col>
 
            <Col sm={6} md={9} className="aboutS morert1"> 
              <div className="px-3">
              <h2 class="text-left text-white"> Evolvement & Transformation <br/> towards Climate Resilient India </h2>
              </div>
            </Col>
        </Row>
      </Container>
      <Container className="mb-5 morevent">
        <Row>
          <Col sm={12} md={12}>
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mt-3 mb-4 pb-3"
              fill
              style={{borderBottom:"0px"}}
            >
              <Tab eventKey="home" title="All EVENTS" className="btnmores bord">
              <PastEvent/>
              </Tab>
              <Tab eventKey="profile" title="UPCOMING EVENTS">
              UPCOMING EVENTS
              </Tab>
              <Tab eventKey="longer-tab" title="PAST EVENTS">
              <PastEvent/>
              </Tab>
  
            </Tabs>
          </Col>
        </Row>
      </Container>
 
      <SupportUs/>
      <Footer />
    </div>
  );
}
