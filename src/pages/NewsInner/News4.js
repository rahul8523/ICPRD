import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/news/May3_mineral.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function News4({ Date, titles }) {
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
    text: "India Witnesses 8% Growth in Mineral Production",
    subText: "Home / News / India Witnesses 8% Growth in Mineral Production",
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
                3 MAY 2024: The index of mineral production of the mining and
                quarrying sector for the month of February 2024 (Base:
                2011-12=100) at 139.6 is 8% higher as compared to the level in
                February 2023. As per the provisional statistics of the Indian
                Bureau of Mines (IBM), the cumulative growth for the period
                April-February, 2023-24 over the corresponding period of the
                previous year is 8.2%.{" "}
              </p>
              <p>
                The production level of important minerals in February 2024
                were: Coal 966 lakh tonne, Lignite 42 lakh tonne, Natural gas
                (utilized) 2886 million cu.m., Petroleum (crude) 23 lakh tonne,
                Bauxite 2414 thousand tonne, Chromite 400 thousand tonne, Copper
                conc. 11 thousand tonne , Gold 255 kg, Iron ore 244 lakh tonne,
                Lead conc. 27 thousand tonne, Manganese ore 295 thousand tonne,
                Zinc conc. 149 thousand tonne, Limestone 387 lakh tonne,
                Phosphorite 218 thousand tonne, and Magnesite 10 thousand tonne.
              </p>

              <p>
                Important minerals showing positive growth during February 2024
                over February 2023 include Gold (86%), Copper Conc.(28.7%),
                Bauxite (21%), Chromite (21%), Phosphorite (19%),
                Limestone(13%), Coal (12%), Natural gas (U) (11%),
                Petroleum(crude) (8%), Manganese Ore (6%), Magnesite (3%),
                Lignite(2.8%), and Zinc Conc.(2.8%). Other important minerals
                showing negative growth include Iron Ore (-0.7%) and Lead
                Conc.(-14%).
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
