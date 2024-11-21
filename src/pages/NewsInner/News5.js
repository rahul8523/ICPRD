import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/news/47909627.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function News5({ Date, titles }) {
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
    text: "India to Host ACTM 46 & CEP 26 in May",
    subText: "Home / News / India to Host ACTM 46 & CEP 26 in May",
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
            <h2 className="pb-3 textbo"> {bannerData.text}</h2>
            <p className="text-justify">
              <p>
                01 MAY 2024: The Ministry of Earth Sciences (MoES), Government
                of India, through the National Centre for Polar and Ocean
                Research (NCPOR), will host the 46th Antarctic Treaty
                Consultative Meeting (ATCM 46) and the 26th Meeting of the
                Committee for Environmental Protection (CEP 26) from May 20 to
                30, 2024, in Kochi, Kerala. This aligns with India’s poise to
                facilitate constructive global dialogue on environmental
                stewardship, scientific collaboration, and cooperation in
                Antarctica.
              </p>
              <p>
                The ATCM and meetings of the CEP are pivotal in the
                international community's ongoing efforts to safeguard
                Antarctica's fragile ecosystem and promote scientific research
                in the region. Convened annually under the Antarctic Treaty
                System, these meetings serve as forums for Antarctic Treaty
                Consultative Parties and other stakeholders to address
                Antarctica's pressing environmental, scientific, and governance
                issues. The Antarctic Treaty, signed in 1959 and entered into
                force in 1961, established Antarctica as a region dedicated to
                peaceful purposes, scientific cooperation, and environmental
                protection. Over the years, the Treaty has garnered widespread
                support, with 56 countries currently party to it. The CEP was
                established under the Protocol on Environmental Protection to
                the Antarctic Treaty (the Madrid Protocol) in 1991. The CEP
                advises the ATCM on environmental protection and conservation in
                Antarctica.
              </p>
              <p>
                India has been a Consultative Party to the Antarctic Treaty
                since 1983. It participates in the decision-making process along
                with the other 28 Consultative Parties to the Antarctic Treaty
                to date. India’s first Antarctic research station, Dakshin
                Gangotri, was established in 1983. At present, India operates
                two year-round research stations: Maitri (1989) and Bharati
                (2012). The permanent research stations facilitate Indian
                Scientific Expeditions to Antarctica, which have been ongoing
                annually since 1981. In 2022, India enacted the Antarctic Act,
                reaffirming its commitment to the Antarctic Treaty.
              </p>

              <p>
                As a signatory to the Antarctic Treaty, India remains dedicated
                to environmental protection, scientific cooperation, and
                peaceful operations in Antarctica. Dr M Ravichandran, Secretary
                of the Ministry of Earth Sciences, highlighted the importance of
                India hosting the ATCM and CEP meetings in 2024. He said, “We
                look forward as a country to fostering meaningful exchanges of
                knowledge and expertise to advance the shared goals of
                environmental conservation and scientific research in the
                Antarctic region.”
              </p>

              <p>
                The Antarctic Treaty Secretariat (ATS) serves as the
                administrative hub for the Antarctic Treaty System. Established
                in 2004, the ATS coordinates the ATCM and CEP meetings, reposits
                and disseminates information, and facilitates diplomatic
                communication, exchanges, and negotiations related to Antarctic
                governance and management. It also monitors compliance with
                Antarctic Treaty provisions and agreements and provides
                assistance and guidance to Antarctic Treaty Parties on treaty
                implementation and enforcement matters.
              </p>

              <p>
                Key items on the 46th ATCM agenda include strategic planning for
                sustainable management of Antarctica and its resources; policy,
                legal, and institutional operations; biodiversity prospecting;
                inspections and exchange of information and data; research,
                collaboration, capacity building and cooperation; addressing
                climate change impacts; development of tourism framework; and
                promoting awareness. Lectures of the Scientific Committee on
                Antarctic Research will also be conducted. The 26th CEP agenda
                focuses on Antarctic environment evaluation, impact assessment,
                management, and reporting; climate change response; area
                protection and management plans including marine spatial
                protection; and conservation of Antarctic biodiversity.
              </p>

              <p>
                The hosting of the 46th ATCM and 26th CEP meeting reflects
                India's growing role as a responsible global stakeholder in
                efforts to preserve Antarctica for future generations. Through
                open dialogue, collaboration, and consensus-building, India
                remains committed to upholding the principles of the Antarctic
                Treaty and contributing to the sustainable management of one of
                Earth's last pristine wilderness areas.
              </p>

              <p>
                India’s scientific and strategic endeavours in the polar regions
                (the Arctic and Antarctic), the Himalayas, and the Southern
                Ocean are under the National Centre for Polar and Ocean Research
                (NCPOR) in Goa. NCPOR is an esteemed autonomous institution
                under MoES, Government of India. MoES has set up a Host Country
                Secretariat with Dr Vijay Kumar, Scientist G & Adviser, as Head
                at MoES HQ to successfully coordinate and organise the event.
                India has proposed the name of Ambassador Pankaj Saran, a
                distinguished former Deputy National Security Advisor, to chair
                the 46th ATCM.
              </p>

              <p>
                Participation in the ATCM and CEP meetings is restricted to
                delegates designated by Parties, Observers and invited Experts.
                Over 350 delegates from 60+ countries are expected to attend the
                46th ATCM and 26th CEP this year hosted by NCPOR, MoES at Lulu
                Bolgatty International Convention Centre (LBICC) in Kochi,
                India.
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
