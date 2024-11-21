import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/news/May2_India.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function News2({ Date, titles }) {
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
    text: "11th India - New Zealand JTC Meeting Held ",
    subText: "Home / News / 11th India - New Zealand JTC Meeting Held ",
  };
  return (
    <div className="icprdVerticalPage tenter news-overlay">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerData} />
      <Container className="py-4">
        <Row>
          <Col sm={12} md={12}>
            <p className="small float-right">02/05/2024</p>
          </Col>
          <Col sm={12} md={12}>
            <h2 className="pb-3 textbo"> {bannerData.text}</h2>
            <p className="text-justify">
              <p>
                2 MAY 2024: A delegation led by the Commerce Secretary, Shri
                Sunil Barthwal held several constructive and outcome-oriented
                meetings in New Zealand from 26-27 April 2024 to work on ways to
                deepen the existing bilateral relations. These meetings were
                held with the Minister for Trade of New Zealand Hon. Todd
                McClay, Acting Chief Executive and Secretary of Foreign Affairs
                and Trade of New Zealand, Mr. Brook Barrington, the India-New
                Zealand Business Council (INZBC) and the 11th India - New
                Zealand Joint Trade Committee (JTC) Meeting.
              </p>

              <p>
                Both sides acknowledged the existing huge potential in both
                economies and mutual trade complementarities, there is a
                substantial potential to increase trade and people-to-people
                contacts. These meetings had focused discussions on several key
                areas aimed at promoting bilateral trade and cooperation,
                marking a pivotal moment in strengthening economic ties and
                fostering collaboration between the two nations, building upon
                the existing close ties through people-to-people and business
                contacts.
              </p>

              <p>
                The meetings reviewed progress on market access issues, and
                economic cooperation projects and explored opportunities for new
                initiatives. Both sides discussed the establishment of robust
                bilateral economic dialogue architecture and the creation of
                working groups in sectors like Agriculture; Food Processing,
                Storage & Transportation; Forestry and Pharmaceuticals to
                facilitate ongoing collaboration on key trade and economic
                issues. Notably, discussions also included the cooperation in
                horticulture sector, including cooperation in kiwi fruit sector
                (quality & productivity, proper storage in pack houses and their
                suitable transportation) as well as the dairy sector. Once
                working groups are established, India and New Zealand will
                review the progress made by those working groups and the
                recommendations thereof at regular intervals.
              </p>

              <p>
                The meetings addressed bilateral trade matters of mutual
                interest, including issues related to market access, non-tariff
                barriers (NTBs), and sanitary and phytosanitary (SPS) measures
                on products like grapes, okra and mangoes, Mutual Recognition
                Arrangement (MRA) in Organic products, simplified homologation
                including through mutual recognition of comparable domestic
                standards for vehicles, etc. Both parties reaffirmed their
                commitment to resolve these issues through constructive dialogue
                and cooperation under the existing mechanism of JTC.
              </p>

              <p>
                The services sector and enhancing its scale for bilateral trade
                was given special focus during the discussions held at various
                levels which revealed great interest from both sides for
                increasing business-to-business as well as people-to-people
                contacts and to work on the skill gaps and how the same can be
                strengthened through capacity building and improving the ease of
                mobility. It touched upon areas such as the hospitality sector
                including adventure tourism, nursing, telemedicine, education,
                air connectivity, Joint R&D (wherever feasible), startups, etc.
              </p>

              <p>
                Collaboration in the area of pharmaceuticals and medical devices
                sector was discussed at length, including the adoption of
                fast-tracking of regulatory processes and quality assessment of
                manufacturing facilities using, as appropriate, the inspection
                reports of comparable overseas regulators. Greater sourcing of
                medicines from India and cooperation in the medical device
                sector was also discussed.
              </p>
              <p>
                Both parties briefly explored opportunities for collaboration in
                digital trade, meeting Nationally Determined Contributions,
                cross border payment systems, among others. Discussions also
                encompassed cooperative engagement within platforms such as G20,
                Indo-Pacific Economic Framework for Prosperity (IPEF), and other
                plurilateral and multi-lateral associations and how to address
                imperative economic challenges and opportunities. Both sides
                reaffirmed their commitment to the principles of the World Trade
                Organization (WTO) to uphold a rules-based international trading
                system.
              </p>
              <p>
                Overall, it was a common understanding that the existing
                co-operation can be taken forward with continuous dialogue.
                Hence, both sides committed to holding regular meetings at all
                levels to sort out issues and work on collaborative and
                cooperative activities in existing as well as areas that remain
                unexplored.
              </p>
              <p>
                <strong> Source: Press Information Bureau </strong>
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
