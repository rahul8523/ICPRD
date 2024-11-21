import React from "react";

import BannereconomicPolicy from "../../assets/images/people/people.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";

import './PeopleBehindUs.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SupportUs from "../../components/SupportUs/SupportUs";
import Patrons from "./Patrons";
import NationalAdvisoryBoard from "./NationalAdvisoryBoard";
import NationalTeam from "./NationalTeam";
import Faculty from "./Faculty";
import PresidentDesk from "./PresidentDesk";
import GlobalAdvisoryBoard from "./GlobalAdvisoryBoard";
import GlobalTeamIcprd from "./GlobalTeamIcprd";

export default function PeopleBehindUs() {
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
      text: 'Global Chapter',
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
    text: "People Behind Us",
    subText: "Home / People Behind Us",
  };
  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />

      <Container className="mb-5 tab-ined">
        <Row>
          <Col sm={6} md={12}>
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="my-2 new-tab" 
              fill
              style={{borderBottom:"0px"}}
            >
              <Tab eventKey="home" title="PRESIDENT DESK" className="btnmores">
              <PresidentDesk/>
              </Tab>
              <Tab eventKey="partrons" title="PATRONS" className="btnmores">
              <Patrons/>
              </Tab>
              <Tab eventKey="global" title="GLOBAL ADVISORY BOARD" className="btnmores">
              <GlobalAdvisoryBoard/>
              </Tab>
              <Tab eventKey="profile" title="NATIONAL ADVISORY BOARD">
              <NationalAdvisoryBoard/>
              </Tab>
              <Tab eventKey="longer-tab" title="NATIONAL TEAM ICPRD">
                <NationalTeam/>
              </Tab>
              <Tab eventKey="contact" title="FACULTY ICPRD">
                <Faculty/>
              </Tab>
              <Tab eventKey="teamicprd" title="GLOBAL TEAM ICPRD">
                <GlobalTeamIcprd/>
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
