import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import Imagebands from "../../assets/images/Blog/image.png";
import BannerImg from "../../assets/images/VerticlesBanners/post5.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function Post5({ Date, titles }) {
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
    { text: "Support Us", url: "/support" },
    {
      text: 'GlobalChapter',
      dropdown: true,
      dropdownOptions: [
          { text: 'USA', url: '/' },
          { text: 'UK', url: '/' },
          { text: 'South Africa', url: '/' },
      ],
  },
    { text: "Contact Us", url: "/contact" },
    // ... other links
  ];
  const bannerData = {
    backgroundImage: BannerImg,
    text: "Legalities around Climate Change",
    subText: "Home / Legalities around Climate Change",
  };
  return (
    <div className="icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerData} />
      <Container className="py-4">
        <Row>
          <Col sm={12} md={12}>
            <p className="small float-right">15/12/2023</p>
          </Col>
          <Col sm={12} md={12}>
            <h2 className="pb-3 textbo"> {bannerData.text}</h2>
            <p className="text-justify">
              <p>
                India, deeply rooted in its diverse South Asian landscapes, is
                currently confronting the harsh and multifaceted realities of
                climate change. The Indian subcontinent, known for its vast
                geographical diversity, is experiencing various challenges
                directly attributed to climate-induced phenomena. The evidence
                is clear and concerning, ranging from the melting glaciers in
                the Himalayas to the increasingly frequent and severe cyclones
                battering the coasts of the Bay of Bengal.
              </p>
              <p>
                Recent trends in Indian climate patterns have been a cause of
                concern. Data from the Indian Meteorological Department
                indicates a significant temperature increase, with an average
                rise of approximately 0.7°C over the last century. While the
                figure may appear modest at first glance, its implications are
                extensive and profound, particularly for a nation with an
                economy deeply entrenched in agriculture. The Indian economy,
                heavily dependent on the predictability of monsoons, is now
                grappling with the repercussions of erratic rainfall patterns.
                This unpredictability has led to a surge in floods and droughts,
                disrupting millions' lives and livelihoods.
              </p>
              <p>
                Furthermore, India's coastal regions are facing their own set of
                challenges. Major cities like Mumbai and Chennai have endured
                catastrophic floods, a grim reminder of rising sea levels and
                the intensification of monsoon activities. These occurrences
                combine natural anomalies and the consequences of human-induced
                climate change, thus painting a stark and urgent picture of the
                future crisis. This crisis scenario necessitates immediate and
                collective action to mitigate further environmental and
                socio-economic damage.
              </p>

              <p>
                India's legal response to climate change is robust and
                multi-layered, weaving together national policies and
                international commitments:
              </p>
              <ul class="first-l">
                <li>
                  <strong>Environmental Protection Act, 1986:</strong> The law
                  is the backbone of Indian legislation laws and provides the
                  foundation for India's environmental policy, including
                  measures to combat climate change. Under this act, various
                  rules and regulations have been formulated to address specific
                  environmental issues.
                </li>
                <li>
                  <strong>
                    National Action Plan on Climate Change (NAPCC):
                  </strong>
                  Launched in 2008, the NAPCC outlines India's strategy to
                  tackle climate change and achieve sustainable development. It
                  encompasses eight national missions, covering solar energy,
                  enhanced energy efficiency, sustainable habitat, water
                  conservation, sustaining the Himalayan ecosystem, a green
                  India, sustainable agriculture, and strategic knowledge for
                  climate change.
                </li>
                <li>
                  <strong>
                    India's Commitments Under International Agreements:
                  </strong>{" "}
                  India is a signatory to the United Nations Framework
                  Convention on Climate Change (UNFCCC) and the Paris Agreement.
                  The country has pledged ambitious Nationally Determined
                  Contributions (NDCs) to reduce its carbon footprint and
                  enhance sustainable practices.
                </li>
                <li>
                  <strong>Renewable Energy Initiatives: </strong>The government
                  has set lofty targets for renewable energy capacity, aiming to
                  reach 175 GW by 2022 and 450 GW by 2030. These targets include
                  significant investments in solar, wind, biomass, and small
                  hydropower projects.
                </li>
                <li>
                  <strong>
                    State-Level Initiatives and Adaptation Measures:
                  </strong>{" "}
                  Recognizing the varied impacts of climate change across
                  different regions, state governments in India have developed
                  state action plans on climate change tailored to address local
                  environmental challenges and vulnerabilities.
                </li>
                <li>
                  <strong>Public Awareness and Community Participation:</strong>{" "}
                  Beyond legislative measures, India focuses on raising public
                  awareness and encouraging community participation in
                  environmental conservation. Initiatives like afforestation
                  programs, pollution control campaigns, and biodiversity
                  conservation projects aim to engage citizens in the fight
                  against climate change.
                </li>
                <li>
                  <strong> Judicial Activism:</strong> Indian courts,
                  particularly the Supreme Court and various High Courts, have
                  played a pivotal role in enforcing environmental laws and
                  addressing climate change issues. The judiciary has ensured
                  that environmental concerns are prioritized and addressed
                  through landmark judgments and the appointment of expert
                  committees.
                </li>
              </ul>
              <p>
                The Constitution of India is unique and explicitly includes
                environmental protection within its framework, demonstrating a
                clear commitment to environmental preservation. The
                incorporation of environmental concerns is reflected in several
                key provisions that are categorized as the Directive Principles
                and the Fundamental Duties.
              </p>
              <img src={Imagebands} width="50%" alt="Directive Principles" className="py-4 m-auto d-block mutor"/>
              <h4>Directive Principles of State Policy</h4>
                <h5><strong>Article 48A</strong></h5>
              
              <p>
                Introduced by the 42nd Amendment in 1976, this article directs
                the State to protect and improve the environment and safeguard
                forests and wildlife. It serves as a guiding principle for the
                government in making laws and policies related to environmental
                conservation.
              </p>

              <h4>Fundamental Duties</h4>
              <h5><strong>Article 51A(g)</strong></h5>
              <p>
                This article, also added by the 42nd Amendment, imposes a duty
                on every citizen of India to protect and improve the natural
                environment, including forests, lakes, rivers, and wildlife, and
                to have compassion for living creatures. This provision
                emphasizes the collective responsibility of citizens in
                environmental conservation.
              </p>

              <p>
                Some of the Legal Precedents and Case Laws related to
                environmental protection are:
              </p>
              <ul class="first-l">
                <li>
                  <strong> M.C. Mehta vs Union of India (1987):</strong> This
                  landmark case, often called the 'Oleum Gas Leak Case,' led to
                  the formulation of the 'Absolute Liability Principle.' The
                  Supreme Court ruled that companies engaged in hazardous
                  activities bear absolute liability for any harm caused and
                  cannot claim any exemption.
                </li>
                <li>
                  T.N. Godavarman Thirumulpad vs Union of India (1997): Here, in
                  this case, the Supreme Court of India expanded the definition
                  of 'forest' under the Forest Conservation Act, 1980, bringing
                  all forests,
                </li>

                <li>
                  Vellore Citizens Welfare Forum vs. Union of India (1996): The
                  case was particularly significant for implementing the
                  'Precautionary Principle' and the 'Polluter Pays Principle' in
                  Indian environmental law. The court held that environmental
                  measures must anticipate, prevent, and attack the causes of
                  environmental degradation.
                </li>
              </ul>

              <p>
                These constitutional mandates and judicial precedents have
                significantly influenced central and State legislation,
                enhancing public interest litigation in environmental matters
                and empowering citizens to seek legal redress for environmental
                harm.
              </p>
              <p>
                As we navigate this ongoing battle against climate change, the
                strength of our legal and policy frameworks is being tested in
                their practical application. The task is daunting, yet it offers
                a chance to forge innovative, collaborative paths toward
                sustainability. Balancing economic growth with environmental
                preservation remains our steadfast goal as we strive to secure a
                resilient and prosperous future for India's billion-plus
                population.
              </p>
              <p><strong>Authored By: Prachi Jain</strong> </p>
            </p>
          </Col>
        </Row>
      </Container>

      <SupportUs />
      <Footer />
    </div>
  );
}
