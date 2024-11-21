import React from "react";
import ContEmail from '../../assets/images/contact/email.png';
import ContGlobal from '../../assets/images/contact/global.png';
import ContLocation from '../../assets/images/contact/loation.png';
import ContMap from '../../assets/images/contact/map.png';
import ContactPhone from '../../assets/images/contact/phone.png';
import Contactel from '../../assets/images/contact/tel.png';
import './Contact.css'

import BannereconomicPolicy from "../../assets/images/contact/contactsdd.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SupportUs from "../../components/SupportUs/SupportUs";

export default function Contact() {
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
    text: "Contact Us",
    subText: "Home / Contact Us",
  };
  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />
      
     <Container style={{width:"90%"}} className="my-5">
        <Row>
        <Col sm={12} md={5} className="p-0">
        <div className="ecopolicy">

        <div className="d-flex align-items-start">
          <img src={ContLocation} alt="ContLocation" width={19}/>
           <div className="pl-4">
           <h6 className="m-0">
           India Centre for Policy Research and Development <br/> 705, New Delhi House,Barakhamba Road, Connaught Place, New Delhi-110001
           </h6>
           </div>
          </div>

          <div className="d-flex align-items-start pt-3">
          <img src={ContEmail} alt="ContEmail" width={19}/>
           <div className="pl-4">
           <h6 className="m-0"><a href="secretariat.icprd@gmail.com">secretariat.icprd@gmail.com</a></h6>
            <h6><a href="mailto:secretariat@icprd.org.in">secretariat@icprd.org.in</a></h6>
           </div>
          </div>
          <div className="d-flex align-items-start pt-3">
          <img src={Contactel} alt="Contactel" width={19}/>
          <div className="pl-4">
           <h6><a href="+911141101333"> +91 (11) 41101333 </a></h6>
           </div>
          </div>

          <div className="d-flex align-items-start pt-3">
          <img src={ContactPhone} alt="ContactPhone" width={19}/>
          <div className="pl-4">
           <h6 className="m-0"><a href="tel:+919717316565">+91 9717 316 565</a></h6>
            <h6><a href="tel:+919899811007">+91 9899 811 007</a></h6>
           </div>
          </div>

          <div className="d-flex align-items-start pt-5">
          <img src={ContGlobal} alt="ContGlobal" width={19}/>
          <div className="pl-4">
           <h6> <a href="https://www.icprd.org.in"> https://www.icprd.org.in </a></h6>
           </div>
          </div>

      </div>
      
        </Col>
        <Col sm={12} md={7}>
        <img src={ContMap} alt="ContMap" style={{width:"100%"}}/>
        </Col>
        </Row>
     </Container>
     
     <SupportUs/>
      <Footer />
    </div>
  );
}
