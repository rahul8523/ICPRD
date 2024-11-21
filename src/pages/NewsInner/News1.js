import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from '../../assets/images/news/May1SMART.jpg'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function News1({ Date, titles }) {
  const navlinks = [
    { text: "Home", url: "/" },
    {
      text: "About us",
      dropdown: true,
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
  const bannerData = {
    backgroundImage: BannerImg,
    text: "SMART System Flight-Tested by DRDO",
    subText: "Home / News / SMART System Flight-Tested by DRDO",
  };
  return (
    <div className="icprdVerticalPage news-overlay">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerData} />
      <Container className="py-4">
        <Row>
          <Col sm={12} md={12}>
            <p className="small float-right">01/05/2024</p>
          </Col>
          <Col sm={12} md={12}>
            <h2 className="pb-3 textbo"> {bannerData.text} </h2>
            <p className="text-justify">
              <p>
                1 MAY 2024: The Supersonic Missile-Assisted Release of Torpedo
                (SMART) system was successfully flight-tested at around 0830 hrs
                on May 01, 2024 from Dr APJ Abdul Kalam Island off the coast of
                Odisha. SMART is a next-generation missile-based lightweight
                torpedo delivery system, designed and developed by the Defence
                Research and Development Organisation (DRDO) to enhance the
                anti-submarine warfare capability of the Indian Navy far beyond
                the conventional range of lightweight torpedoes.
              </p>

              <p>
                This canister-based missile system consists of several advanced
                sub-systems, namely a two-stage solid propulsion system,
                electromechanical actuator system, precision inertial navigation
                system etc. The system carries an advanced light-weight torpedo
                as a payload along with a parachute-based release system.
              </p>

              <p>
                The missile was launched from the ground mobile launcher.
                Several state-of-the-art mechanisms such as symmetric
                separation, ejection and velocity control have been validated in
                this test.
              </p>

              <p>
                Raksha Mantri Shri Rajnath Singh has complimented the DRDO and
                the industry partners on the successful flight test of SMART.
                “The development of the system will further enhance the strength
                of our Navy,” he said.
              </p>

              <p>
                Secretary, Department of Defence R&D and Chairman DRDO Dr Samir
                V Kamat lauded the synergistic efforts of the entire SMART team
                and urged it to continue on the path of excellence.
              </p>
              <p>
                <strong>Source: Press Information Bureau </strong>
              </p>
            </p>
          </Col>
        </Row>
      </Container>

      <SupportUs />
      <Footer />
    </div>
  );
}
