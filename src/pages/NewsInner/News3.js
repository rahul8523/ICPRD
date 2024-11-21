import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/news/May3_nigeria.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function News3({ Date, titles }) {
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
    text: "2nd Session of India-Nigeria Joint Trade Committee Held",
    subText:
      "Home / News / 2nd Session of India-Nigeria Joint Trade Committee Held",
  };
  return (
    <div className="icprdVerticalPage news-overlay">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerData} />
      <Container className="py-4">
        <Row>
          <Col sm={12} md={12}>
            <p className="small float-right">03/05/2024</p>
          </Col>
          <Col sm={12} md={12}>
            <h2 className="pb-3 textbo"> {bannerData.text}</h2>
            <p className="text-justify">
              <p>
                3 May 2024: A seven-member delegation from India led by
                Additional Secretary, Department of Commerce, Ministry of
                Commerce and Industry, Shri Amardeep Singh Bhatia, accompanied
                by High Commissioner of India to Federal Republic of Nigeria
                Shri G Balasubramanian and Economic Adviser, Department of
                Commerce, Ms. Priya P. Nair held a Joint Trade Committee (JTC)
                meeting with their Nigerian counterparts in Abuja from
                29.04.2024 to 30.04.2024. The JTC was co-chaired by the
                Permanent Secretary, Federal Ministry of Industry Trade and
                Investment, Nigeria, Ambassador Nura Abba Rimi and Additional
                Secretary, Department of Commerce.
              </p>

              <p>
                In a comprehensive dialogue, both sides undertook a detailed
                review of recent developments in bilateral trade and investment
                ties and acknowledged the vast untapped potential for further
                expansion. To this effect, both sides identified several areas
                of focus for enhancing both bilateral trade as well as mutually
                beneficial investments. These include resolving market access
                issues of both sides and cooperation in key sectors such as
                Crude oil and Natural Gas, Pharmaceuticals, Unified Payments
                Interface (UPI), Local Currency Settlement System, Power Sector
                and Renewable Energy, Agriculture & Food Processing, Education,
                Transport, Railway, Aviation, MSMEs, Development etc. Both sides
                agreed to an early conclusion of the Local Currency Settlement
                System Agreement to further strengthen bilateral economic ties.
              </p>
              <p>
                The official delegation from India consisted of officials from
                the Reserve Bank of India (RBI), EXIM Bank of India and National
                Payments Corporation of India (NPCI). The officials of both
                sides actively engaged in the proceedings of the JTC. The
                discussions were held in a cordial and friendly atmosphere and
                were fruitful. There was an enthusiastic response towards
                greater cooperation, addressing pending issues, boosting trade
                and investment, and greater people-to-people contacts.
              </p>

              <p>
                In a concerted effort to bolster bilateral trade, both sides
                committed to expeditiously addressing all issues impeding
                bilateral trade and facilitating trade promotion between the two
                nations. A business delegation led by CII also accompanied the
                official delegation comprising representatives from various
                sectors like power, fintech, telecommunications, electrical
                machinery, pharmaceuticals, etc. The deliberations of the 2nd
                Session of India-Nigeria JTC were cordial and forward-looking,
                indicative of the amicable and special relations between the two
                countries.
              </p>

              <p>
                Nigeria is the 2nd largest trading partner of India in the
                African region. Bilateral trade between India and Nigeria stood
                at USD 11.8 billion in 2022-23. In the year 2023-24, the
                bilateral trade stands at 7.89 billion showing a declining
                trend. With a total investment of USD 27 Billion, approximately
                135 Indian companies are actively engaged in Nigeria’s vibrant
                market. These investments traverse diverse sectors, encompassing
                infrastructure, manufacturing, consumer goods and services.
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
